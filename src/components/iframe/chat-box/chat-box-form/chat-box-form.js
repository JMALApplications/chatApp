import React from "react"

const ChatBoxForm = (props) => {

    return ( 

        <form className="flex align-middle bg-white rounded-md">
            {props.children}
        </form>
        
    )

}

export default ChatBoxForm