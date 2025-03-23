import {createSession} from '@/app/lib/session'
import { NextResponse } from 'next/server'

export async function POST(request : Request){
    try{
        const formData = await request.formData()
    
        const username = formData.get("username") as string
        const password = formData.get("password") as string
        
        if( username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
            await createSession(username)
        } else {
            return NextResponse.json({error: "Incorrect username or password"},{status: 200})
        }
    } catch (e) {
        return NextResponse.json({error: `No formdata, ${e}`},{status: 200})
    }
    return NextResponse.json({},{status:200})
}