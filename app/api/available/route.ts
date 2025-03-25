import createClient from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// Gets all existing Categories with their respective existing sub types 
export async function GET() {

    const dbClient = await createClient()	
    
    let {data: items, error } = await dbClient.from("item").select("category,type, count()").order("category")

    let data

    if(items){
        const itemMap = new Map<string,string[]>()
        for (let i = 0; i < items.length; i++) {
            const category = items[i].category as string
            const type = items[i].type as string
            const currentTypes = itemMap.get(category)
            if(currentTypes){
                itemMap.set(category,[...currentTypes, type ])
            } else {
                itemMap.set(category,[type])
            }
        }
        for(let [key, val] of itemMap.entries()) {
            itemMap.set(key,val.sort())
        }
        data = Object.fromEntries(itemMap)
    }

    return NextResponse.json(data)
}