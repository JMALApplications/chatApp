import React from "react"
import { BsFillPersonFill } from "@react-icons/all-files/Bs/BsFillPersonFill"
import { AiOutlineMail } from "@react-icons/all-files/Ai/AiOutlineMail"
import { FiPhone } from "@react-icons/all-files/Fi/FiPhone"
import { RiComputerLine } from "@react-icons/all-files/Ri/RiComputerLine"
import { GoLocation } from "@react-icons/all-files/Go/GoLocation"

const ConversationsProfileInfo = (props) => {

    return (

        <div className="bg-white w-full mt-5 px-5 py-2 rounded-md shadow-md">
            <h2 className="font-bold mb-4">Visitor Info</h2>
            <div className="grid grid-rows-5 grid-flow-col gap-4 mt-5 flex">
                <div className="flex">
                    <BsFillPersonFill className="text-indigo-500 text-xl mr-3"/>
                    <input type="text" className="w-full px-1 border-b-2 border-indigo-500" placeholder="Visitor Name..." />
                    {/* {props.visitorName} */}
                </div>
                <div className="flex mt-1">
                    <AiOutlineMail className="text-indigo-500 text-xl mr-3"/>
                    <input type="text" className="w-full px-1 border-b-2 border-indigo-500" placeholder="Visitor Email..." />
                    {/* {props.visitorEmail} */}
                </div>
                <div className="flex mt-1">
                    <FiPhone className="text-indigo-500 text-xl mr-3"/>
                    <input type="text" className="w-full px-1 border-b-2 border-indigo-500" placeholder="Visitor Phone..." />
                    {/* {props.visitorPhoneNumber} */}
                </div>
                <div className="flex mt-1">
                    <RiComputerLine className="text-indigo-500 text-xl mr-3"/>
                    {props.visitorOS}
                </div>
                <div className="flex mt-1">
                    <GoLocation className="text-indigo-500 text-xl mr-3"/>
                    {props.visitorIP}
                </div>
            </div>
        </div>
        
    )

}

export default ConversationsProfileInfo