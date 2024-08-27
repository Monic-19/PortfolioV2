import React from 'react'
import { motion } from "framer-motion"
import { FaGithubAlt,FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../assets/profile.jpeg"
import profile2 from "../assets/profile2.avif"

const Hero = () => {
    return (
        <div className='lg:h-[100vh] h-[80vh] w-full lg:p-6 p-2 overflow-hidden duration-500'>
            <div className=' h-full w-full relative'>
                <h1 className=' uppercase font-extrabold w-full  text-[16vw] text-center tracking-tight text-[#1B2A41] leading-[15vw] absolute lg:top-10 top-[7%]'>Monic Vyas</h1>

                <div className='lg:h-[35vh] h-[32vh] lg:w-[30vw] w-full absolute bottom-0 p-1 '>
                    <h1 className='text-[3vh] font-bold mb-2'>Hello! I am Monic</h1>
                    <h2 className='text-[#1B2A41] mb-2 text-[2vh]'>FullStack Web Developer | UI UX Designer  </h2>
                    <p className='italic font-extralight'>Currently a final year student at Jaypee Institute of Information Technology Noida, I am a Mern Stack developer with proficiency in react and next js along with designing in figma. </p>

                    <div className=' h-[5vh] lg:w-[10vw] w-[50vw] lg:mt-5 mt-3 rounded-3xl border-[1px] border-[#1B2A41] flex items-center lg:px-3 px-2 text-2xl justify-evenly text-[#1B2A41]'>
                        <a href="https://github.com/Monic-19" target='_blank'> <FaGithubAlt  /></a>

                        <a href="https://www.linkedin.com/in/monic-vyas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'> <FaLinkedin /></a>

                        <a href="mailto:monicvyas20@gmail.com" target='_blank'><MdEmail /></a>
                   
      
                       
                    </div>
                </div>

                <div className='lg:h-[50vh] md:h-[40vh] h-[25vh] lg:w-[30vw] w-[60vw] lg:right-0 lg:bottom-0 absolute right-[50%] lg:translate-x-0  translate-x-1/2 md:bottom-[20vh] bottom-[35vh] rounded-md overflow-hidden shadow-xl '>
                    <img src={profile} alt="profile" className='h-full w-full object-cover object-bottom hover:scale-125 duration-500' />
                </div>

                <div className='lg:h-[50vh] md:h-[40vh] h-[25vh] lg:w-[30vw] w-[60vw] bg-purple-500 lg:right-[32vw] lg:flex hidden lg:bottom-0 absolute right-[50%] lg:translate-x-0  translate-x-1/2 md:bottom-[20vh] bottom-[25vh] rounded-md overflow-hidden shadow-xl '>
                    <img src={profile2} alt="profile" className='h-full w-full object-cover object-bottom hover:scale-125 duration-500' />
                </div>
            </div>
        </div>
    )
}

export default Hero
