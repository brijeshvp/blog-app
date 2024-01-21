import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
                <Image src="https://cdn.sanity.io/images/gdkk2x8m/production/7d6b6174557429a0b223bb1e1fa8001d5fae4a7a-800x800.jpg" width={50} height={50} className='rounded-full' alt='logo' />
            </Link>
            <h1>Brijesh Peshvani's Blog</h1>
        </div>
        <div>
          <Link href="brijeshpeshvani.com" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full'>Check out my Portfolio!</Link>
        </div>
    </header>
  )
}

export default Header