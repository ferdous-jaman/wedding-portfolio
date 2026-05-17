import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Event', href: '#event' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Wishes', href: '#wishes' },
  { label: 'Memories', href: '#memories' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#fefaf6]/90 backdrop-blur-xl shadow-sm border-b border-[#c9a96e]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Heart
              size={16}
              className="text-[#b76e79] fill-[#b76e79]"
            />
            <span className={`font-cormorant text-xl font-medium tracking-wide ${scrolled ? 'text-[#1a1410]' : 'text-white'}`}>
              S <span className="text-[#c9a96e]">&</span> A
            </span>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`font-poppins text-xs tracking-widest uppercase transition-colors duration-300 relative group ${
                    scrolled ? 'text-[#2d2420]/80 hover:text-[#c9a96e]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* RSVP Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('#wishes')}
            className={`hidden md:block font-poppins text-xs tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
              scrolled
                ? 'border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white'
                : 'border-white/60 text-white hover:bg-white/20'
            }`}
          >
            RSVP
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-[#1a1410]' : 'text-white'}`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#1a1410] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X size={26} />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <Heart size={18} className="text-[#b76e79] fill-[#b76e79]" />
              <span className="font-cormorant text-2xl text-white font-medium">
                Sophia <span className="text-[#c9a96e]">&</span> Alexander
              </span>
            </div>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(link.href)}
                className="font-playfair text-2xl text-white/80 hover:text-[#c9a96e] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => handleNav('#wishes')}
              className="mt-4 font-poppins text-xs tracking-widest uppercase px-8 py-3 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white transition-all"
            >
              RSVP
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
