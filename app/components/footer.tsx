import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Logo from "./logo";
import Link from "next/link";

export default function Footer(){
    return (
       <div className="w-full mt-auto bg-rrteal h-auto min-h-28 p-6 flex">
            <div className="mx-auto w-full h-full max-w-screen-lg flex flex-col sm:flex-row text-white  my-auto p-6 gap-4">
                <div className="sm:mx-auto">
                    <Logo width={150} height={75} color="#ffffff"/>

                </div>
                <div className="flex flex-col sm:mx-auto text-lg">
                    <h1 className="text-lg font-bold">Company</h1>
                    <Link className="text-rrwhite/85" href={"/about"}>About</Link>
                    <Link className="text-rrwhite/85" href={"/contact"}>Contact</Link>
                </div>
                
                <div className="flex flex-col sm:mx-auto text-lg">
                    <h1 className="text-lg font-bold">Resources</h1>
                    <Link className="text-rrwhite/85" href={"/gallery"}>Gallery</Link>
                    <Link className="text-rrwhite/85" href={"/gallery"}>Services</Link>
                    <Link className="text-rrwhite/85" href={"/faq"}>FAQ</Link>
                </div>
                <div className="flex flex-col sm:mx-auto">
                    <h1 className="text-lg font-bold">Follow Us</h1>
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
        </div>
    )
}