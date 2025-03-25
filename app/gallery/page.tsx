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
    }, [page])


    return (
        <div className="w-full h-auto min-h-screen max-w-screen-lg mx-auto text-black p-6">
            <Masonry breakpointCols={{ default:4, 1024:3, 768:2, 640:1}} className="masonry-grid" columnClassName="masonry-column">
                {items.map((item, index) => (
                    <GridItem key={index} item={item}/>
                ))}
            </Masonry>
        </div>
    )
}