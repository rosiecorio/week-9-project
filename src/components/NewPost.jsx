import pg from "pg"
import { revalidatePath } from "next/cache"
import { Label } from "radix-ui";
import * as React from "react";

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
            <Label.Root
			className="text-[15px] font-medium leading-[35px]"
			htmlFor="img_url"
		>
			Image URL:
		</Label.Root>
            <input className="text-black rounded-xl p-1 bg-slate-400 bg-opacity-30" id="img_url" name="img_url" placeholder="beepic.jpg"/>
            <Label.Root
			className="text-[15px] font-medium leading-[35px]"
			htmlFor="firstName"
		>
			Content:
		</Label.Root>
            <textarea className="text-black h-[10vh] rounded-xl p-2 bg-slate-400 bg-opacity-30" id="content" name="content" placeholder="What's on your mind?" ></textarea>
            <button className="hover:underline hover:bg-amber-500 p-1 mt-1 hover:text-black rounded-xl w-fit self-center" type="submit">Post!</button>
        </form>
    )
}