import React from 'react'
import "../styles/imageSlider.css"
import {motion} from "framer-motion"

const ImageSlider = () => {
  return (
    <motion.div 
        initial = {{height : 0}}
        whileInView = {{height : "65vh"}}
        transition={{duration : 1}}
        viewport={{once : true}}
        className='banner'>
        <div className='slider'>

            <div className="item ">
                <img src="src/assets/tmr.png" alt="" />
            </div>
            
            <div className="item" >
                <img src="src/assets/tmr_slider.png" alt="tmr_slider" />
            </div>

            <div className="item" >
                <img src="src/assets/quotient_slider.png" alt="" />
            </div>

            <div className="item" >
                <img src="src/assets/healthhub.gif" alt="" />
            </div>
            
            <div className="item" >
                <img src="src/assets/mirinda_slider.png" alt="" />
            </div>

            <div className="item">
                <img src="src/assets/chatit.gif" alt="" />
            </div>

            <div className="item">
                <img src="src/assets/can.gif" alt="" />
            </div>

        </div>
        <motion.h1 
            initial = {{paddingTop : "13vh"}}
            animate = {{paddingTop : "0vh"}}
            transition={{duration : 2, delay : 0.5 }} 
            className='text'>Top Picks</motion.h1>
    </motion.div>
  )
}

export default ImageSlider