import React from "react"
import { ChevronDownIcon } from "@heroicons/react/outline"


const ChatBoxHeader = () => {      

    return (

        <div className="block h-1/6 w-full bg-gradient-to-r from-indigo-300 to-purple-600 rounded-t-lg">
            <div className="grid grid-cols-3 gap-4 pt-3">
                <h2 id="jmal-chat-heading--greeting" className="text-white text-3xl ml-5">Hello!</h2>
                <ChevronDownIcon id="jmal-chat--close-icon" className="col-end-7 mr-5 text-white float-right w-8 h-8 cursor-pointer" />
            </div>
        </div>

    )

}

export default ChatBoxHeader