import pg from "pg"
import Image from "next/image"
import NewPost from "@/components/NewPost"
import Link from "next/link"

import { ScrollArea } from "radix-ui";

export default async function Page() {

    const db = new pg.Pool({
        connectionString: process.env.DB_CONN
    })

    const TAGS = (await db.query(`SELECT posts.id, posts.user_id, posts.content, posts.img_url, users.username, users.clerk_id FROM posts JOIN users ON posts.user_id = users.id;`)).rows



    const allPosts = (await db.query(`SELECT posts.id, posts.user_id, posts.content, posts.img_url, users.username, users.clerk_id FROM posts JOIN users ON posts.user_id = users.id;`)).rows
    const allPostsByNew = allPosts.reverse()

    return (
        <div className="flex flex-col items-center bg-amber-600 pb-10">
            <h2 className="text-4xl font-medium mt-5 mb-5 text-black">Timeline Page</h2>
            <ScrollArea.Root className="w-[60%] h-[60vh] overflow-hidden rounded bg-none">
                <ScrollArea.Viewport className="size-full rounded-2xl">
                    <div className="flex flex-col items-center gap-5 pt-5 pb-5">
                        {allPostsByNew.map((post) => (
                            <section className="flex flex-row w-[95%] gap-5 bg-amber-400 opacity-85 text-black shadow-md shadow-yellow-700 rounded-lg p-5" key={post.id}>                        
                                <Image src={post.img_url} height={230} width={300} alt="a picture of a bee"/>
                                <div>
                                    <Link href={`/profile/${post.clerk_id}`}><p className="underline font-medium">{post.username}</p></Link>
                                    <p>{post.content}</p>
                                </div>
                            </section>
                        ))}
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                    className="flex touch-none bg-slate-700 opacity-50 p-0.5 data-[orientation=vertical]:w-2.5"
                    orientation="vertical"
                >
                    <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-purple-300 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            <section className="flex flex-col items-center gap-10 mt-10">
                <NewPost />
            </section>            
        </div>
    )
}
