import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-black fixed top-0 z-1'>
        <SignIn />
        <Link href="/" className='border-white border-2 mt-5 p-3 rounded-lg'>Back Home</Link>
    </div>
  )
}