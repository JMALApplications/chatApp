import React from "react"

const ChatLogMessage = (props) => {

    return (

        <div className="w-full px-5 mt-5">
            <div className="mr-3 my-auto float-left flex h-12 w-12 bg-indigo-500 rounded-full items-center justify-center">
                {props.visitorId.charAt(0)}
            </div>
            <header>
                <p>
                    <strong className="mr-2">{"#" + props.visitorId}</strong>
                    <span title={props.messageSentDate}>{props.messageSentTime}</span>
                </p>
            </header>
            <span>{props.message}</span>
        </div>

    )

}

export default ChatLogMessage