'use client'

import { FaWindowClose } from "react-icons/fa";
import { Item } from "@/types/supabase";
import Image from "next/image";
import Modal from "./modal";
import { useState } from "react";

export default function GridItem({item} : {item : Item}){
    const [open, setOpen] = useState(false)

    return (
        <>
        {item.image_url &&
            <div className="relative w-full">
                <div onClick={() => setOpen(!open)}>
                    <Image src={item.image_url} alt={item.title} width={1080} height={540} className="rounded-sm w-full mb-4 block"/>
                    <div className="flex items-center absolute rounded-md top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 hover:opacity-100 bg-black/80 transition-opacity duration-500 ease-in-out">
                        <p className="mx-auto font-bold text-lg text-white ">{item.title}</p>
                    </div>
                </div>
                <Modal isOpen={open}>
                    <div onClick={() => setOpen(!open)} className="w-screen h-screen absolute left-0 top-0 bg-black/10 z-10"></div>
                    <FaWindowClose className="absolute top-4 right-4 size-16 text-white hover:cursor-pointer z-20" onClick={() => setOpen(!open)}/>
                    <Image src={item.image_url} alt={item.title} width={1080} height={540} className="rounded-sm w-full z-50"></Image>
                </Modal>
            </div>
        }
        </>
    )
}