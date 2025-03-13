'use client'

import Link from "next/link"
import Image from "next/image"

export default function GlobalError({error, reset}) {
    return (
        <html>
            <body>
                <Image className="h-screen w-screen z-0 absolute" src="https://w0.peakpx.com/wallpaper/175/774/HD-wallpaper-honeycomb-texture-macro-food-textures-yellow-backgrounds-honeycomb-abstract-honeycomb-background-honey-textures-honey.jpg" 
                    alt="404 error, page not found" 
                    height={543} width={800} 
                />
                <section className="z-10 absolute flex flex-col items-center justify-center w-screen h-screen">
                    <div className="border-2 border-black rounded-xl p-5 flex flex-col items-center gap-3 bg-amber-500 font-medium">
                        <h2>Oh no! Something went wrong on that page! 🙈</h2>
                        <p>{error.message}</p>
                        <div className="flex flex-row gap-5 mt-3 text-white">
                            <button className="p-1 ps-2 pr-2 border-2 border-black rounded-2xl bg-black" onClick={() => reset()}>Try again</button>
                            <Link className="p-1 ps-2 pr-2 border-2 border-black rounded-2xl bg-black" href="/">Go Home</Link>
                        </div>
                    </div>                    
                </section>                
            </body>
        </html>
    )
}