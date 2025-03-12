'use client'

import { handlePostDelete } from "@/utils/actions"

export default function DeletePost({id}) {

    return (
        <button onClick={() => {
            handlePostDelete(id)
        }}>
            x
        </button>
    )
}