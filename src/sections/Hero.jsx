import { motion } from 'framer-motion'
import { ChevronDown, Heart } from 'lucide-react'
import { heroImage } from '../utils/imageData'
import { fadeUp, floatAnimation } from '../animations/variants'

export default function Hero() {
  const handleScroll = () => {
    document.querySelector('#couple')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Wedding hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
          }}
        />
      </motion.div>

      {/* Floating decorative orbs */}
      <motion.div
        variants={floatAnimation}
        animate="animate"
        className="absolute top-[15%] left-[8%] w-72 h-72 rounded-full bg-[#c9a96e]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full bg-[#b76e79]/10 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="font-poppins text-[10px] md:text-xs tracking-[0.45em] uppercase text-[#e8d5b0]/80 mb-8"
        >
          We are getting married
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-[110px] text-white font-light leading-none tracking-tight">
            Sophia
            <span className="block text-[#c9a96e] italic font-light">
              &amp; Alexander
            </span>
          </h1>
        </motion.div>

        {/* Divider ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="w-20 h-px bg-[#c9a96e]/50" />
          <Heart size={14} className="text-[#c9a96e] fill-[#c9a96e]" />
          <div className="w-20 h-px bg-[#c9a96e]/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="font-cormorant text-xl md:text-2xl lg:text-3xl text-white/80 font-light italic tracking-wide mb-4"
        >
          Two souls, one story — written in the stars
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="font-poppins text-xs md:text-sm tracking-[0.3em] uppercase text-[#e8d5b0]/70"
        >
          September 14, 2026 · Grand Palace, Paris
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(201,169,110,1)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#event')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-poppins text-xs tracking-[0.25em] uppercase px-10 py-4 bg-[#c9a96e] text-white transition-all duration-300 shadow-lg shadow-[#c9a96e]/30"
          >
            View Our Celebration
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-poppins text-xs tracking-[0.25em] uppercase px-10 py-4 border border-white/50 text-white hover:border-white transition-all duration-300"
          >
            Our Love Story
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="font-poppins text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
