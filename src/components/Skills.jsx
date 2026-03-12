import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  SiSharp,
  SiDotnet,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiGit,
  SiLeetcode,
} from 'react-icons/si'

const skills = [
  { name: 'C#', icon: SiSharp, color: '#239120' },
  { name: '.NET', icon: SiDotnet, color: '#512BD4' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'SQL', icon: SiMysql, color: '#CC2927' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'DSA', icon: SiLeetcode, color: '#FFA116' },
]

function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-[#58a6ff] font-medium mb-3">What I Work With</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 fade-up">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="skill-card bg-[#161b22] border border-[#2d333b] rounded-2xl p-6 flex flex-col items-center gap-4 cursor-default"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <Icon size={32} style={{ color: skill.color }} />
                </div>
                <span className="font-semibold text-[#e6edf3]">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
