import React from "react"
import { ChatAlt2Icon } from "@heroicons/react/outline"

const OpenChatButton = () => {
    return (
        <div id="jmal-chat-button" className="jmal-chat--closed w-32 h-32 text-center hidden">{/** flex */}
            <button type="button" className="rounded-full w-16 h-16 bg-purple-500 cursor-pointer my-auto">
                <ChatAlt2Icon className="jmal-chat--open-icon text-white w-8 h-8 m-auto" />
            </button>
        </div>
    )
}

export default OpenChatButton