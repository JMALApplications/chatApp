import React from "react"

const ConversationsProfileHeader = (props) => {

    return (
        
        <div className="flex mt-5">
            <div className="mr-2 mt-2 my-auto flex h-16 w-16 text-white text-xl bg-indigo-500 rounded-full items-center justify-center">
                {props.visitorId.charAt(0)}
            </div>
            <div className="block py-4 px-2 w-64 h-auto">
                <h4>
                    <span>{"#" + props.visitorId}</span>
                </h4>
                <div className="overflow-hidden block font-bold">
                    <p className="whitespace-no-wrap">{props.visitorLocation}</p>
                </div>
            </div>
        </div>
    )

}

export default ConversationsProfileHeader