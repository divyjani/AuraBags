import React, { useEffect, useState } from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import AuraLogo from '/navLogo.png';
import { IoLogoYoutube } from 'react-icons/io';
import { ImInstagram } from "react-icons/im";
import master from '/master.png'
import visa from '/visa.png';
const BlackFooter = () => {
    return (
        <div className='bg-[#272727] py-20 text-gray-50'>
            <div className="flex flex-col w-[90%] m-auto">
                <div className="flex ulDiv w-[70%] justify-between max-lg:w-full">
                    <ul>
                        <li><b>SUPPORT</b></li>
                        <li>Service and Warranty</li>
                        <li>Contact Us</li>
                        <li>TSA Lock Instructions</li>
                    </ul>
                    <ul>
                        <li><b>QUICK LINKS</b></li>
                        <li>Damage Policy</li>
                        <li>Care and Cleaning</li>
                        <li>Packing Tips</li>
                        <li>Site Map</li>
                    </ul>
                    <ul>
                        <li><b>OUR COMPANY</b></li>
                        <li>About Aura Bags</li>
                    </ul>
                    <ul>
                        <li><b>ACCOUNT</b></li>
                        <li>Track Order</li>
                        <li>Sign In</li>
                        <li>Shop all products</li>
                    </ul>
                </div>
                <div className="flex justify-between mt-20 mb-2 w-[100%]">

                     <div className='w-[220px] h-[100px]  p-1 '>
                <img className='AuraTwo w-full h-full object-contain'  src={AuraLogo} />
                </div>
                    <div className='flex gap-10'>
                        <FaSquareFacebook className='text-[#b9b7b7] text-2xl' />
                        <IoLogoYoutube className='text-[#b9b7b7] text-2xl' />
                        <ImInstagram className='text-[#b9b7b7] text-2xl' />
                    </div>
                </div>
                <hr />
                <div className="flex justify-between mt-10">
                    <div className="">
                        <ul className='text-[#b9b7b7b6] flex text-sm gap-10'>
                            <li>Terms & Condition</li>
                            <li>Privacy</li>
                            <li>Personal Information Collection Statement</li>
                            <li><span className='flex'><img className='h-[30px]' src={master} alt="" /> <img className='h-[30px]' src={visa} alt="" /></span></li>

                        </ul>
                        <p className='text-[#b9b7b7]'> Copyright © 2024 Developed and managed by Quadrant</p>
                    </div>
                    <p className='text-[#b9b7b7b6]'>India</p>
                </div>
            </div>
        </div>

    )
}

const WhiteFooter = () => {
    return (
        <>
            <div className="whiteFooterOne">
                <ul className='w-[60%] ml-3 flex  flex-col gap-3 mt-5 max-sm:w-[90%]'>
                    <hr className='hr' />
                    <li><p>Support</p> <p>+</p></li>
                    <hr className='hr' />
                    <li><p>QUICK LINKS</p> <p>+</p></li>
                    <hr className='hr' />
                    <li><p>OUR COMPANY</p> <p>+</p></li>
                    <hr className='hr' />
                    <li><p>ACCOUNT</p><p>+</p></li>
                </ul>
            </div>
            <div className="flex justify-between mt-20 mb-2 w-[70%] max-sm:w-[90%]">
                <div className='w-[150px] h-[70px] bg-[#f7f7f7] p-2 rounded-md'>
                <img className='AuraTwo w-full h-full object-contain'  src={AuraLogo} />
                </div>
                <div className='flex gap-8'>
                    <FaSquareFacebook className='text-[#b9b7b7] text-2xl' />
                    <IoLogoYoutube className='text-[#b9b7b7] text-2xl' />
                    <ImInstagram className='text-[#b9b7b7] text-2xl' />
                </div>
            </div>
            <div className="flex justify-between mt-10">
                <div className="">
                    <ul className='text-[#1c1a1ab9] flex text-xs gap-8 flex-wrap w-[80%] m-auto'>
                        <li>Terms & Condition</li>
                        <li>Privacy</li>
                        <li>Personal Information Collection Statement</li>
                        <li><span className='flex'><img className='h-[30px]' src={master} alt="" /> <img className='h-[30px]' src={visa} alt="" /></span></li>
                    </ul>
                    <p className='text-[#1c1a1ab9] text-sm my-8 max-sm:text-xs'> Copyright © 2024 Developed and managed by Quadrant</p>
                </div>
            </div>

        </>
    )
}

const FooterTwo = () => {
    const [check, setcheck] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 850) {
                setcheck(true);
            } else {
                setcheck(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        check ?  <WhiteFooter />: <BlackFooter />
    );
}

export default FooterTwo
