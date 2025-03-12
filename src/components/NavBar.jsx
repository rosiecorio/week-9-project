import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function NavBar() {

    const {userId} = await auth()

    return (
        <nav className="flex flex-row gap-4">
            <Link href="/timeline">Home</Link>
            <Link href={`/profile`}>Profile</Link>
        </nav>
    )
}