import React from 'react'
import Image from 'next/image'


export default function SingleMenu(props: any) {
  return (
    <div>
        <Image className='w-full' src={props.imgName} alt=''/>
    </div>
  )
}
