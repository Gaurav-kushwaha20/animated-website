import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies } from '@/data'

const Client = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading'>Kind Word From <br /> <span className='text-purple'>Satisfied Clients</span></h1>

            <div className="flex flex-col items-center justify-center">
                <div className=" h-[40rem] md:h-[50rem] rounded-lg flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="fast"
                    />
                </div>
                <div className="comapnies flex flex-col md:flex-row gap-4">
                    {
                        companies.map(({ id, name, img, nameImg }) => (
                            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                                <img src={img} alt={name} className='w-7 md:w-14' />
                                <img src={nameImg} alt={name} className='w-10 md:w-16' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Client

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },

];