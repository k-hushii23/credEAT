import { useState ,useEffect} from 'react'
import Intro from './components/Intro'
import Landing from './components/Landing'
import { use } from 'react'
import ProbStatement from './components/ProbStatement'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Meals from './components/Meals'
import Credits from './components/Credits'
import Vendors from './components/Vendors'
import Signup from './components/Signup'
function App() {
  const [showIntro,setShowIntro]=useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowIntro(false)
    },3000)

    return()=> clearTimeout(timer)
  },[])

  if (showIntro) return <Intro />
  return (
    <>
    {/* <ProbStatement/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="meals" element={<Meals />} />
        <Route path="credits" element={<Credits />} />
        <Route path="vendor" element={<Vendors />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
