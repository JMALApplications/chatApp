import React from "react"
import OpenChatButton from "../../components/iframe/chat-box/open-chat-button/open-chat-button"
import ChatBoxContainer from "../../components/iframe/chat-box/chat-box-container/chat-box-container"
import ChatBoxInput from "../../components/iframe/chat-box/chat-box-input/chat-box-input"
import ChatBoxForm from "../../components/iframe/chat-box/chat-box-form/chat-box-form"
import ChatBoxSendButton from "../../components/iframe/chat-box/chat-box-send-button/chat-box-send-button"
import ChatBoxChatLog from "../../components/iframe/chat-box/chat-box-chat-log/chat-box-chat-log"
import ChatBoxFormContainer from "../../components/iframe/chat-box/chat-box-form-container/chat-box-form-container"
import ChatBoxWrapper from "../../components/iframe/chat-box/chat-box-wrapper/chat-box-wrapper"
import ChatBoxHeader from "../../components/iframe/chat-box/chat-box-header/chat-box-header"

const ChatBox = () => {
    return (
        <div>
            <OpenChatButton />
            <ChatBoxWrapper>
                <ChatBoxContainer>
                    <ChatBoxHeader />
                    <ChatBoxChatLog />
                    <ChatBoxFormContainer>
                        <ChatBoxForm>
                            <ChatBoxInput />
                            <ChatBoxSendButton />
                        </ChatBoxForm>
                    </ChatBoxFormContainer>
                </ChatBoxContainer>
            </ChatBoxWrapper>
        </div>
    )
}

export default ChatBox