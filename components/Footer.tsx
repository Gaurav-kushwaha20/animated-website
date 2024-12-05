import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10' id='contact'>
            <div className='w-full  absolute left-0 bottom-0 min-h-96'>
                <img src="/footer-grid.svg" alt="grid" className=' w-full opacity-50' />
            </div>

            <div className='flex text-center flex-col items-center'>
                <h1 className='heading'>Ready To Take <span>Your</span>digital presence to the next level</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how i can help you achieve your goals</p>
                <a href="mailto:gaurav1@gmail.com">
                    <MagicButton
                        title='let get in touch'
                        icon={<FaLocationArrow />}
                        position='right'
                        otherClasses={'gap-3'}
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-center items-center'>
                <p className='text-sm md:text-base md:font-normal font-light'>Copyright © 2024 Gaurav</p>
            </div>

            <div className='flex items-center md:gap-3 gap-6'>
                {
                    socialMedia.map(({ id, img, link }) => (
                        <div key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>

                            <Link href={link} target='_black'><img src={img} alt={'img'} width={20} height={20} /></Link>
                        </div>
                    ))
                }
            </div>

        </footer>
    )
}

export default Footer