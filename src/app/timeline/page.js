import pg from "pg"

export default async function Page() {

    const db = new pg.Pool({
        connectionString: process.env.DB_CONN
    })

    const allPosts = (await db.query(`SELECT * FROM POSTS`)).rows[0]
    console.log(allPosts)

    return (
        <div className="flex flex-col items-center">
            <h2>Timeline Page</h2>
            <section>
                {allPosts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.id}</h2>
                    </div>
                ))}
            </section>
        </div>
    )
}

//display all posts