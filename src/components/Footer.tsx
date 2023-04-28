function Footer() {
  return (
    <footer className="text-[18px] flex flex-col-reverse gap-5 lg:flex-row lg:justify-between mb-10">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
      <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tech">Tech Stack</a>
        <a href="#experience">Work</a>
        <a href="#projects">Projects</a>
      </div>
      <p>Built by &nbsp;
        <span className="bg-gradient-to-r from-[#13B0F5] text-transparent via-[#13B0F5] to-[#E70FAA] bg-clip-text">Grace birindwa</span> with 
        <span className="bg-gradient-to-r from-[#E70FAA] text-transparent via-[#E70FAA] to-[#13B0F5] bg-clip-text">Love</span> & 
        <span className="bg-gradient-to-r from-[#E70FAA] text-transparent via-[#E70FAA] to-[#13B0F5] bg-clip-text">Tea</span></p>
    </footer>
  )
}

export default Footer
