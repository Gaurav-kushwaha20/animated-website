import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading'>My <br /> <span className='text-purple'>Work Resume</span></h1>

            <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4  gap-10 justify-center items-center">
                {
                    workExperience.map((card) => (
                        <Button key={card.id} duration={Math.floor(Math.random() * 10000) + 1000}>
                            <div className='flex justify-center items-center'>
                                {/* <img src={card.thumbnail} alt={card.thumbnail} className='w-16 md:w-20 lg:w-32' /> */}
                                <img src={card.thumbnail} alt={card.thumbnail} className='w-16 md:w-20 lg:w-32' />
                                <div className='lg:ms-5'>
                                    <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                                    <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>

        </div>
    )
}

export default Experience