'use client'

import { Item } from "@/types/supabase"
import Image from "next/image"
import { useState } from "react"
import Modal from "./modal"

export function EditableItem({item} : {item: Item}) {
    const [updatedItem, setUpdatedItem] = useState(item)
    const [uploadedImg, setUploadedImg] = useState(item.image_url)
    const [newImage, setNewImage] = useState<File | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [error, setError] = useState(false)
    const [status, setStatus] = useState("")
    const [serverError, setServerError] = useState("")

    const onImageUploaded = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setUploadedImg(URL.createObjectURL(event.target.files[0]));
        }
        setNewImage(event.target.files?.[0] || null)
    }

    const handleOpenModal = async () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setStatus("")
        setServerError("")
        setModalOpen(false)
    }
    
    const handleDelete = async () => {
        const res = await fetch(`/api/item?id=${updatedItem.id}`, {
            method : "DELETE",
        })
        const data = await res.json()

        if(res.status === 201) {
            setStatus(data.status)
        } else {
            setServerError(data.error)
        }
        setDeleteModalOpen(false)
        setModalOpen(false)
        setIsDeleted(true)
    }

    const handleOpenDeleteModal = () => {
        setDeleteModalOpen(true)
    }

    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false)
    }

    const saveChanges = async () => {
        if(!updatedItem.title){
            setError(true)
            return
        }
        setError(false)
        const formData = new FormData()

        if (newImage){
            formData.append("file", newImage)
        }
        
        formData.append("id",`${updatedItem.id}`)
        formData.append("title", updatedItem.title)
        formData.append("category",updatedItem.category ? updatedItem.category : "")
        formData.append("type",updatedItem.type ? updatedItem.type : "")
        formData.append("image_url", updatedItem.image_url)

        const res = await fetch("/api/item", {
            method : "PUT",
            body: formData
        })

        const data = await res.json()

        if(res.status === 201) {
            setStatus(data.status)
        } else {
            setServerError(data.error)
        }
    }
    if (isDeleted) {
        return <></>
    } else {
        return (
            <div className="flex flex-col w-full max-w-96 p-2 gap-2 border-black/30 h-fit border-2 rounded-md">
                <Image className=" mx-auto object-contain" src={uploadedImg} alt={item.title? item.title : ""} width={100} height={100}/>
                <div>
                    <p className="text-rrcharcoal text-2xl">{item.title} : {item.id}</p>
                </div>
                <Modal isOpen={modalOpen}>
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
                    <label htmlFor={`img${item.id}`}>
                        <Image className="hover:cursor-pointer mx-auto" src={uploadedImg} alt={item.title? item.title : ""}  width={200} height={200}/>
                    </label>
                    <input id={`img${item.id}`} className="hidden" type="file" onChange={onImageUploaded} />
                    <div>
                        <p className={(error === true) ? " text-red-500 text-lg" : "text-lg text-rrcharcoal"}>Title</p>
                        <input className="p-2 bg-black/15 rounded-md text-rrcharcoal w-full" type="text" defaultValue={updatedItem.title? updatedItem.title : ""} placeholder="Title" onChange={(e) => setUpdatedItem({...updatedItem, title: e.target.value})}/>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <p className="text-rrcharcoal">Category</p>
                            <select defaultValue={updatedItem.category ? updatedItem.category : "None"} className="bg-black/15 p-2 rounded-md text-rrcharcoal w-full h-10" onChange={(choice) => {setUpdatedItem({...updatedItem, category: choice.target.value})}}>
                                <option value="None">None</option>
                                <option value="Sports">Sports</option>
                                <option value="Business">Business</option>
                                <option value="Personalized">Personalized</option>
                                <option value="Test">Test</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <p className="text-rrcharcoal">Type</p>
                            <select defaultValue={updatedItem.type ? updatedItem.type : "Marker"} id="mediumSelect" className="bg-black/15  p-2 rounded-md text-rrcharcoal w-full h-10" onChange={(choice) => {setUpdatedItem({...updatedItem, type:choice.target.value})}}>
                                <option value="None">None</option>
                                <option value="Yeti">Yeti</option>
                                <option value="Mug">Mug</option>
                                <option value="PhoneCase">Phone Case</option>
                                <option value="TShirt">T-Shirts</option>
                                <option value="Hoodies">Hoodies</option>
                                <option value="KeyChains">Key Chains</option>
                                <option value="Test">Test</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={saveChanges} className="hover:cursor-pointer p-2 bg-green-600 rounded-md font-semibold">Save Changes</button>
                    <button onClick={handleOpenDeleteModal} className="hover:cursor-pointer p-2 bg-red-500 rounded-md font-semibold">Delete Item</button>
                    <button onClick={handleCloseModal} className="hover:cursor-pointer p-2 bg-gray-700 rounded-md font-semibold">Close</button>
                </Modal>
                <Modal isOpen={deleteModalOpen}>
                    <div className=" p-2 text-rrcharcoal text-normal font-bold mx-auto">DELETE ARTWORK?</div>
                    <p className="text-rrcharcoal">Are you sure you want to delete this item? It&apos;s data will be removed from the database and cannot be recovered.</p>
                    <div className="flex flex-row w-full gap-4">
                        <button onClick={handleCloseDeleteModal} className="hover:cursor-pointer border-2 border-black/30 bg-white text-rrcharcoal p-2 w-full rounded-md">Cancel</button>
                        <button onClick={handleDelete} className="hover:cursor-pointer bg-red-500 border-2 border-black/30 text-white p-2 w-full rounded-md">Delete</button>
                    </div>
                </Modal>
                <button onClick={handleOpenModal} className="hover:cursor-pointer p-2 bg-orange-500 rounded-md font-semibold">Edit</button>
            </div>
        )
    }
}