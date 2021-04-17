import React from "react"

const ConversationsNavSearchBar = (props) => {

    return (

        <div className="p-2">
            <div className="relative">
                <input 
                    type="text" 
                    className="w-full h-10 text-black bg-gray-100 pl-10 pr-2 rounded-full" 
                    placeholder="Search conversations..." 
                    defaultValue=""
                    onChange={props.changed}
                />
                <div className="absolute top-3 left-3 z-20">
                    {/** search icon */}
                </div>
            </div>
        </div>

    )

}

export default ConversationsNavSearchBar