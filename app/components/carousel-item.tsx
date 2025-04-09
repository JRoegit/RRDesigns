'use client'

import { useState } from "react"
import { FaWindowClose } from "react-icons/fa"
import Modal from "./modal"
import Image from "next/image"

export default function CarouselItem({image} : {image : string}) {
    const [open, setOpen] = useState(false)

    return(
        <div className="w-full">
            <div onClick={() => setOpen(!open)}>
                <Image src={image} alt={image} width={1080} height={540} className="rounded-sm w-full mb-4 block hover:cursor-pointer"/>
            </div>
            <Modal isOpen={open}>
                <div onClick={() => setOpen(!open)} className="w-screen absolute h-screen left-0 top-0 bg-black/10 z-100"></div>
                <FaWindowClose className="static top-4 right-4 size-16 text-white hover:cursor-pointer z-20" onClick={() => setOpen(!open)}/>
                <Image src={image} alt={image} width={1080} height={540} className="rounded-sm w-full z-50"></Image>
            </Modal>
        </div>
    )
}