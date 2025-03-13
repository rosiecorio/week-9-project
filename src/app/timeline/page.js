import pg from "pg"
import Image from "next/image"
import NewPost from "@/components/NewPost"
import Link from "next/link"

export default async function Page() {

    const db = new pg.Pool({
        connectionString: process.env.DB_CONN
    })

    const allPosts = (await db.query(`SELECT posts.id, posts.user_id, posts.content, posts.img_url, users.username, users.clerk_id FROM posts JOIN users ON posts.user_id = users.id;`)).rows
    console.log(allPosts)

    return (
        <div className="flex flex-col items-center bg-amber-600 pb-20 text-black">
            <h2 className="font-medium text-2xl mt-5">Timeline Page</h2>
            <section className="flex flex-col items-center gap-10 mt-10">
                {allPosts.map((post) => (
                    <section className="flex flex-row w-[60vw] gap-5 bg-amber-400 opacity-85 shadow-md shadow-yellow-700 rounded-lg p-5" key={post.id}>                        
                        <Image src={post.img_url} height={250} width={250} alt="a picture of a bee"/>
                        <div>
                            <Link href={`/profile/${post.clerk_id}`}><p className="underline">{post.username}</p></Link>
                            <p>{post.content}</p>
                        </div>
                    </section>
                ))}
                <NewPost />
            </section>
        </div>
    )
}