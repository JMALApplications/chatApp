import React from "react"
import ConversationsContainer from "../../components/admin/conversations/conversations-container"
import ConversationsItem from "../../components/admin/conversations/conversations-item"
import ConversationsList from "../../components/admin/conversations/conversations-list"
import ConversationsSearchBar from "../../components/admin/conversations/conversations-search-bar"

const Conversations = () => {

    return (

        <ConversationsContainer>
            <ConversationsSearchBar />
            <ConversationsList>
                <ConversationsItem
                    conversationUrl="/admin/conversations/user-1"
                    visitorId="72512"
                    conversationDate="April 6"
                    conversationExcerpt="Hi this is a test message of a test"
                />
                <ConversationsItem
                    conversationUrl="/admin/conversations/user-2"
                    visitorId="72513"
                    conversationDate="April 4"
                    conversationExcerpt="Hi this is another test message of a test"
                />
            </ConversationsList>
        </ConversationsContainer>

    )

}

export default Conversations