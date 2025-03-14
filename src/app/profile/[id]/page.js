import pg from "pg"
import Image from "next/image"
import { clerkClient } from "@clerk/nextjs/server"

export default async function Page({params}) {

    // await clerk.user.setProfileImage({profileImage})

    const db = new pg.Pool({
        connectionString: process.env.DB_CONN
    })

    const {id} = await params

    const user = (await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [id])).rows[0]

    const userPosts = (await db.query(`SELECT posts.id, posts.img_url, posts.content, users.clerk_id, users.username FROM posts JOIN users ON posts.user_id = users.id WHERE username = $1`, [user.username])).rows

    const client = await clerkClient()
    const clerkUser = await client.users.getUser(user.clerk_id)
    // console.log(clerkUser)

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium mt-5 text-amber-400">{user.username}s Profile</h2>
            <div className="flex flex-row mt-10 w-[40vw] h-fit justify-around bg-gradient-to-t from-amber-600 to-amber-500 rounded-xl p-5 shadow-md shadow-yellow-700">
                <section className="h-[50%] p-5 flex flex-col items-center gap-5">
                    <Image className="rounded-full shadow-black shadow-md" src={clerkUser.imageUrl} height={180} width={180} alt="Profile picture"/>
                    <p className="text-black text-2xl font-medium self-center mb-3">{user.username}s posts: {userPosts.length}</p>
                    <div className=" w-[80%] border-2 border-black rounded-lg p-3 text-lg text-black bg-amber-400 shadow-amber-700 shadow-lg">
                        <p>{user.bio}</p>
                    </div>
                </section>
            </div>
            <section className="flex flex-col gap-5 mt-5 mb-5">
                {userPosts.map((post) => (
                    <div className="rounded-lg p-3 w-[70vw] bg-amber-400 text-black font-medium flex flex-row gap-3 shadow-yellow-800 shadow-md" key={post.id}>
                        <Image src={post.img_url} height={150} width={200} alt="image of a bee"/>
                        <div className="flex flex-col">
                            <p>{post.username}</p>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </section>            
        </div>
    )
}
