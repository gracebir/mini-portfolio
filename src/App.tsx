import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Tech from "./components/Tech"

function App() {
  return (
    <div className="max-w-7xl mx-auto text-[#CCCCCC] md:px-6">
     <Header/>
     <Hero/>
     <Tech/>
     <Projects/>
     <Experience/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
