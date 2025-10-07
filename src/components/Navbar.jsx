import React, { useState, useEffect} from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            <nav className='bg-[#578f8f] flex justify-around w-[100vw] h-[10vh] sticky top-0'>
                <div className='text-white flex justify-center items-center text-2xl font-bold'>
                    <a href="">ITask</a>
                </div>

                <ul className='text-white flex justify-center items-center gap-2 h-auto'>
                    <li className='cursor-pointer font-medium'><a href="">Home</a></li>
                    <li className='cursor-pointer font-medium'><a href="">My Tasks</a></li>
                    <li className='font-medium w-[100px]'>Time(GMT+5:30):{currentTime.toLocaleTimeString()}</li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
