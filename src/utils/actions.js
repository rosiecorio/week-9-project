'use server'

import pg from "pg"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs/server"

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

export async function handlePostDelete(id) {
    await db.query(`DELETE FROM posts WHERE id = $1`, [id])
    revalidatePath("/profile")
}

export async function handleUserEdit(formData) {
    'use server'
    const {userId} = await auth()
    const {username, bio} = Object.fromEntries(formData)
    await db.query(`UPDATE users SET username = $1, bio = $2 WHERE clerk_id = $3`, [username, bio, userId])
    revalidatePath("/profile")
}

export async function handleCommentEdit(id, formData) {
    'use server'    
    const {img_url, content} = Object.fromEntries(formData)
    console.log(id)
    console.log(img_url, content)
    await db.query(`UPDATE posts SET img_url = $1, content = $2 WHERE posts.id = $3`, [img_url, content, id])    
    revalidatePath("/profile")
    revalidatePath("/timeline")
}