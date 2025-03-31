import Logo from "./logo"
import Link from "next/link"
import { verifySession } from "../lib/session"
import NavHamburger from "./navbar-hamburger"

export default async function NavBar(){
    const session = await verifySession()
    return (
        <div className="w-full bg-rrwhite border-b-2 border-black/20 h-20 drop-shadow-md sticky top-0 z-50">
            <div className="mx-auto h-full w-full max-w-screen-lg flex flex-row items-center text-black gap-6 px-6">
                <Link href={"/"} className="my-auto">
                    <Logo width={135} height={70} color="#000000"/>
                </Link>
                <div className="ml-auto flex flex-row gap-6 text-lg">
                    <NavHamburger/>
                    <Link href={"/gallery"} className="hover:text-black/70 hover:cursor-pointer hidden sm:block">Gallery</Link>
                    <Link href={"/about"} className="hover:text-black/70 hover:cursor-pointer hidden sm:block">About</Link>
                    <Link href={"/contact"} className="hover:text-black/70 hover:cursor-pointer hidden sm:block">Contact</Link>
                    {session.isAuth && <Link className="hover:text-black/70 hover:cursor-pointer hidden sm:block" href={"/dashboard/upload"}>DashBoard</Link>}
                </div>
            </div>
        </div>
    )
}