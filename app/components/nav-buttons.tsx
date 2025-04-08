'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function NavButtons() {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <>
            <Link href={"/gallery"} className={"hover:cursor-pointer hidden sm:block hover:border-amber-500 text-rrcharcoal/85 border-b-4 text-xl transition-color ease-in-out duration-400 px-2  font-semibold  " + (pathName == "/gallery" ? "border-amber-500" : "border-b-transparent")}>Gallery</Link>
            <Link href={"/about"} className={"hover:cursor-pointer hidden sm:block hover:border-amber-500 text-rrcharcoal/85 border-b-4 text-xl transition-color ease-in-out duration-400 px-2  font-semibold  " + (pathName == "/about" ? "border-amber-500" : "border-b-transparent")}>About</Link>
            <Link href={"/contact"} className={"hover:cursor-pointer hidden sm:block hover:border-amber-500 text-rrcharcoal/85 border-b-4 text-xl transition-color ease-in-out duration-400 px-2  font-semibold  " + (pathName == "/contact" ? "border-amber-500" : "border-b-transparent")}>Contact</Link>
        </>
    )
}