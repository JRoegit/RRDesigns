import Image from "next/image"

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Logo from "./logo";

export default function Footer(){
    return (
       <div className="w-full mt-auto bg-rrteal h-28">
            <div className="mx-auto w-full h-full max-w-screen-lg flex flex-row text-white items-center px-6">
                <div className="my-auto">
                    <Logo width={150} height={75} color="#ffffff"/>
                </div>
                <div className="flex flex-row gap-6 mx-auto text-lg">
                    <a>Home</a>
                    <a>Gallery</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
                <div className="flex flex-row gap-2 ">
                    <a href="https://www.facebook.com/profile.php?id=100035513630943" target="_blank">
                        <FaFacebookSquare className="size-12 text-white hover:text-white/75 hover:cursor-pointer"/>
                    </a>
                    <a href="https://www.instagram.com/rhondaroedesigns/" target="_blank">
                        <FaSquareInstagram className="size-12 text-white hover:text-white/75 hover:cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>
    )
}