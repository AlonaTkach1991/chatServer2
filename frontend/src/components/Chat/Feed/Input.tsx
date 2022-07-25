import { useMutation } from "@apollo/client";
import { Box, Input } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import MessageOperations, {
  SendMessageVariables,
} from "../../../graphql/operations/messages";
import { ObjectID } from "bson";

interface MessageInputProps {
  session: Session;
  conversationId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  session,
  conversationId,
}) => {
  const [messageBody, setMessageBody] = useState("");

  const [sendMessage] = useMutation<
    { sendMessage: boolean },
    SendMessageVariables
  >(MessageOperations.Mutations.sendMessage);

  const onSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!messageBody) {
      return;
    }

    /**
     * Optimistically update UI
     */
    setMessageBody("");

    try {
      const { id: senderId } = session.user;
      const newId = new ObjectID().toString();
      const newMessage: SendMessageVariables = {
        id: newId,
        senderId,
        conversationId,
        body: messageBody,
      };
      const { data, errors } = await sendMessage({
        variables: {
          ...newMessage,
        },
        optimisticResponse: {
          sendMessage: true,
        },
        update: (proxy) => {
          const existing = proxy.readQuery({
            query: MessageOperations.Query.messages,
            variables: { conversationId },
          });

          proxy.writeQuery({
            query: MessageOperations.Query.messages,
            variables: { conversationId },
            data: {
              // @ts-ignore
              ...existing,
              messages: [
                {
                  id: newId,
                  body: messageBody,
                  createdAt: Date.now(),
                  sender: {
                    id: session.user.id,
                    username: session.user.username,
                  },
                },
                // @ts-ignore
                ...existing.messages,
              ],
            },
          });
        },
      });

      if (!data?.sendMessage || errors) {
        throw new Error("Error sending message");
      }
    } catch (error: any) {
      console.log("onSendMessage error", error);
      toast.error(error?.message);
    }
  };

  return (
    <Box px={4} py={8} width="100%" flexGrow={1}>
      <form onSubmit={onSendMessage}>
        <Input
          value={messageBody}
          onChange={(event) => setMessageBody(event.target.value)}
          size="lg"
          placeholder="New message"
          color="whiteAlpha.900"
          _focus={{
            boxShadow: "none",
            border: "1px solid",
            borderColor: "whiteAlpha.300",
          }}
          _hover={{
            borderColor: "whiteAlpha.300",
          }}
        />
      </form>
    </Box>
  );
};
export default MessageInput;
