import Image from 'next/image'
import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import SingleMenu from './SingleMenu'



export default function Menu() {
	return (
		<div className='w-full mt-10 grid grid-cols-2 max-w-[1140px] mx-auto gap-[28px]'>
			<SingleMenu imgName={pic1} />
			<SingleMenu imgName={pic2}/>
			<SingleMenu  imgName={pic3}/>
			<SingleMenu imgName={pic4}/>
			<SingleMenu  imgName={pic5}/>
			<SingleMenu  imgName={pic6}/>
		</div>
	)
}
