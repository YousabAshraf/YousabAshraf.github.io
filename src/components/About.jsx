import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaCode, FaGraduationCap, FaLightbulb } from 'react-icons/fa'

function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6 bg-[#0d1117]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-[#58a6ff] font-medium mb-3">Get To Know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info cards */}
          <div className="grid sm:grid-cols-3 gap-4 fade-up">
            <div className="bg-[#161b22] border border-[#2d333b] rounded-2xl p-6 text-center hover:border-[#58a6ff] transition-all hover:-translate-y-2">
              <FaCode className="text-[#58a6ff] text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-1">Experience</h3>
              <p className="text-[#8b949e] text-sm">Full Stack Development</p>
            </div>
            <div className="bg-[#161b22] border border-[#2d333b] rounded-2xl p-6 text-center hover:border-[#58a6ff] transition-all hover:-translate-y-2">
              <FaGraduationCap className="text-[#58a6ff] text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-1">Education</h3>
              <p className="text-[#8b949e] text-sm">CS Student at ASU</p>
            </div>
            <div className="bg-[#161b22] border border-[#2d333b] rounded-2xl p-6 text-center hover:border-[#58a6ff] transition-all hover:-translate-y-2">
              <FaLightbulb className="text-[#58a6ff] text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-1">Interests</h3>
              <p className="text-[#8b949e] text-sm">Problem Solving & DSA</p>
            </div>
          </div>

          {/* Right - About text */}
          <div className="fade-up">
            <p className="text-[#8b949e] text-lg leading-relaxed mb-6">
              I'm a Software Engineering student at the Faculty of Computer and Information,
              Ain Shams University, passionate about building software that solves real-world
              problems. I focus on writing clean, efficient, and maintainable code.
            </p>
            <p className="text-[#8b949e] text-lg leading-relaxed mb-6">
              My interests span across full-stack web development, data structures & algorithms,
              and software design patterns. I enjoy the entire process — from designing system
              architecture to crafting pixel-perfect user interfaces.
            </p>
            <p className="text-[#8b949e] text-lg leading-relaxed">
              I'm always eager to learn new technologies, take on challenging projects, and
              collaborate with other developers. When I'm not coding, you'll find me exploring
              open-source projects or solving competitive programming problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
