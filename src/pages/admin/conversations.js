import React, { useState } from "react"
import ConversationsContainer from "../../components/admin/conversations/conversations-container"
import ConversationsItem from "../../components/admin/conversations/conversations-item"
import ConversationsList from "../../components/admin/conversations/conversations-list"
import ConversationsSearchBar from "../../components/admin/conversations/conversations-search-bar"

const Conversations = () => {

    const [conversationsSearchTerm, setConversationsSearchTerm] = useState("")

    const testData = [
        { 
            conversationUrl : "/admin/conversations/user-1",
            visitorId : "72512",
            conversationData : "April 6",
            conversationLastMessage: "Hi this is a test message of a test"
        },
        {
            conversationUrl : "/admin/conversations/user-2",
            visitorId : "72513",
            conversationData : "April 4",
            conversationLastMessage: "Hi this is another test message of a test"
        },
        {
            conversationUrl : "/admin/conversations/user-3",
            visitorId : "72516",
            conversationData : "April 1",
            conversationLastMessage: "The third message test"
        }
    ]

    return (

        <ConversationsContainer>
            <ConversationsSearchBar 
                changed={(event) => {
                    setConversationsSearchTerm(event.target.value)
                }}
            />
            <ConversationsList>
                {testData.filter((val) => {
                    if (conversationsSearchTerm === "") {
                        return val
                    } else if (val.conversationLastMessage.toLowerCase().includes(conversationsSearchTerm.toLowerCase())) {
                        return val
                    } else {
                        return null
                    }
                }).map((val, key) => {
                    return (
                        <ConversationsItem
                            conversationUrl={val.conversationUrl}
                            visitorId={val.visitorId}
                            conversationDate={val.conversationData}
                            conversationLastMessage={val.conversationLastMessage}
                            key={key}
                        />
                    ) 
                })}
            </ConversationsList>
        </ConversationsContainer>

    )

}

export default Conversations