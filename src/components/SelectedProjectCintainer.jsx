import React from 'react'
import SelectedProjectBox from './SelectedProjectBox'

const SelectedProjectCintainer = () => {
  return (
    <div className='w-full overflow-hidden'>
      <SelectedProjectBox
        text1="Infinite Dog Run "
        text2="A hypothetical game incorporating 2D sprite animations for a delightful gaming experience."
        text3="TechStat : HTML, CSS, JS"
        livelink={"https://dog-run-complete-git-main-also-monic.vercel.app/"}
        githublink={"https://github.com/Monic-19/Dog_Run"}
        thumbnail="src/assets/dog.png"
      />

      <SelectedProjectBox
        text1="Health Hub "
        text2="A FullStack online and offline doctor booking application with real time communication and report."
        text3="TechStat : ReactJs, NodeJs, Express, Postgress SQL, Socket.io"
        githublink={"https://github.com/lgarg12/HealthHub"}
        thumbnail="src/assets/healthhub.gif"
        reverse={true} />

      <SelectedProjectBox
        text1="Chat IT"
        text2="A FullStack realTime chat Application without sharing personal details."
        text3="TechStat : ReactJs, NodeJs, Express, MongooDb, Socket.io"
        githublink={"https://github.com/Monic-19/web-sockets/tree/main/fullstack_web_app"}
        thumbnail="src/assets/chatit.gif"
      />

      <SelectedProjectBox
        text1="Coffee Sale Analysis"
        text2="Analytical Dashbaord to analyze retail sales data to gain actionble insights that will enhance performance of coffee shop."
        text3="TechStat : Excel, PowerQuery"
        githublink={"https://github.com/Monic-19/Coffee-Sale-Analysis"}
        thumbnail="src/assets/sales.png"
        reverse={true} />
    </div>
  )
}

export default SelectedProjectCintainer