import React, { useRef } from 'react'
import DesignBox from './DesignBox'
import { motion } from 'framer-motion';

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



const DesignGallery = () => {
    const refer = useRef();
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".d3",
                // markers : true,
                start: "30% 50% ",
                end: "30% 50%",
                scrub: true,
                pin: true
            }
        })
        tl.to(".designGallery", {
            backgroundColor: "black",
            color: "white"
        })
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".d5",
                // markers : true,
                start: "30% 50% ",
                end: "30% 50%",
                scrub: true
            }
        })
        tl2.to(".designGallery", {
            backgroundColor: "white",
            color: "black"
        })
    }, { scope: refer })
    return (
        <div ref={refer}>
            <motion.div className={`designGallery`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            // transition={{delay : 3}}
            >

                <div className='lg:h-[100vh] h-[160vh] w-full flex lg:gap-0 gap-[10vh] lg:flex-row flex-col lg:p-6 p-0 lg:pt-[5vh] pt-[5vh]'>

                    <DesignBox
                        text1={"Quotient Bot"}
                        text2={"Website for esports bot for tournament and scrims."}
                        thumbnail={"src/assets/1.png"} />

                    <DesignBox
                        text1={"TMR ESPORTS"}
                        text2={"Fullstack Next.js website for tounament registration organization."}
                        thumbnail={"src/assets/2.png"}
                        weblink={"https://www.tmresports.in/"} />
                </div>

                <div className='lg:mb-0 mb-[15vh]' >
                    <div className='parallax-bg lg:h-[90vh] h-[60vh] w-full bg-blue-300'></div>
                    <h1 className='pl-6 my-3 text-4xl lg:text-center font-extrabold'>Vinta Premium Bag Website</h1>
                    <h1 className='pl-6 text-xl text-zinc-500 lg:text-center'>A fully responsive webpage designed for a high quality bag selling company</h1>
                    <h1 className='text-blue-600 hover:text-blue-800 mt-2 lg:text-center pl-6 lg:text-md md:text-md text-sm'>
                        <a href={"https://vinta.vercel.app/"} target='_blank'>View Live Project</a>
                    </h1>
                </div>


                <div className='d3 lg:h-[100vh] h-[160vh] w-full flex lg:gap-0 gap-[10vh] lg:flex-row flex-col lg:p-6 p-0  mt-[5vh]'>
                    <DesignBox
                        text1={"ASTRALUXE"}
                        text2={"Figma Designed for modern website for a clothing brand."}
                        thumbnail={"src/assets/figma1.jpeg"}
                        caseStudy={"https://www.tmresports.in/"}
                        weblink={"https://www.tmresports.in/"}
                        figmalink={"https://www.tmresports.in/"} />

                    <DesignBox
                        text1={"Chair Overview Design"}
                        text2={"An overview design section for a chair as a product."}
                        thumbnail={"src/assets/chair.gif"}
                        weblink={"https://also-monic.github.io/Chair_Design/"} />

                </div>

                <div className='lg:h-[100vh] h-[160vh] w-full flex lg:gap-0 gap-[10vh] lg:flex-row flex-col  lg:p-6 p-0  mt-[5vh]'>
                    <DesignBox
                        text1='3D Carousel'
                        text2 = "Animated figma design for a soda can company."
                        weblink={"https://www.figma.com/proto/jA2RjdOJOdTteaI365SEiH/Carousel?node-id=23-10"}
                        figmalink={"https://www.figma.com/design/jA2RjdOJOdTteaI365SEiH/Carousel?node-id=0-1&m=dev"}
                        thumbnail={"src/assets/can.gif"}
                    />

                    <DesignBox
                        text1={"MIRANDA WEBSITE"}
                        text2={"A NewsPaper themed porfolio design."}
                        thumbnail={"src/assets/3.png"}
                        weblink={"https://also-monic.github.io/Miranda-website/"} />

                </div>


                <div className='d5 lg:h-[100vh] h-[160vh] w-full flex lg:gap-0 gap-[10vh] lg:flex-row flex-col  lg:p-6 p-0  mt-[5vh]'>

                <DesignBox
                        text1={"COMPUTER HUT"}
                        text2={"Redesigned for modern website for a computer assembly startup."}
                        thumbnail={"src/assets/tmr_slider.png"}
                        caseStudy={"https://www.tmresports.in/"}
                        weblink={"https://www.tmresports.in/"}
                        figmalink={"https://www.tmresports.in/"} />

                    <DesignBox
                        text1={"Designs"}
                        text2={"Sample of some of random designs of landing web pages"}
                        thumbnail={"src/assets/webdesigns.gif"}
                        githublink={"https://github.com/Monic-19/CSS-Projects"}
                    />
                </div>

            </motion.div>
        </div>

    )
}

export default DesignGallery