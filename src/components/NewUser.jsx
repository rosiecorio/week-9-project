import { Content } from "next/font/google"
import pg from "pg"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs/server"

export default async function NewUser() {

    const {userId} = await auth()
    
    async function handleSubmit(formData) {
        'use server'

        const db = new pg.Pool({
            connectionString: process.env.DB_CONN
        })

        const data = Object.fromEntries(formData)
        const {username, bio} = data

        const clerk_id = userId

        await db.query(`INSERT INTO users (username, bio, clerk_id) VALUES ($1 , $2, $3)`, [username, bio, clerk_id])
        revalidatePath("/profile")
    }
    
    return (
        <form className="self-center font-medium gap-2 flex flex-col w-[30vw] h-[30vh] p-3  rounded-2xl text-black bg-amber-400 shadow-yellow-700 shadow-lg" action={handleSubmit}>
            <label className="underline" htmlFor="username">Username:</label>
            <input className="text-black rounded-xl p-1 bg-slate-400 bg-opacity-30" id="username" name="username" placeholder="BeeEnthusast96"/>
            <label className="underline" htmlFor="bio">Bio:</label>
            <textarea className="text-black h-[10vh] rounded-xl p-2 bg-slate-400 bg-opacity-30" id="bio" name="bio" placeholder="Tell us a bit about you!"/>
            <button className="hover:underline hover:bg-amber-500 p-1 mt-1 hover:text-black p-1 rounded-xl w-fit self-center" type="submit">Create Profile!</button>
        </form>
    )
}