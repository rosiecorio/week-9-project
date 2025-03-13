import { Content } from "next/font/google"
import pg from "pg"
import { revalidatePath } from "next/cache"

export default function NewPost({id}) {
    
    async function handleSubmit(formData) {
        'use server'

        const db = new pg.Pool({
            connectionString: process.env.DB_CONN
        })

        const data = Object.fromEntries(formData)
        const {content, img_url} = data

        await db.query(`INSERT INTO posts (content, user_id, img_url) VALUES ($1 , $2, $3)`, [content, id, img_url])
        revalidatePath("/profile")
    }
    
    return (
        <form className="flex flex-col w-[30vw] p-3  rounded-2xl text-black bg-amber-400 shadow-yellow-700 shadow-lg" action={handleSubmit}>
            <label className="underline" htmlFor="img_url">Image URL:</label>
            <input className="text-black rounded-xl p-1 bg-slate-400 bg-opacity-30" id="img_url" name="img_url" placeholder="beepic.jpg"/>
            <label className="underline" htmlFor="content">Create New Post</label>
            <textarea className="text-black h-[10vh] rounded-xl p-2 bg-slate-400 bg-opacity-30" id="content" name="content" placeholder="What's on your mind?" ></textarea>
            <button className="hover:underline hover:bg-amber-500 p-1 mt-1 hover:text-black p-1 rounded-xl w-fit self-center" type="submit">Post!</button>
        </form>
    )
}