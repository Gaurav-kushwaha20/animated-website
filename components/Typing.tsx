"use client"
import React from 'react'
import Typed from 'typed.js';


const Typing = () => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Next Js', 'React Js', 'Express Js', 'MongoDB'],
            typeSpeed: 50,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <span>
            <span ref={el} className='font-bold text-blue-500' />


        </span>
    )
}

export default Typing