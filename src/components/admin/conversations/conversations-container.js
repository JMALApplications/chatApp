import React from "react"

const ConversationsContainer = (props) => {

    return (

        <div className="h-64 w-2/12 overflow-auto bg-purple-500 text-white">
            {props.children}
        </div>

    )

}

export default ConversationsContainer