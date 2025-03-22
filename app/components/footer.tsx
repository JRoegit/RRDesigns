import Image from "next/image"

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer(){
    return (
       <div className="w-full mt-auto bg-rrteal h-28">
            <div className="mx-auto w-full h-full max-w-screen-lg flex flex-row text-white items-center">
                <Image src={"/Logo.svg"} width={512} height={512} alt="Rhonda Roe Designs Logo" className=" my-auto ml-10 w-32"/>
                <div className="flex flex-row gap-6 mx-auto ">
                    <a>Home</a>
                    <a>Gallery</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
                <div className="flex flex-row gap-2 mr-10 ">
                    <a href="https://www.facebook.com/profile.php?id=100035513630943" target="_blank">
                        <FaFacebookSquare className="size-10 text-white hover:text-white/75 hover:cursor-pointer"/>
                    </a>
                    <a href="https://www.instagram.com/rhondaroedesigns/" target="_blank">
                        <FaSquareInstagram className="size-10 text-white hover:text-white/75 hover:cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>
    )
}