'use client'
import { useState } from "react"
import Image from "next/image"

export default function UploadPage(){
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [uploading, setUploading] = useState(false)
    const [uploadedImg, setUploadedImg] = useState("")
    const [category, setCategory] = useState("None")
    const [type, setType] = useState("")
    const [error, setError] = useState(false)
    const [status, setStatus] = useState("")
    const [serverError, setServerError] = useState("")

    const onImageUploaded = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setUploadedImg(URL.createObjectURL(event.target.files[0]));
        }
        setFile(event.target.files?.[0] || null)
    }
    console.log(category)
    const handleSubmit = async () => {
        if(!file || !title){
            setError(true)
            return
        }
        setError(false)
        setUploading(true)
        const formData = new FormData()
        formData.append("file", file)
        formData.append("title", title)
        formData.append("category",category)
        formData.append("type",type)

        const res = await fetch("/api/item", {
            method : "POST",
            body: formData
        })

        const data = await res.json()
        setUploading(false)

        if(res.status === 201) {
            setStatus(data.status)
            setTitle("")
            setFile(null)
            setUploadedImg("")
            setCategory("")

        } else {
            setServerError(data.error)
        }
    }
    return (
        <div className="flex w-full min-h-screen h-auto">
            <div className="flex flex-col w-full max-w-screen-lg mt-10 gap-4 mx-auto mb-auto text-white bg-rrteal p-6 rounded-md">
                <h1 className="text-2xl font-bold mx-auto" >Upload Your Item</h1>
                {status && 
                    <div className="mx-auto text-lg bg-green-500 w-full p-2 text-center font-bold">
                        {status}
                    </div>
                }
                {serverError && 
                    <div className="mx-auto text-lg bg-red-500 w-full p-2 text-center font-bold">
                        {serverError}
                    </div>
                }
                <div className="flex flex-col">
                    <p className={(error === true && title === "") ? "text-lg text-red-500" : "text-lg"}>Title</p>
                    <input className="p-2 rounded-md text-white bg-black/20" type="text" placeholder="Engraved Yeti" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="flex flex-row gap-4">

                    <div className="w-full">
                        <p className="text-lg w-full">Category</p>
                        <select defaultValue="None" id="categorySelect" className="p-2 rounded-md text-white bg-teal-900 w-full h-11" onChange={(choice) => {setCategory(choice.target.value)}}>
                            <option value="None">None</option>
                            <option value="Sports">Sports</option>
                            <option value="Business">Business</option>
                            <option value="Personalized">Personalized</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <p className="text-lg">Type</p>
                        <select defaultValue="None" id="typeSelect" className=" p-2 rounded-md text-white bg-teal-900 w-full h-11" onChange={(choice) => {setType(choice.target.value)}}>
                            <option value="None">None</option>
                            <option value="Yeti">Yeti</option>
                            <option value="Mug">Mug</option>
                            <option value="PhoneCase">Phone Case</option>
                            <option value="TShirt">T-Shirts</option>
                            <option value="Hoodies">Hoodies</option>
                            <option value="KeyChains">Key Chains</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className={(error === true && file === null) ? "text-lg text-red-500" : "text-lg"}>Item image upload</p>
                    <label htmlFor="img">
                        <div className="w-full bg-white p-2 rounded-md">
                            <Image src={"/ImageUpload.png"} className="mx-auto" alt="Upload Image" width={32} height={32}></Image>
                        </div>
                    </label>
                    <input id="img" className="rounded-md font-semibold w-full hidden" type="file" onChange={onImageUploaded}/>
                </div>
                {uploadedImg && (
                    <Image className="mx-auto" src={uploadedImg} alt="uploaded img" height={250} width={250}/>
                )}
            
                <button className="w-full p-2 bg-green-500 hover:bg-green-600 font-bold rounded-md" onClick={handleSubmit} disabled={uploading}>
                    {uploading ? "Uploading..." : "Upload"}
                </button>
            </div>
        </div>
    )
}