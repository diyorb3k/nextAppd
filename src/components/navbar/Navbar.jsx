  "use client";
import Link from "next/link";
  const Navbar = () => {
  return (
    <div className="container gap[20px] mb-px[100] mb-20 shadow-lg mx-auto shadow-blue-900 grid gap-x-6 fixed gap-y-2 grid-cols-3 justify-between text-center px-4 py-8 bg-blue-200">
        <Link href={'/hom'}>hom</Link>        
        <Link href={'/contack'}>contack</Link>
        <Link href={'/about'}>about</Link>

    </div>
  )
}
export default Navbar