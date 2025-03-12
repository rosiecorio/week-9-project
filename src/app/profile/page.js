import UserForm from "@/components/UserForm"
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


    return (
        <div className="flex flex-col items-center">
            <h2>{user.firstName}s profile</h2>
            <section>
                <Image className="m-5 rounded-full" src={user.imageUrl} height={200} width={200} alt="Your profile picture"/>
                <div className="flex flex-col gap-3 border-2 border-white rounded-lg p-3">
                    <p>{user.firstName} {user.lastName}</p>
                    <div className="flex flex-row justify-between">
                        <p>bio</p>
                        <button>edit</button>
                    </div>
                </div>
                
            </section>
            <section>
                <UserForm />
            </section>
        </div>
    )
}

//profile picture, bio, full name, create new post, previous posts made by this user
//bio will need to start out blank, and potentially be edited.