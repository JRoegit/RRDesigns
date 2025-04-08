'use client'

import { EditableItem } from "@/app/components/editable-item"
import { Item } from "@/types/supabase"
import { useEffect, useState } from "react"

export default function EditPage(){
    const [items, setArtWorks] = useState<Item[] | []>([])
    const [page, setPage] = useState(1)
    
    console.log(setPage)

    const loadItems = async () => {
        console.log(page)
        const res = await fetch(`/api/item?page=${page}`)
        const data = await res.json()
        setArtWorks((prev) => [...prev, ...data.items])
    }

    // WORKS IN PROD, find a way to ignore the strict mdoe
    useEffect(() => {
        loadItems()
    }, [page])
    
    return (
        <div className="flex flex-row gap-4 flex-wrap min-h-screen h-auto  w-full mx-auto p-6">
            {items.map((item) => {
                return (
                    <EditableItem key={item.id} item={item}/>
                )
            })}
            {items.length == 0 && <div className="text-rrcharcoal m-auto text-2xl font-bold">No items to display</div>}
            <button type="button" onClick={() => setPage(page + 1)}>Load More</button>
        </div>
    )
} 