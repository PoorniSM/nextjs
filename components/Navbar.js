import Link from 'next/link'
import Image from 'next/image' 

function Navbar() {
  return (
      <div>
      <Image src="/CANABN.png" width={100} height={50}/>
    <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/Marketplace">
          <a>Marketplace</a>
        </Link>
        <Link href="/Marketplace/Home">
          <a>Marketplace-Home page</a>
        </Link>
    </nav>
    </div>
  )
}

export default Navbar;