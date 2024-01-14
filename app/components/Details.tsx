import Image from 'next/image'
import React from 'react'
import coffee from '../assets/coffee.png'
import pic7 from '../assets/pic7.png'
import pic8 from '../assets/pic8.png'
import pic9 from '../assets/pic9.png'
import pic10 from '../assets/pic10.png'



export default function Details() {
  return (
    <div>
      <div className='mt-10'>
        <p className='w-full max-w-[1140px] mx-auto'> <span className='text-[#09231A] font-[400] text-[28px]'>Menu / Hot Coffees /</span><span className='text-[#828282] font-[400] text-[28px]'>Caffè Americano</span> </p>
      </div>
      <div className='grid grid-cols-2 bg-[#006241] w-full max-w-[1140px] mx-auto rounded-[16px] mt-5'>
        <div className='mt-[60px] mb-[71px]'>
          <Image src={coffee} alt='' />
        </div>

        <div className='mt-[60px] mb-[58px]'>
          <div>
            <h1 className='font-[600] text-[48px] text-[#ffffff]'>Caffè Americano</h1>
            <p className='font-[400] text-[28px] text-[#ffffff] '>15calories</p>
          </div>
          <div>
            <h3 className='font-[600] text-[36px] text-[#ffffff] mt-5'>Size options</h3>
            <div className='grid grid-cols-4'>
              <div className=''>
                <Image src={pic7} alt='' />
                <h3 className='font-[400] text-[20px] text-[#ffffff]'>Short 8 <br />fl oz</h3>
              </div>
              <div className=''>
                <Image src={pic8} alt='' />
                <h3  className='font-[400] text-[20px] text-[#ffffff]'>Tall <br />12 fl oz</h3>
              </div>
              <div>
                <Image src={pic9} alt='' />
                <h3  className='font-[400] text-[20px] text-[#ffffff]'>Grande <br />16 fl oz</h3>
              </div>
              <div>
                <Image src={pic10} alt='' />
                <h3  className='font-[400] text-[20px] text-[#ffffff]'>Venti <br />20 fl oz</h3>
              </div>
            </div>
            <p className='font-[600] text-[28px] text-[#ffffff] mt-5'>Price: 9.5€</p>
            <h1 className='text-[400] text-[28px] text-[#ffffff]'>Call: +880 XXX XXX XXX</h1>
          </div>
        </div>
      </div>
    </div>

  )
}
