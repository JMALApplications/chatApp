import React, { useState } from "react"
import ConversationsNavContainer from "../../components/admin/conversations-nav/conversations-nav-container"
import ConversationsNavItem from "../../components/admin/conversations-nav/conversations-nav-item"
import ConversationsNavList from "../../components/admin/conversations-nav/conversations-nav-list"
import ConversationsNavSearchBar from "../../components/admin/conversations-nav/conversations-nav-search-bar"

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

        <ConversationsNavContainer>
            <ConversationsNavSearchBar 
                changed={(event) => {
                    setConversationsSearchTerm(event.target.value)
                }}
            />
            <ConversationsNavList>
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

    )

}

export default Conversations