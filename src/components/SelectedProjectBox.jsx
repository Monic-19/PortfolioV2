import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const SelectedProjectBox = ({ reverse = false, text1, text2, text3, thumbnail, githublink, livelink }) => {
    const refer = useRef();
    const initialX = reverse ? -200 : 200;
    const originX = reverse ? "right" : "left";
    const textAlignClass = reverse ? 'text-right pr-3 ' : 'text-left pl-3';

    return (
        <div className={`lg:h-[70vh] w-full lg:flex p-6 lg:gap-4 h-[40vh] mt-[3vh] ${reverse ? 'lg:flex-row-reverse' : ''}`}>

            <div className='spbp bg-[#ECECEC] lg:w-[60%] lg:h-full h-[25vh] w-full lg:rounded-[2vh] rounded-[2vh] flex justify-center items-center overflow-hidden'>

                <div className='spbc bg-blue-400 lg:w-[50vw] lg:h-[30vw] h-[15vh] w-[60vw] scale-[1.05] rounded-lg lg:rounded-2xl overflow-hidden'>
                    <img src={thumbnail} alt="" className=' object-center object-cover h-full w-full' />
                </div>
            </div>

            <div className={`lg:w-[35%] lg:h-full h-[10vh] w-full flex flex-col justify-end cursor-default  ${textAlignClass}`}>
                <motion.h1
                    initial={{ opacity: 0, x: initialX, originX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeIn", delay: 0 }}
                    className="lg:mb-5 lg:text-4xl font-bold"
                >
                    {text1}
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, x: initialX, originX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
                    className="lg:text-lg "
                >
                    {text2}
                </motion.h1>

                <div className='flex'></div>

                {
                    livelink &&
                    <motion.h1
                        initial={{ opacity: 0, x: initialX, originX }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
                        className='text-blue-600 hover:text-blue-800 mt-2'
                    >
                        <a href={livelink} target='_blank'>
                            View Live Project
                        </a>
                    </motion.h1>
                }
                {
                    githublink &&
                    <motion.h1
                        initial={{ opacity: 0, x: initialX, originX }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
                        className='text-blue-600 hover:text-blue-800 my-2'
                    >
                        <a href={githublink} target='_blank'>
                            View Gihub Repo
                        </a>
                    </motion.h1>
                }



                <motion.h1
                    initial={{ opacity: 0, x: initialX, originX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeIn", delay: 0.4 }}
                    className="lg:mb-[9vh] lg:text-md text-gray-500 italic"
                >
                    {text3}
                </motion.h1>


            </div>
        </div>
    );
};

export default SelectedProjectBox;
