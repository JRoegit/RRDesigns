'use client'
import { RxHamburgerMenu } from "react-icons/rx";
import { GrGallery } from "react-icons/gr";
import { GoInfo } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import Link from "next/link"
import { useState } from "react"

export default function NavHamburger() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button className="sm:hidden hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu className="size-10"/>
            </button>
            <div className={"absolute border-l-2 border-black/20 p-10 top-20 drop-shadow-md right-0 w-fit flex flex-col gap-4  h-screen transition  duration-500 ease-in-out  bg-rrwhite " + (isOpen ? "" : "menuslider")}>
                <Link onClick={() => setIsOpen(!isOpen)} href={"/gallery"} className="hover:border-amber-500 font-semibold w-fit border-b-4 border-transparent text-black hover:cursor-pointer text-4xl transition duration-300 flex flex-row gap-2 ease-in-out">
                    <GrGallery/>Gallery
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={"/about"} className="hover:border-amber-500 font-semibold w-fit border-b-4 border-transparent text-black hover:cursor-pointer text-4xl transition duration-300 flex flex-row gap-2 ease-in-out">
                    <GoInfo/>About
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={"/contact"} className="hover:border-amber-500 font-semibold w-fit border-b-4 border-transparent text-black hover:cursor-pointer text-4xl transition duration-300 flex flex-row gap-2 ease-in-out">
                    <BsPerson/>Contact
                </Link>
               
            </div>
        </div>
    )
}