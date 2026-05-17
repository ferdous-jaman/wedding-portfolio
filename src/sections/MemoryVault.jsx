import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { polaroidImages } from '../utils/imageData'
import { Lock, Heart } from 'lucide-react'

const quotes = [
  "In all the world, there is no heart for me like yours.",
  "You are my today and all of my tomorrows.",
  "Whatever our souls are made of, yours and mine are the same.",
  "I would choose you in a hundred lifetimes.",
]

export default function MemoryVault() {
  return (
    <SectionWrapper id="memories" className="bg-[#1a1410] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Private Memories"
          title={<span className="text-white">Our Memory <span className="text-[#c9a96e] italic">Vault</span></span>}
          subtitle="A sacred collection of moments that belong only to us — frozen in time, treasured forever."
          light
        />

        {/* Lock icon header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center gap-4 glass border border-[#c9a96e]/15 px-8 py-4">
            <Lock size={14} className="text-[#c9a96e]" />
            <p className="font-poppins text-[10px] tracking-[0.35em] uppercase text-[#c9a96e]/70">
              Private memories — for our eyes only
            </p>
            <Lock size={14} className="text-[#c9a96e]" />
          </div>
        </motion.div>

        {/* Polaroid grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 mb-16">
          {polaroidImages.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -12, rotate: '0deg', scale: 1.03, zIndex: 10 }}
              className="cursor-pointer"
            >
              <div
                className="bg-white p-3 pb-10 shadow-2xl shadow-black/40 w-52"
                style={{ transform: `rotate(${photo.rotate})` }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-44 object-cover"
                />
                <p className="font-cormorant text-[#1a1410] text-center mt-4 text-sm italic">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Romantic quotes carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-white/10 p-8 relative group hover:border-[#c9a96e]/20 transition-colors duration-300"
              >
                <p className="font-playfair text-lg md:text-xl text-white/75 italic font-light leading-relaxed">
                  "{quote}"
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart size={14} className="text-[#b76e79] fill-[#b76e79]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-14"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-[#c9a96e]/20" />
            <Heart size={14} className="text-[#c9a96e] fill-[#c9a96e]" />
            <div className="w-20 h-px bg-[#c9a96e]/20" />
          </div>
          <p className="font-cormorant text-2xl text-white/40 italic mt-6">
            Some moments are too precious for words.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
