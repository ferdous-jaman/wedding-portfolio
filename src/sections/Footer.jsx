import { motion } from 'framer-motion'
import { Heart, Camera, BookOpen, Film, Mail } from 'lucide-react'
import { fadeUp, staggerContainer } from '../animations/variants'

const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Event Details', href: '#event' },
  { label: 'Wishes', href: '#wishes' },
  { label: 'Memories', href: '#memories' },
]

const socials = [
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: BookOpen, href: '#', label: 'Facebook' },
  { icon: Film, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0f0c09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="pt-20 pb-12 grid md:grid-cols-3 gap-12 border-b border-white/5"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Heart size={16} className="text-[#b76e79] fill-[#b76e79]" />
              <span className="font-cormorant text-2xl text-white font-medium tracking-wide">
                Sophia <span className="text-[#c9a96e]">&</span> Alexander
              </span>
            </div>
            <p className="font-cormorant text-base text-white/40 italic leading-relaxed mb-6">
              Two souls, one story — written in the stars.
              <br />September 14, 2026 · Grand Palace, Paris
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c9a96e] hover:border-[#c9a96e]/40 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <p className="font-poppins text-[10px] tracking-[0.35em] uppercase text-[#c9a96e]/60 mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-cormorant text-base text-white/40 hover:text-[#c9a96e] italic transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RSVP */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <p className="font-poppins text-[10px] tracking-[0.35em] uppercase text-[#c9a96e]/60 mb-6">
              Join Us
            </p>
            <p className="font-cormorant text-base text-white/40 italic leading-relaxed mb-6">
              We would be honoured to have you celebrate our love with us. Please RSVP before August 1, 2026.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav('#wishes')}
              className="font-poppins text-xs tracking-[0.25em] uppercase px-8 py-3 border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
            >
              RSVP Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-sm text-white/20 italic">
            Made with <Heart size={10} className="inline text-[#b76e79] fill-[#b76e79] mx-1" /> for Sophia & Alexander · 2026
          </p>
          <p className="font-poppins text-[10px] tracking-widest uppercase text-white/15">
            Forever Starts Today
          </p>
        </div>
      </div>
    </footer>
  )
}
