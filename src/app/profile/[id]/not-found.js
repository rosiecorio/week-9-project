import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div>
            <p>Sorry that user does not exist!</p>
            <Image className="h-screen w-screen" src="https://thumbs.dreamstime.com/b/honey-error-page-not-found-bees-honeycombs-honey-error-page-not-found-bees-honeycombs-vector-page-sweet-116964610.jpg" 
            alt="404 error, page not found" 
            height={543} width={800} />
        </div>
    )
}