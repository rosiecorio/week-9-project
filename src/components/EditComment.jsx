'use client'

import { useState } from "react"
import { handleCommentEdit } from "@/utils/actions"

export default function EditComment({id}) {

    const [showModal, setShowModal] = useState(false)

    async function toggleEdit() {
        setShowModal(!showModal)
    }

    const handleCommentEditWithId = handleCommentEdit.bind(null, id)

    console.log(id)

    return (
        <div className="flex flex-row justify-between items-center w-[100%]">
            {showModal ? 
            <form className="mt-3 flex flex-row gap-3" action={handleCommentEditWithId}>
                <label htmlFor="img_url">Image URL:</label>
                <input id="img_url" name="img_url" />
                <label htmlFor="content">Content:</label>
                <input id="content" name="content" />
                <button className="ml-3 bg-black text-white hover:bg-white hover:text-black rounded-xl p-1" type="submit">Confirm</button>
            </form> : ''}
            <button className="bg-black text-white hover:bg-white hover:text-black rounded-xl w-[10%] h-[10%]" onClick={() => {
                toggleEdit()
            }}>Edit</button>
        </div>
    )
}