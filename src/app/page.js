import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center bg-black text-white p-5 h-[92vh]">
      <div className="scale-150">
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl text-amber-300">Bee Social</h1>
        </div>
        <section className="flex flex-row justify-center gap-5 p-5">
          <div className="bg-amber-500 shadow-sm shadow-amber-200 text-black p-2 rounded-lg">
            <p>Connect with friends</p>
          </div>
          <div className="bg-amber-500 shadow-sm shadow-amber-200 text-black p-2 rounded-lg">
            <p>Share updates</p>
          </div>
          <div className="bg-amber-500 shadow-sm shadow-amber-200 text-black p-2 rounded-lg">
            <p>Create your profile</p>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <p>Dont have an account? Sign up today!</p>
          <Link href="/sign-in" className="border-white border-2 p-1 mt-2 rounded-lg text-amber-400">Sign up</Link>
        </section>
      </div>      
    </section>    
  );
}

// add like function - add liked posts option to timeline?
// add edit user/comment option to a popover radix component?
// add bee cursor? -- TRYING