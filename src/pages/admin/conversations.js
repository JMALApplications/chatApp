import React, { useState } from "react"
import ChatContainer from "../../components/admin/chat/chat-container"
import ChatInput from "../../components/admin/chat/chat-input"
import ChatLog from "../../components/admin/chat/chat-log/chat-log"
import ChatLogMessage from "../../components/admin/chat/chat-log/chat-log-message"
import ConversationsNavContainer from "../../components/admin/conversations-nav/conversations-nav-container"
import ConversationsNavItem from "../../components/admin/conversations-nav/conversations-nav-item"
import ConversationsNavList from "../../components/admin/conversations-nav/conversations-nav-list"
import ConversationsNavSearchBar from "../../components/admin/conversations-nav/conversations-nav-search-bar"
import ConversationsProfileContainer from "../../components/admin/conversations-profile/conversations-profile-container"
import ConversationsProfileHeader from "../../components/admin/conversations-profile/conversations-profile-header"
import ConversationsProfileInfo from "../../components/admin/conversations-profile/conversations-profile-info"
import SidePanel from "../../components/admin/side-panel/side-panel"

const Conversations = () => {
  const [conversationsSearchTerm, setConversationsSearchTerm] = useState("")

  const testData = [
    {
      conversationUrl: "/admin/conversations/user-1",
      visitorId: "72512",
      conversationData: "April 6",
      conversationLastMessage: "Hi this is a test message of a test",
    },
    {
      conversationUrl: "/admin/conversations/user-2",
      visitorId: "72513",
      conversationData: "April 4",
      conversationLastMessage: "Hi this is another test message of a test",
    },
    {
      conversationUrl: "/admin/conversations/user-3",
      visitorId: "72516",
      conversationData: "April 1",
      conversationLastMessage: "The third message test",
    },
  ]

  return (
    <>
      <div className="h-screen flex w-full">
        <SidePanel />
        <div className="flex w-full">
          <ConversationsNavContainer>
            <ConversationsNavSearchBar
              changed={event => {
                setConversationsSearchTerm(event.target.value)
              }}
            />
            <ConversationsNavList>
              {testData
                .filter(val => {
                  if (conversationsSearchTerm === "") {
                    return val
                  } else if (
                    val.conversationLastMessage
                      .toLowerCase()
                      .includes(conversationsSearchTerm.toLowerCase())
                  ) {
                    return val
                  } else {
                    return null
                  }
                })
                .map((val, key) => {
                  return (
                    <ConversationsNavItem
                      conversationUrl={val.conversationUrl}
                      visitorId={val.visitorId}
                      conversationDate={val.conversationData}
                      conversationLastMessage={val.conversationLastMessage}
                      key={key}
                    />
                  )
                })}
            </ConversationsNavList>
          </ConversationsNavContainer>
          <ChatContainer>
            <ChatLog>
              <ChatLogMessage
                visitorId="32353"
                messageSentDate="4/8/2021"
                messageSentTime="5:06 PM"
                message="Hi there this is a test message for the purpose of testing"
              />
              <ChatLogMessage
                visitorId="32353"
                messageSentDate="4/8/2021"
                messageSentTime="5:06 PM"
                message="Hi there this is another test message for the purpose of testing"
              />
            </ChatLog>
            <ChatInput />
          </ChatContainer>
          <ConversationsProfileContainer>
            <ConversationsProfileHeader
              visitorId="32353"
              visitorLocation="Pittsburgh, PA"
            />
            <ConversationsProfileInfo
              visitorName="Bob"
              visitorEmail="testbob@gmail.com"
              visitorPhoneNumber="212-522-5555"
              visitorOS="Windows 10"
              visitorIP="111.111.1111"
            />
          </ConversationsProfileContainer>
        </div>
      </div>
    </>
  )
}

export default Conversations
