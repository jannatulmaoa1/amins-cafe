import React from 'react'
import about from '../assets/about.png'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <div>
                <Image className='max-w-[1140] mx-auto' src={about} alt='' />
                <div className='max-w-[749px] mx-auto text-center shadow-md relative mt-[-200px] bg-[#ffffff] z-10 rounded-[16px]'>
                    <div>
                        <h1 className='font-[600] text-[48px] text-[#09231A] mt-5 pt-[60px]'>About Us</h1>
                        <p className='font-[400] text-[28px] text-[#4F4F4F] mt-5'>At Amin's Cafe, we believe that food<br /> is not just sustenance; it's an art form that<br /> should tantalize your taste buds and leave<br /> a lasting impression. Established in 2010,<br /> Amin's Cafe has been a culinary<br /> cornerstone in Dhaka for years, serving up<br /> a delectable blend of flavors that<br /> have captivated the hearts and palates <br />of our loyal patrons.</p>
                    </div>
                    <h1 className='font-[600] text-[48px] text-[#09231A] mt-[40px]'>Our Vision</h1>
                    <p className='font-[400] text-[28px] text-[#4F4F4F] mt-5'>Our vision at Amin's Cafe is simple yet<br /> profound - to create a haven where culinary<br /> craftsmanship meets heartfelt hospitality.<br /> We aspire to be more than just a cafe; we aim to be<br /> a destination where people come together<br /> to savor exceptional food, forge unforgettable<br /> memories, and build lasting connections.</p>
                    <div>
                        <h1 className='font-[600] text-[48px] text-[#09231A] mt-[40px]'>Our Commitment to<br /> Sustainability</h1>
                        <p className='font-[400] text-[28px] text-[#4F4F4F] mt-5'>Amin's Cafe is not only dedicated to crafting<br /> exceptional food experiences but also to<br /> protecting our planet. We are<br /> committed to sustainable practices, from sourcing<br /> locally whenever possible to minimizing<br /> food waste and reducing our environmental footprint.<br /> We believe that responsible business<br /> is not just about serving great food but also about<br /> serving the greater good.</p>
                    </div>
                    <div>
                        <h1 className='font-[600] text-[48px] text-[#09231A] mt-[40px]'>Join Us for a Memorable<br /> Culinary Journey</h1>
                        <p className='font-[400] text-[28px] text-[#4F4F4F] mt-5'>We invite you to join us at Amin's Cafe<br /> and embark on a memorable culinary journey.<br /> Whether you're stopping by for<br /> your daily dose of caffeine, enjoying a leisurely <br />brunch, or hosting a special event,<br /> we promise to provide you with an experience that goes<br /> beyond food. It's a journey of flavors,<br /> stories, and shared moments.<br />
                            Thank you for choosing Amin's Cafe.<br /> We look forward to serving you and becoming<br />a part of your cherished memories.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}
