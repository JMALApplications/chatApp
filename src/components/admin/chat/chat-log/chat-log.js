import React from "react"

const ChatLog = (props) => {

    return (

        <div className="mt-auto w-full overflow-auto">
            {props.children}
        </div>

    )

}

export default ChatLog