import createClient from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// Gets all existing Categories with their respective existing sub types 
export async function GET() {

    const dbClient = await createClient()	
    
    const {data: items} = await dbClient.from("item").select("category,type, count()").order("category")
    const {data: allTypes} = await dbClient.from("item").select("type, count()")
    console.log(allTypes)
    let data

    if(items){
        const itemMap = new Map<string,object[]>()
        for (let i = 0; i < items.length; i++) {
            const category = items[i].category as string
            const type = items[i].type as string
            const count = items[i].count as number
            const currentTypes = itemMap.get(category)
            if(currentTypes){
                itemMap.set(category,[...currentTypes, {type, count} ])
            } else {
                itemMap.set(category,[{type, count}])
            }
        }
        for(const [key, val] of itemMap.entries()) {
            itemMap.set(key,val.sort())
        }
        if(allTypes) {
            itemMap.set("", allTypes)
        }
        data = Object.fromEntries(itemMap)
    }

    return NextResponse.json(data)
}