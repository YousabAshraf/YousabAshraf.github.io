import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { socialLinks } from '../data/portfolio'

function Contact() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:yousab.ashraf@example.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-[#58a6ff] font-medium mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 fade-up">
          {/* Left - Contact info */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-[#8b949e] text-lg leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out — I'd love
              to hear from you!
            </p>

            <div className="space-y-4">
              <a
                href={socialLinks.email}
                className="flex items-center gap-4 p-4 bg-[#161b22] border border-[#2d333b] rounded-xl hover:border-[#58a6ff] transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#58a6ff]/10 text-[#58a6ff] group-hover:bg-[#58a6ff]/20 transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#8b949e]">Email</p>
                  <p className="font-medium">yousab.ashraf@example.com</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#161b22] border border-[#2d333b] rounded-xl hover:border-[#58a6ff] transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#58a6ff]/10 text-[#58a6ff] group-hover:bg-[#58a6ff]/20 transition-colors">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#8b949e]">GitHub</p>
                  <p className="font-medium">YousabAshraf</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#161b22] border border-[#2d333b] rounded-xl hover:border-[#58a6ff] transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#58a6ff]/10 text-[#58a6ff] group-hover:bg-[#58a6ff]/20 transition-colors">
                  <FaLinkedinIn size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#8b949e]">LinkedIn</p>
                  <p className="font-medium">Yousab Ashraf</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Contact form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-[#161b22] border border-[#2d333b] rounded-xl text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-[#161b22] border border-[#2d333b] rounded-xl text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-[#161b22] border border-[#2d333b] rounded-xl text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-lift w-full inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#238636] hover:bg-[#2ea043] text-white font-semibold rounded-xl border border-[#2ea043] hover:shadow-[0_10px_20px_-10px_#238636] cursor-pointer"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
