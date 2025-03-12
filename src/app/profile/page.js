// import UserFormButton from "@/components/UserFormButton"
import DeletePost from "@/components/DeletePost"
import NewPost from "@/components/NewPost"
// import UserForm from "@/utils/UserForm"
import { auth } from "@clerk/nextjs/server"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import pg from "pg"

export default async function Page() {

    const { userId, redirectToSignIn } = await auth()
    
    if (!userId) return redirectToSignIn()

    const user = await currentUser()

    const db = new pg.Pool({
        connectionString: process.env.DB_CONN
    })

    const userInfo = (await db.query(`SELECT * FROM users WHERE clerk_id=$1`, [userId])).rows[0]

    const userPosts = (await db.query(`SELECT posts.id, posts.user_id, posts.content, posts.img_url FROM posts`)).rows

    const userPostsByNew = userPosts.reverse()
    console.log(userPostsByNew)

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium mt-5 text-amber-400">{userInfo.username}s Profile</h2>
            <div className="flex flex-row mt-10 w-[90vw] justify-around bg-amber-600 rounded-xl p-5 shadow-md shadow-amber-400">            
                <section className="h-[50vh] p-5 flex flex-col">
                    <Image className="m-5 rounded-full shadow-black shadow-md" src={user.imageUrl} height={200} width={200} alt="Your profile picture"/>
                    <p className="text-black text-2xl font-medium self-center mb-3">Posts: {userPosts.length}</p>
                    <div className="flex flex-col gap-3 border-2 border-black rounded-lg p-3 text-lg text-black bg-amber-400 shadow-amber-700 shadow-lg">
                        <p>{user.firstName} {user.lastName} {`(${userInfo.username})`}</p>                    
                        <p>{userInfo.bio}</p>
                        <button className="bg-black text-white hover:bg-white rounded-xl">edit</button>                    
                    </div>                
                </section>
                {/* <UserFormButton /> */}                
                <section className="flex flex-col items-center justify-center gap-5 h-[50vh]">                     
                    <NewPost id={userInfo.id} />                                                 
                </section>
                
            </div>
            <div className="flex flex-col gap-5 mt-5 mb-5">
                <h2 className="text-amber-400 font-small text-4xl self-center">Your Posts</h2>
                {userPostsByNew.map((post) => (
                    <div className="rounded-lg p-3 w-[80vw] bg-amber-400 text-black font-medium flex flex-row gap-3" key={post.id}>                                             
                        <Image src={post.img_url} height={150} width={150}alt="picture of a bee"/>
                        <div className="flex flex-col size-full">
                            <div className="flex flex-row justify-between">
                                <p className="underline">{user.firstName}{`(${userInfo.username})`}</p>
                                <DeletePost id={post.id}/>
                            </div>                                
                            <p>{post.content}</p>
                        </div>                                                                                                              
                    </div>                                     
                ))}
            </div>
        </div>
    )
}

//profile picture, bio, full name, create new post, previous posts made by this user -- DONE
//make bio info form show when user first loads into the page?

//bio will need to start out blank, and potentially be edited.