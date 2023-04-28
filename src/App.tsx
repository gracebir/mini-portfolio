import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Tech from "./components/Tech"

function App() {
  return (
    <div className="max-w-7xl mx-auto text-[#CCCCCC] px-4 md:px-6 overflow-x-hidden">
     <Header/>
     <Hero/>
     <About/>
     <Tech/>
     <Experience/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
