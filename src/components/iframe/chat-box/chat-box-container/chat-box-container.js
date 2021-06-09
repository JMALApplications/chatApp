import React from "react"

const ChatBoxContainer = (props) => {

    return (
        <div className="w-full h-full rounded-md">
            {props.children}
        </div>
    )

}

export default ChatBoxContainer