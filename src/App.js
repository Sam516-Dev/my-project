import './App.css'
import FrontBar from './components/FrontBar'
import Navbar from './components/Navbar'

function App() {
  return (
    <fragment>
      <div className=" mx-20 mt-8 h-screen">
        <Navbar />
        <FrontBar />
      </div>
    </fragment>
  )
}

export default App
