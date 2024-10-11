  "use client";
import Link from "next/link";
  const Navbar = () => {
  return (
    <div>
        <Link href={'/hom'}>hom</Link>        
        <Link href={'/contack'}>contack</Link>
        <Link href={'/about'}>about</Link>

    </div>
  )
}
export default Navbar