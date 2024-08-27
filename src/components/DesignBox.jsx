import React, {useRef } from 'react'
import { motion} from 'framer-motion';

const DesignBox = ({text1 = "text1", text2 = "text2", weblink, caseStudy, figmalink, githublink , thumbnail="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY0fHx3ZWJzaXRlJTIwZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D"}) => {
    const c1 = useRef();
    const t1 = useRef();

  return (
    <div className='lg:h-[80vh] lg:w-[50vw] h-[70vh] w-full '>
        <div className='dbi lg:h-[70vh] h-[55vh] w-full overflow-hidden' >
            <motion.img 
                whileInView={{scale : 1}}
                whileHover={{scale: 1.05}}
                viewport={{margin : "-50%"}}
                src={thumbnail} alt="thumbnail" 
                className=' lg:m-0 overflow-hidden'
                ref={c1}/>
        </div>

        <div className='lg:h-[8vh] h-[20vh] w-full mt-3 lg:ml-2'>

            <motion.h1 
                ref={t1} 
                initial={{opacity: 0.5, paddingTop : "4vh"}} 
                whileInView={{opacity : 1, fontWeight : 900, paddingTop : 0}} 
                transition={{ease : "easeInOut"}}
                viewport={{margin : "-50px"}}
                className={`lg:pl-0 pl-6 lg:mb-3 mb-2 lg:text-4xl text-2xl `}>
                    {text1}
            </motion.h1>

            <motion.h1 
                ref={t1} className='lg:pl-0 pl-6 lg:text-xl text-zinc-500 italic'>
                {text2}
            </motion.h1>
            <div className='flex lg:pl-0 pl-6 lg:text-md text-sm'>
            {
                weblink &&
                <motion.h1 className='text-blue-600 hover:text-blue-800 mt-2'> <a href={weblink} target='_blank'>View Live Project</a>  </motion.h1>
            }
            {
                caseStudy &&
                <motion.h1 className='text-blue-600 hover:text-blue-800 mt-2'> <a href={caseStudy} target='_blank'> <span className='lg:mx-2 mx-1 text-zinc-500'>|</span>View Case Study</a>  </motion.h1>
            }
            {
                figmalink &&
                <motion.h1 className='text-blue-600 hover:text-blue-800 mt-2'> <a href={figmalink} target='_blank'> <span className='lg:mx-2 mx-1 text-zinc-500'>|</span>View Figma Design</a>  </motion.h1>
            }
            {
                githublink &&
                <motion.h1 className='text-blue-600 hover:text-blue-800 mt-2'> <a href={githublink} target='_blank'>View All Designs </a>  </motion.h1>
            }

            </div>
          


        </div>
    </div>
  )
}

export default DesignBox