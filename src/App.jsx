import { useState ,useEffect} from 'react'
import Intro from './components/Intro'
import Landing from './components/Landing'
import { use } from 'react'
import ProbStatement from './components/ProbStatement'


function App() {
  const [showIntro,setShowIntro]=useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowIntro(false)
    },3000)

    return()=> clearTimeout(timer)
  },[])

  
  return (
    <>
    {showIntro?<Intro/>:<Landing/>}
    {/* <ProbStatement/> */}
    
    
      
    </>
  )
}

export default App
