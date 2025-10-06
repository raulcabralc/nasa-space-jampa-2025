import styled from "styled-components";
import { fonts } from "../../constants/fonts";
import { colors } from "../../constants/colors";

const ChatBotContainer = styled.div`
  margin: 0 270px;
  display: flex;
  flex-flow: column nowrap;
`;

const Chat = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 70px;
  color: ${colors.text};
`;

const Empty = styled.h1`
  font-size: 48px;
  font-family: ${fonts.Jost};
  font-weight: 500;
  height: 100%;
  margin: 0 auto;
  margin-top: 200px;
`;

const NotEmpty = styled.div`
  font-size: 20px;
  font-family: ${fonts.Raleway};
  font-weight: 400;
  margin-top: 50px;
`;

const InputWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  padding: 0 480px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ChatBotInput = styled.input`
  width: 100%;
  height: 70px;
  border: 2px solid ${colors.mediumWhite};
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  margin-top: 10px;
  font-family: ${fonts.Raleway};
  color: ${colors.text};
  transition: all 0.15s ease;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  &:focus {
    border-color: ${colors.darkerPrimary};
  }

  &:disabled {
    opacity: 70%;
    background: ${colors.mediumWhite};
    cursor: default;
  }
`;

const InputButton = styled.button`
  position: absolute;
  right: 12px;
  top: 20px;
  background: ${colors.mediumPrimary};
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 50px;
  display: flex;
  color: white;
  transition: all 0.15s ease;

  &:hover {
    background: ${colors.darkPrimary};
  }

  &:active {
    background: ${colors.darkerPrimary};
  }

  &:disabled {
    opacity: 70%;
    background: ${colors.mediumPrimary};
    cursor: default;
  }
`;

const UserMessage = styled.p`
  &::selection {
    background-color: ${colors.mediumWhite};
    color: ${colors.text};
  }

  display: flex;
  flex-flow: column wrap;
  align-self: flex-end;
  height: 50px;
  border-radius: 40px 0 40px 40px;
  padding: 15px 20px;
  font-size: 18px;
  font-family: ${fonts.Raleway};
  font-weight: 500;
  color: ${colors.lightWhite};
  width: max-content;
  max-width: 50%;
  height: max-content;
  background: ${colors.darkPrimary};
  justify-content: center;
  margin: 3px 0;
  animation: fadeInUp 0.2s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BotMessage = styled.p`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  height: 50px;
  border-radius: 40px 40px 40px 0;
  padding: 15px 20px;
  font-size: 18px;
  font-family: ${fonts.Raleway};
  font-weight: 500;
  color: ${colors.text};
  width: max-content;
  max-width: 50%;
  height: max-content;
  background: ${colors.mediumWhite};
  justify-content: center;
  margin: 3px 0;
  animation: fadeInUp 0.2s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export {
  ChatBotContainer,
  ChatBotInput,
  InputWrapper,
  Chat,
  Empty,
  NotEmpty,
  UserMessage,
  BotMessage,
  InputButton,
  InputContainer,
};
