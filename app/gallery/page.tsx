'use client'

import { Item, Type } from "@/types/supabase"
import { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import GridItem from "../components/griditem"

const PER_PAGE = 15

export default function GalleryPage(){
    const [items, setItems] = useState<Item[] | []>([])
    const [availableCategories, setAvailableCategories] = useState<string[]>([])
    const [availableTypes, setAvailableTypes] = useState<Type[]>([])
    const [page, setPage] = useState(1)
    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [isMore, setIsMore] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchAvailable() {
            const url = '/api/available'
            const response = fetch(url)
            const data = await (await response).json()
            const tmpCategories: string[] = []
            Object.keys(data).forEach((val) => {if(val) {tmpCategories.push(val)}})
            if(category) {
                setAvailableTypes(data[category])
            } else {
                setAvailableTypes(data[""])
            }
            setAvailableCategories(tmpCategories)
        }

        async function fetchPosts() {
            setIsLoading(true)
            const url = `/api/item?page=${page}&limit=${PER_PAGE}${category ? "&category=" + category : ""}${type ? "&type=" + type : ""}`
            const response = fetch(url)
            const data = await (await response).json()
            if(data.items.length < PER_PAGE){
                setIsMore(false)
            } else {
                setIsMore(true)
            }
            if(page > 1) {
                setItems([...items, ...data.items])
            } else {
                setItems(data.items)
            }
            console.log(items)
            setIsLoading(false)
        }
        fetchPosts()
        fetchAvailable()
    }, [page,category,type])

    return (
        <div className="w-full flex flex-col h-auto min-h-screen max-w-screen-lg mx-auto bg-rrwhite text-rrcharcoal p-6">
            {/* {page && <div>Page : {page}</div>}
            <h1 className="text-4xl font-bold text-rrcharcoal text-wrap">Check out all of Rhonda's amazing work!</h1>
            <div className="">Preamble Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laudantium enim, odio maxime iusto alias. Est cum repellat nostrum, eaque doloremque delectus distinctio dicta, totam debitis doloribus, minima earum exercitationem!</div> */}
            <div className="flex flex-row flex-wrap p-2 gap-2">
                <button className={"py-2 px-4  text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4 hover:bg-rrteal transition-colors duration-250 ease-in-out" + (category == "" ? "  bg-rrteal" : " bg-teal-600")} onClick={() => {
                    setCategory("") 
                    setPage(1)
                    }}>All</button>
                {availableCategories && availableCategories.sort().map((key, idx) => (
                    <button key={idx} className={"py-2 px-6  text-xl text-white font-bold rounded-md hover:cursor-pointer border-black/20 border-b-4 hover:bg-rrteal transition-colors duration-250 ease-in-out" + (key === category ? "  bg-rrteal" : " bg-teal-600")} onClick={() => {
                        setCategory(`${key}`)
                        setPage(1)
                    }}>{key}</button>
                ))}
            </div>
            <div className="w-full border-2 border-black/20 border-dashed"></div>
            {/* <div className="text-2xl text-rrcharcoal font-bold" >Types</div> */}
            <div className="flex flex-row flex-wrap p-2 gap-2">
                <button className={"py-2 px-4 bg-amber-500 text-white font-bold rounded-full hover:cursor-pointer border-black/20 border-b-4 hover:bg-amber-600 transition-colors duration-250 ease-in-out " + (type == "" ? "bg-amber-600" : "")} onClick={() => {
                    setType("")
                    setPage(1)
                    }}>All</button>
                {availableTypes && availableTypes.sort(sortType).map((key, idx) => (
                    <button key={idx} className={'py-2 px-4 bg-amber-500 text-white font-bold rounded-full hover:cursor-pointer border-black/20 border-b-4 hover:bg-amber-600 transition-colors duration-250 ease-in-out ' + (key.type == type? " bg-amber-600" : "")} onClick={() => {
                        setType(`${key.type}`)
                        setPage(1)
                    }}>{key.type} ({key.count})</button>
                ))}
            </div>
            {isLoading && items.length == 0 && <div className="m-auto text-4xl font-bold">Loading...</div>}
            <Masonry breakpointCols={{ default:4, 1024:3, 768:2, 640:1}} className="masonry-grid " columnClassName="masonry-column">
                {items.map((item, index) => (
                    <GridItem key={index} item={item}/>
                ))}
            </Masonry>
            {isMore && <button className="mx-auto  bg-amber-500 text-white hover:bg-amber-600 transition-colors ease-in-out duration-250 px-4 py-2 rounded-full  hover:cursor-pointer text-lg border-b-4 border-black/25" onClick={() => setPage(page + 1)}>Load more</button>}
        </div>
    )
}

function sortType(a : Type, b : Type) : number {
    if(a.count < b.count){
        return 1
    } else if (a.count > b.count) {
        return -1
    }
    return 0
}