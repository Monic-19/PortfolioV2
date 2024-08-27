import React, { useRef } from 'react'
import {motion} from "framer-motion"

const Title = ({text1 = "", text2 = "", invertd = false}) => {
    const texta = useRef();
  return (
    <div className={`${invertd? "bg-white text-[#1B2A41]" : "bg-[#1B2A41] text-white"} lg:h-[45vh] h-[13vh] w-full relative font-extrabold overflow-hidden`}>
        <motion.h1 
            ref={texta} 
            initial ={{rotate : "15deg"}}
            whileInView={{rotate : "0deg", height : "15vw"}}
            transition={{duration : 0.5}}
            className='absolute text-[11vw] left-[15%] top-0   h-[7vw] overflow-hidden origin-left '>{text1}</motion.h1>

        <motion.h1 
            ref={texta} 
            initial ={{rotate : "-15deg"}}
            whileInView={{rotate : "0deg", height : "15vw"}}
            transition={{duration : 0.5}}
            className='absolute text-[11vw] left-[30%] bottom-0   h-[7vw] overflow-hidden origin-right '>{text2}</motion.h1>
    </div>
  )
}

export default Title