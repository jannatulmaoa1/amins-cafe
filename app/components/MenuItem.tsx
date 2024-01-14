import React from 'react'
import Image from 'next/image'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'


export default function MenuItem() {
    return (
        <div className='w-full mt-10 grid grid-cols-3 max-w-[1140px] mx-auto gap-[28px]'>
            <div className='w-full max-w-[1140px] mx-auto shadow-md pl-[24px]'>
                <h2 className='font-[600] text-[28px] text-[#4F4F4F]'>Menu</h2>
                <ul className=''>
                    <li>
                        <a href='#'>Sweet Item</a>
                    </li>
                    <li>
                        <a href='#'>Brötchen</a>
                    </li>
                    <li>
                        <a href='#'>Hot Coffees</a>
                    </li>
                    <li>
                        <a href='#'>Salate</a>
                    </li>
                    <li>
                        <a href='#'>Addons</a>
                    </li>
                    <li>
                        <a href='#'>Iced Teas</a>
                    </li>
                    <li>
                        <a href='#'>Cold Drinks</a>
                    </li>
                </ul>
            </div>

            <div className='shadow-md grid col-span-2 mb-[14px] px-5'>
                <h2 className='font-[600] text-[36px] text-[#09231A]'>Hot Coffees</h2>
                <div className='grid grid-cols-3 gap-[28px]'>
                    <div>
                        <Image src={img1} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>

                    <div>
                        <Image src={img2} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>

                    <div>
                        <Image src={img3} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>

                    <div>
                        <Image src={img4} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>
                    <div>
                        <Image src={img5} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>
                    <div>
                        <Image src={img6} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>

                    <div>
                        <Image src={img7} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>
                    <div>
                        <Image src={img8} alt='' />
                        <h2 className='font-[400] text-[28px] text-[#4F4F4F]'>Caffè Americano</h2>
                        <p className='font-[500] text-[28px] text-[#09231A]'>Price: 90.$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
