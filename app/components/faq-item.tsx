'use client'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { ReactNode, useState } from "react"

export default function FaqItem({question,children, textcolor} : {question : string, children: React.ReactNode, textcolor : string }) {
    const [visible, setVisible] = useState(false)

    return (
        <div className={`flex flex-col my-4 transition-all ease-in-out w-full  mx-auto gap-4 bg-black/15 rounded-md p-5 text-${textcolor}`}>
            <div onClick={() => setVisible(!visible)} className="flex flex-row  hover:cursor-pointer">
                <h1 className="text-2xl font-medium">{question}</h1>
                {visible ? <FaMinus className="my-auto size-5 ml-auto"/> : <FaPlus className="my-auto size-5 ml-auto"/>}
            </div>
            <div className={` ${visible ? "visible" : "hidden"}`}>
                {children}
            </div>
        </div>
    )
}