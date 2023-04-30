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
    <div className="text-[#CCCCCC]">
      <Header />
      <div className="max-w-7xl mx-auto px-6 lg:px-0 md:px-6">
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
        <hr className="my-10" />
        <Footer />
      </div>
    </div>
  )
}

export default App
