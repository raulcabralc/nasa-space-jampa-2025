import { useState } from "react";
import {
  BotMessage,
  Chat,
  ChatBotContainer,
  ChatBotInput,
  Empty,
  InputButton,
  InputContainer,
  InputWrapper,
  UserMessage,
} from "./ChatBot.styled";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";

interface Message {
  type: "user" | "bot";
  text: string;
}

function ChatBot() {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);

  function handleSendMessage() {
    if (inputValue.trim() !== "") {
      setIsEmpty(false);
      setMessages([...messages, { type: "user", text: inputValue }]);
      setInputValue("");
      handleReceiveMessage();
    }
  }

  async function handleReceiveMessage() {
    setIsSending(true);

    await new Promise(resolve =>
      setTimeout(() => {
        resolve(null);
      }, 150)
    );

    setMessages(prevMessages => [
      ...prevMessages,
      { type: "bot", text: "Pensando..." },
    ]);

    try {
      const response = await axios.post("http://localhost:5000", {
        text: inputValue,
      });

      setMessages(prevMessages => [
        ...prevMessages.slice(0, -1),
        { type: "bot", text: response.data.message },
      ]);
    } catch {
      setMessages(prevMessages => [
        ...prevMessages.slice(0, -1),
        {
          type: "bot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    }

    setIsSending(false);
  }

  return (
    <ChatBotContainer>
      <Chat>
        {isEmpty && <Empty>Ask anything about biological space</Empty>}
        {messages.map((message, index) => {
          if (message.type === "user") {
            return <UserMessage key={index}>{message.text}</UserMessage>;
          } else {
            return <BotMessage key={index}>{message.text}</BotMessage>;
          }
        })}
      </Chat>
      <InputWrapper>
        <InputContainer>
          <ChatBotInput
            disabled={isSending}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Ask anything about biological space"
            onKeyDown={e => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <InputButton
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ""}
          >
            <FaPaperPlane size={26} />
          </InputButton>
        </InputContainer>
      </InputWrapper>
    </ChatBotContainer>
  );
}

export default ChatBot;
