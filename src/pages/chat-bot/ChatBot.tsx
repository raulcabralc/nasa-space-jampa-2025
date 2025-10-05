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

interface Message {
  type: "user" | "bot";
  text: string;
}

function ChatBot() {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);

  function handleSendMessage() {
    if (inputValue.trim() !== "") {
      setIsEmpty(false);
      setMessages([...messages, { type: "user", text: inputValue }]);
      setInputValue("");
    }
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
            disabled={!inputValue.trim()}
          >
            <FaPaperPlane size={26} />
          </InputButton>
        </InputContainer>
      </InputWrapper>
    </ChatBotContainer>
  );
}

export default ChatBot;
