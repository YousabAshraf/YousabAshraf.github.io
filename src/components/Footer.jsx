import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa'
import { socialLinks } from '../data/portfolio'

function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#2d333b]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div>
            <a href="#home" className="text-2xl font-extrabold gradient-text">
              Yousab Ashraf
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2d333b] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-all"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2d333b] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-all"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={socialLinks.email}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2d333b] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-all"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#8b949e] text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Yousab Ashraf. Built with{' '}
            <FaHeart className="text-red-500 text-xs" /> and React.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
