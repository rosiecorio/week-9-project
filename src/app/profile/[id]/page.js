import { auth } from "@clerk/nextjs/server"
import pg from "pg"

export default async function Page() {

    const db = new pg.Pool({
        connectionString: process.env.DB_CONN
    })

    return (
        <div className="flex flex-col items-center">
            <h2>Profile Page</h2>
            <section>
                <p>{userId}</p>
                <p>profile picture</p>
                <p>Name Lastname</p>
                <p>bio</p>
            </section>
        </div>
    )
}

//profile picture, bio, first name, username,

// create new post, previous posts made by this user

//bio will need to start out blank, and potentially be edited.