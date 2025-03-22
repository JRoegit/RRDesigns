import Image from "next/image"
import Logo from "./logo"

export default function NavBar(){
    return (
        <div className="w-full bg-rrwhite border-b-2 border-black/20 h-20 drop-shadow-md">
            <div className="mx-auto h-full w-full max-w-screen-lg flex flex-row items-center text-black gap-6 px-6">
                <div className="my-auto">
                    <Logo width={100} height={50} color="#000000"/>
                </div>
                <div className="ml-auto flex flex-row gap-6 text-lg">
                    <button className="hover:text-black/70 hover:cursor-pointer">Gallery</button>
                    <button className="hover:text-black/70 hover:cursor-pointer">About</button>
                    <button className="hover:text-black/70 hover:cursor-pointer">Contact</button>
                    <button className="hover:text-black/70 hover:cursor-pointer">Testimonials</button>
                </div>
            </div>
        </div>
    )
}