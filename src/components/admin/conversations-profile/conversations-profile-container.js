import React from "react"

const ConversationsProfileContainer = (props) => {

    return (
        <div className="h-screen w-3/12 bg-gray-100 p-8">
            {props.children}
        </div>
    )

}

export default ConversationsProfileContainer