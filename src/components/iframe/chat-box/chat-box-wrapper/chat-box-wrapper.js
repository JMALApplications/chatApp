import React from "react"

const ChatBoxWrapper = (props) => {

    return (

        <div className="relative rounded-md" style={{width: "350px", height: "400px"}}>
            {props.children}
        </div>

    )

}

export default ChatBoxWrapper