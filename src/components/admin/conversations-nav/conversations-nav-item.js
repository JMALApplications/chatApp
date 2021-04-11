import React from "react"

const ConversationsNavItem = (props) => {

    return (

        <li>
            <a href={props.conversationUrl} className="block py-2 px-4 w-full h-auto">
                <div className="mr-3 my-auto float-left flex h-12 w-2/12 bg-indigo-500 rounded-full items-center justify-center">
                    {props.visitorId.charAt(0)}
                </div>
                <h4 className="flex content-between m-0">
                    <span className="flex-1">{"#" + props.visitorId}</span>
                    <span>{props.conversationDate}</span>
                </h4>
                <div className="overflow-hidden flex">
                    <p className="whitespace-no-wrap truncate">{props.conversationLastMessage}</p>
                </div>
            </a>
        </li>
        
    )

}

export default ConversationsNavItem