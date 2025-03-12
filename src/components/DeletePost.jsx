'use client'

import { handlePostDelete } from "@/utils/actions"

export default function DeletePost({id}) {

    console.log(id)

    return (
        <button onClick={() => {
            handlePostDelete(id)
        }}>
            x
        </button>
    )
}