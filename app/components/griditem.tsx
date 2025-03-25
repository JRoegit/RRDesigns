'use client'

import { Item } from "@/types/supabase";
import Image from "next/image";
import Link from "next/link";

export default function GridItem({item} : {item : Item}){

    return (
        <div className="relative w-full">
            <Link href={`/item/${item.id}`}>
                <Image src={item.image_url} alt={item.title} width={1080} height={540} className="rounded-sm w-full mb-4 block"/>
                <div className="flex items-center absolute rounded-md top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 hover:opacity-100 bg-black/80 transition-opacity duration-500 ease-in-out">
                    <p className="mx-auto font-bold text-lg text-white ">{item.title}</p>
                </div>
            </Link>
        </div>
    )
}