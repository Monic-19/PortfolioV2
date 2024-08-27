import React from 'react'
import "../styles/imageSlider.css"
import {motion} from "framer-motion"

import img1 from "../assets/tmr_slider.png"
import img2 from "../assets/tmr_slider.png"
import img3 from "../assets/quotient_slider.png"
import img4 from "../assets/healthhub.gif"
import img5 from "../assets/mirinda_slider.png"
import img6 from "../assets/chatit.gif"
import img7 from "../assets/can.gif"

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
                <img src={img1} alt="slider_image" />
            </div>
            
            <div className="item" >
                <img src={img2} alt="slider_image" />
            </div>

            <div className="item" >
                <img src={img3} alt="slider_image" />
            </div>

            <div className="item" >
                <img src={img4} alt="slider_image" />
            </div>
            
            <div className="item" >
                <img src={img5} alt="slider_image" />
            </div>

            <div className="item">
                <img src={img6} alt="slider_image" />
            </div>

            <div className="item">
                <img src={img7} alt="slider_image" />
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