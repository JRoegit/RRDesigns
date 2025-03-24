'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SignInForm(){
    const router = useRouter() 
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault()
        
        const formData  = new FormData
        formData.append("username",username)
        formData.append("password",password)

        const res = await fetch("/api/auth/signin", {
            method : "POST",
            body: formData
        })

        const data = await res.json()

        if(res.ok) {
            if(data.error){
                setError(data.error)
            } else {
                setSuccess("Logged in successfuly")
                router.push("/dashboard/upload")
            }
        } else {
            setError("Couldn't fulfil request.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-2/3 lg:w-1/2 bg-rrteal m-auto border-b-4 border-black/20 p-2 gap-2 rounded-md">
            <h1 className="text-2xl font-bold text-white mx-auto">Dashboard Login</h1>
            {error && <p className="mx-auto bg-red-400 px-4 py-2 font-bold text-white border-b-4 border-black/30 rounded-md">{error}</p>}
            {success && <p className="mx-auto bg-green-400 px-4 py-2 font-bold text-white border-b-4 border-black/30 rounded-md">{success}</p>}
            <div className="w-full">
                <label className="w-full" htmlFor="username">Username</label>
                <input className="p-2 bg-black/10  text-white w-full rounded-md" id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="w-full">
                <label className=" w-full" htmlFor="password">Password</label>
                <input className="p-2 bg-black/10  text-white w-full rounded-md" type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="w-full bg-green-500 rounded-md p-2" type="submit">Sign In</button>
        </form>
    )
}