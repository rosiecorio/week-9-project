// 'use server'

// import pg from "pg"
// import { auth } from "@clerk/nextjs/server"
// import { revalidatePath } from "next/cache"

// export default async function UserForm() {

//     const authInfo = await auth()
//     const clerk_id = authInfo.userId
    
//     async function handleSubmit(formData) {
//         'use server'
//         const {username, bio} = Object.fromEntries(formData)

//         const db = new pg.Pool({
//             connectionString: process.env.DB_CONN
//         })

//         await db.query(`INSERT INTO users (username, bio, clerk_id) VALUES ($1, $2, $3)`, [username, bio, clerk_id])
//         revalidatePath("/profile")
//     }
    
//     return (
//         <form className="flex flex-col" action={handleSubmit}>
//             <label htmlFor="username">Username</label>
//             <input className="text-black" id="username" name="username"/>
//             <label htmlFor="bio">Bio</label>
//             <textarea className="text-black" id="bio" name="bio"/>
//             <button className="p-2 w-fit border-2 border-white rounded-lg m-3" type="submit">Edit</button>
//         </form>
//     )
// }