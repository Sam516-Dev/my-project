import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import FrontBar from './components/FrontBar'
import { Gallery } from './components/Gallery'
import Navbar from './components/Navbar'
import { SignUp } from './components/SignUp'
import Bg from './Media/Assets/Bg.jpg'

// main component here
function App() {
  return (
    <div className="bg-my-bg-color min-h-screen">
      <img
        src={Bg}
        alt="bg"
        className="absolute object-cover w-full h-[25rem]"
      />
      <div className="relative mx-20 ">
        <Navbar />
        <FrontBar />
        <Content />
        <Gallery />
      </div>
      <div className="pb-36">
        <SignUp />
        <Footer />
      </div>
    </div>
  )
}

export default App
