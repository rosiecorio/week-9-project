import { User } from "@clerk/nextjs"

export default async function Page(user) {

    const userInfo = await user

    console.log(user)
    return (
        <div className="flex flex-col items-center">
            <h2>Profile Page</h2>
        </div>
    )
}

//profile picture, bio, full name, create new post