import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.1 }}
      className="text-center mb-10 md:mb-12"
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className={`font-poppins text-xs tracking-[0.35em] uppercase mb-4 ${
            light ? 'text-[#fdf6ec]/70' : 'text-[#c9a96e]'
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-playfair text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-5 ${
          light ? 'text-white' : 'text-[#1a1410]'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`font-cormorant text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-white/70' : 'text-[#2d2420]/70'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        className={`w-16 h-px mx-auto mt-6 ${
          light ? 'bg-[#c9a96e]/40' : 'bg-[#c9a96e]'
        }`}
      />
    </motion.div>
  )
}
