import React from "react"

const ChatBoxFormContainer = (props) => {

    return (

        <div className="block w-full rounded-md bg-indigo-500">
            {props.children}
        </div>

    )

}

export default ChatBoxFormContainer