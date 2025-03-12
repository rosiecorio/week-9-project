'use server'

import pg from "pg"
import { revalidatePath } from "next/cache"

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

export async function handlePostDelete(id) {
    await db.query(`DELETE FROM posts WHERE id = $1`, [id])
    revalidatePath("/profile")
}