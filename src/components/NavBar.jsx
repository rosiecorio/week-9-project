import Link from "next/link";

export default async function NavBar() {

    return (
        <nav className="flex flex-row gap-4">
            <Link href="/timeline">Home</Link>
            <Link href={`/profile`}>Profile</Link>
        </nav>
    )
}
