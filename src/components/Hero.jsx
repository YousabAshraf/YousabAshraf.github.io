import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { socialLinks } from '../data/portfolio'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#58a6ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#bb9af7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[#58a6ff]" />
            <span className="text-[#58a6ff] font-medium">Hello, I'm</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
            Yousab Ashraf
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
            Software Engineer | Full Stack Developer
          </h2>

          <p className="text-lg text-[#8b949e] leading-relaxed max-w-xl mb-8">
            A passionate Software Engineering student at Faculty of Computer and Information,
            Ain Shams University. I build modern, scalable web applications and love
            turning ideas into real-world solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="btn-lift inline-flex items-center gap-2 px-7 py-3 bg-[#238636] hover:bg-[#2ea043] text-white font-semibold rounded-lg border border-[#2ea043] hover:shadow-[0_10px_20px_-10px_#238636]"
            >
              View Projects
            </a>
            <a
              href="#"
              className="btn-lift inline-flex items-center gap-2 px-7 py-3 border border-[#58a6ff] text-[#58a6ff] font-semibold rounded-lg hover:bg-[#58a6ff]/10"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn-lift inline-flex items-center gap-2 px-7 py-3 border border-[#2d333b] text-[#e6edf3] font-semibold rounded-lg hover:border-[#58a6ff] hover:bg-[#161b22]"
            >
              Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#2d333b] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#2d333b] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-all"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={socialLinks.email}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#2d333b] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-all"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Right - Profile image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div
              className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-[#58a6ff] to-[#bb9af7] overflow-hidden shadow-2xl flex items-center justify-center"
              style={{ animation: 'morph 8s ease-in-out infinite' }}
            >
              <span className="text-8xl md:text-9xl font-black text-white/80">Y</span>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 border-2 border-[#58a6ff]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8b949e] animate-bounce hidden lg:block"
      >
        <FaArrowDown size={20} />
      </a>
    </section>
  )
}

export default Hero
