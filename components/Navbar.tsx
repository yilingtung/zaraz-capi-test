import Link from 'next/link';

export default function Navbar() {
  return (
    <nav 
        className='sticky top-0 left-0 py-3 px-6 w-full border-b flex justify-between gap-2 bg-neutral-950'>
			<Link
        href='/'>
        <h1>Zaraz CAPI Demo</h1>
      </Link>
			<div className='flex gap-2' >
	  <Link
        href='/about'>
        About
      </Link>
      <Link
        href='/products'>
        Products
      </Link>
	  </div>
    </nav>
  );
}