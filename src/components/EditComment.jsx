'use client'

import { useState } from "react"

export default function EditComment() {

    const [showModal, setShowModal] = useState(false)

    async function toggleEdit() {
        setShowModal(!showModal)
    }

    return (
        <div className="flex flex-row justify-between items-center w-[100%]">
            {showModal ? 
            <form className="mt-3">
                <label htmlFor="img_url">Image URL:</label>
                <input id="img_url" name="img_url" />
                <label htmlFor="content">Content:</label>
                <input id="content" name="content" />
                <button type="submit">Confirm</button>
            </form> : ''}
            <button className="bg-black text-white hover:bg-white hover:text-black rounded-xl w-[10%] h-[10%]" onClick={() => {
                toggleEdit()
            }}>Edit</button>
        </div>
    )
}