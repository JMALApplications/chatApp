import React from "react"

const ChatContainer = (props) => {

    return (

        <div className="w-7/12 h-screen bg-gray-100 flex flex-col relative">
            {props.children}
        </div>

    )

}

export default ChatContainer