'use client'

import Link from "next/link"

export default function GlobalError({error, reset}) {
    return (
        <html>
            <body>
                <h2>Oh no! Something went wrong on that page! 🙈</h2>
                <p>{error.message}</p>
                <div>
                    <button onClick={() => reset()}>Try again</button>
                    <Link href="/">Go Home</Link>
                </div>
            </body>
        </html>
    )
}