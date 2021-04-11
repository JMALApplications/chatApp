import React from "react"

const ConversationsNavContainer = (props) => {

    return (

        <div className="h-screen w-2/12 overflow-auto bg-purple-500 text-white">
            {props.children}
        </div>

    )

}

export default ConversationsNavContainer