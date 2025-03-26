'use client'

import { Item } from "@/types/supabase"
import { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import GridItem from "../components/griditem"

export default function GalleryPage(){
    const [items, setItems] = useState<Item[] | []>([])
    const [available, setAvailable] = useState("")
    const [page, setPage] = useState(1)
    const [category, setCategory] = useState("")
    const [type, setType] = useState("")

    useEffect(() => {
        async function fetchPosts() {
            const url = `/api/item?page=${page}&limit=100${category ? "&category=" + category : ""}${type ? "&type=" + type : ""}`
            console.log(url) 
            const response = fetch(url)
            const data = await (await response).json()
            setItems(data.items)
            console.log(data)
        }
        fetchPosts()
    }, [page,category,type])


    return (
        <div className="w-full h-auto min-h-screen max-w-screen-lg mx-auto text-black p-6">
            <div className="flex flex-row gap-4">
                {category && <div>{category}</div>}
                {type && <div>{type}</div>}
                {page && <div>{page}</div>}
            </div>
            <div className="flex flex-row p-2 mt-4 gap-2">
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setCategory("")}>All</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setCategory("Business")}>Business</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setCategory("Sports")}>Sports</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setCategory("Personalized")}>Personalized</button>
            </div>
            <div className="flex flex-row p-2 mt-4 gap-2">
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setType("")}>All</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setType("Yeti")}>Yeti</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setType("TShirt")}>TShirt</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setType("Hoodies")}>Hoodies</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setType("Mug")}>Mug</button>
                <button className="py-2 px-4 bg-rrteal text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4" onClick={() => setType("PhoneCase")}>PhoneCase</button>
            </div>
            <Masonry breakpointCols={{ default:4, 1024:3, 768:2, 640:1}} className="masonry-grid " columnClassName="masonry-column">
                {items.map((item, index) => (
                    <GridItem key={index} item={item}/>
                ))}
            </Masonry>
        </div>
    )
}