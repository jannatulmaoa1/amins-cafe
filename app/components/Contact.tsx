import Image from 'next/image'
import React from 'react'
import about from '../assets/about.png'
import picture from '../assets/picture.png'

export default function Contact() {
    return (
        <div>
            <div>
                <Image className='max-w-[1140] mx-auto' src={about} alt='' />
            </div>
            <div  className='max-w-[749px] mx-auto text-center shadow-md relative mt-[-100px] bg-[#ffffff] z-10 rounded-[16px]'>
                <h1 className='font-[600] text-[48px] text-[#09231A] pt-[60px]'>Opening Time</h1>
                <p className='font-[400] pt-[32px] text-[28px] text-[#4F4F4F]'>Saturday to Friday: 10AM to 10 PM</p>
                <h1 className='text-[#09231A] text-[48px] font-[600] pt-[32px]'>Contact Us</h1>
                <p className='font-[400] text-[28px] text-[#4F4F4F] pt-[32px]'>Phone: +880 XXX XXX XXX</p>
                <p className='pt-[24px] text-[28px] font-[400] text-[#4F4F4F]'>Email: youremail@gmail.com</p>
                <p className='pt-[24px] text-[28px] font-[400] text-[#4F4F4F]'>Address: Banani, Dhaka-1200, Bangladesh</p>
                <Image width={100} className='w-full px-[25.5px]' src={picture} alt='' />
            </div>
        </div>
    )
}
