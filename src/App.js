import './App.css'
import Content from './components/Content'
import FrontBar from './components/FrontBar'
import Navbar from './components/Navbar'
import Bg from './Media/Assets/Bg.jpg'

function App() {
  return (
    <div className='bg-my-bg-color min-h-screen'>
      <img src={Bg} alt="bg" className="absolute object-cover w-full h-[25rem]" />
      <div className="relative mx-20">
        <Navbar />
        <FrontBar />
        <Content />
      </div>
    </div>
  )
}

export default App
