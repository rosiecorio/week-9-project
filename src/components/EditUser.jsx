'use client'
import { useState } from "react"
import { handleUserEdit } from "@/utils/actions"

export default function EditUser() {

    const [showModal, setShowModal] = useState(false)
    
    async function toggleEditForm() {
        setShowModal(!showModal)
    }
    
    
    return (
        <>
            <button className=" self-center bg-black text-white hover:bg-white hover:text-black rounded-xl w-[40%]" onClick={() => {
            toggleEditForm()
            }}>Edit</button>
            <div>
                {showModal ? 
                <form className="flex flex-col p-3 rounded-xl" action={handleUserEdit}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" name="username"></input>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="bio"/>
                    <button type="submit">Confirm</button>
                </form> : ''}            
            </div> 
        </>
        
    )
}