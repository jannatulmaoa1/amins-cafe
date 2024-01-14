import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'


export default function Navbar() {
	return (
		<header className='bg-white shadow py-[15px]'>
			<nav className='md:flex justify-between items-center w-full max-w-[1140px] mx-auto'>
				<div>
					<Image src={logo} alt='' />
				</div>

				<ul className='flex md:flex-row flex-col md:items-center md:gap-[24px] md:py-5'>
					<li>
						<a className='hover:text-[#09231A] text-[20px] font-normal text-[#808080]' href='#'>Home</a>
					</li>
					<li>
						<a className='hover:text-[#09231A] text-[20px] font-normal text-[#808080]' href='#'>Menu</a>
					</li>
					<li>
						<a className='hover:text-[#09231A] text-[20px] font-normal text-[#808080]' href='#'>About Us</a>
					</li>
					<li>
						<a className='hover:text-[#09231A] text-[20px] font-normal text-[#808080]' href='#'>Contact</a>
					</li>
				</ul>

				<div>
					<p className='text-[20px] font-normal text-[#808080]'>Call: 013 974 98 46</p>
				</div>

			</nav>
		</header>
	)
}
