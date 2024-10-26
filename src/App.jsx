import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components//Skills"

function App() {

  return (
    <>
    <div className=" bg-black text-white p-0 m-0">
      <Navbar />
      <Hero />
      <Skills/>
      <Projects/>
    </div>
    </>
  )
}

export default App
