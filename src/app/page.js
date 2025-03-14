import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black text-white p-5 h-[92vh]">
      <div className="text-4xl text-amber-300">
        <h1>Bee Social</h1>
      </div>
      <section className="flex flex-row justify-center gap-5 p-5">
        <div className="border-white border-2 p-2 rounded-lg">
          <p>Connect with friends</p>
        </div>
        <div className="border-white border-2 p-2 rounded-lg">
          <p>Share updates</p>
        </div>
        <div className="border-white border-2 p-2 rounded-lg">
          <p>Create your profile</p>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <p>Dont have an account? Sign up today!</p>
        <Link href="/sign-in" className="border-white border-2 p-1 mt-2 rounded-lg text-amber-400">Sign up</Link>
      </section>
    </div>
    
  );
}

// add like function - add liked posts option to timeline?
// add edit user option to a popover radix component?
// add bee cursor? -- TRYING