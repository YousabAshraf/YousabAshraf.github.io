import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/portfolio'

function Projects() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1117]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-[#58a6ff] font-medium mb-3">My Recent Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 fade-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-[#161b22] border border-[#2d333b] rounded-2xl overflow-hidden"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#1f2937] to-[#111827] flex items-center justify-center relative">
                <span className="text-5xl opacity-30">💻</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-[#8b949e] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-[#1f2937] text-[#58a6ff] rounded-full border border-[#2d333b]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lift inline-flex items-center gap-2 px-5 py-2.5 bg-[#161b22] border border-[#2d333b] text-[#e6edf3] rounded-lg font-medium hover:border-[#58a6ff] text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lift inline-flex items-center gap-2 px-5 py-2.5 bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] rounded-lg font-medium hover:bg-[#58a6ff]/20 text-sm"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
