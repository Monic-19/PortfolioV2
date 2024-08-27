import './App.css'
import DesignGallery from './components/DesignGallery'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ImageSlider from './components/ImageSlider'
import SelectedProjectCintainer from './components/SelectedProjectCintainer'
import Title from './components/Title'

function App() {

  return (
    <div className='relative'>
      <div className='fixed z-10 lg:top-4 top-1 lg:right-[2vw] md:right-[2vw] right-10 lg:w-[25vw] w-[80vw] flex justify-evenly bg-white bg-opacity-30 backdrop-blur-xl rounded-xl'>
        <a href="#hero">Hero</a>
        <a href="#design">Designs</a>
        <a href="#developed">Developed Projects</a>
      </div>

      <div id='hero'>
        <Hero />
      </div>

      <div id='design'>
        <ImageSlider />
        <DesignGallery />
      </div>


      <div id='developed'>
        <Title text1={"DEVELOPED"} text2={"PROJECTS"} />
        <SelectedProjectCintainer />
      </div>


      <div id='contact'>
        <Footer />
      </div>

    </div>
  )
}

export default App
