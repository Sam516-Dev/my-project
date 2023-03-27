import './App.css'
import FrontBar from './components/FrontBar'
import Navbar from './components/Navbar'
// import Bg from '../Media/Assets/Bg.jpg'
import Bg from './Media/Assets/Bg.jpg'

function App() {
  return (
    <div>
      <div className=" absolute w-full h-40">
        <img src={Bg} alt="bg" />
      </div>
      <div className="  relative mx-20 h-screen">
        <Navbar />
        <FrontBar />
      </div>
    </div>
  )
}

export default App
