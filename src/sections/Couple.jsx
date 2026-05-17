import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { coupleImages } from '../utils/imageData'
import { Heart, Camera } from 'lucide-react'

export default function Couple() {
  return (
    <SectionWrapper id="couple" className="bg-[#fefaf6]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The Ones in Love"
          title="Meet the Couple"
          subtitle="Two hearts that found each other against all odds — here is the story of who we are."
        />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="relative overflow-hidden max-w-md mx-auto" style={{ height: '500px' }}>
              <img
                src={coupleImages.bride}
                alt="Sophia — the bride"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-4 border border-[#c9a96e]/30 pointer-events-none transition-all duration-500 group-hover:inset-3" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="font-poppins text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-1">The Bride</p>
                <h3 className="font-playfair text-3xl text-white font-light italic">Sophia</h3>
                <p className="font-cormorant text-sm text-white/60 mt-1">Clarke</p>
              </div>
            </div>
            <div className="mt-8 text-center px-4">
              <p className="font-cormorant text-lg text-[#2d2420]/80 leading-relaxed italic">
                "A dreamer with flowers in her heart, she brought warmth into every room she entered.
                Her laugh is the most beautiful sound in the world."
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="w-10 h-px bg-[#c9a96e]/40" />
                <Camera size={14} className="text-[#c9a96e]" />
                <div className="w-10 h-px bg-[#c9a96e]/40" />
              </div>
            </div>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="group relative"
          >
            <div className="relative overflow-hidden max-w-md mx-auto" style={{ height: '500px' }}>
              <img
                src={coupleImages.groom}
                alt="Alexander — the groom"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-4 border border-[#c9a96e]/30 pointer-events-none transition-all duration-500 group-hover:inset-3" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="font-poppins text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-1">The Groom</p>
                <h3 className="font-playfair text-3xl text-white font-light italic">Alexander</h3>
                <p className="font-cormorant text-sm text-white/60 mt-1">Bennett</p>
              </div>
            </div>
            <div className="mt-8 text-center px-4">
              <p className="font-cormorant text-lg text-[#2d2420]/80 leading-relaxed italic">
                "A quiet strength and a soul full of adventure. He knew from the first glance
                that she was the one — and never stopped showing it."
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="w-10 h-px bg-[#c9a96e]/40" />
                <Camera size={14} className="text-[#c9a96e]" />
                <div className="w-10 h-px bg-[#c9a96e]/40" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Together image strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 relative overflow-hidden max-w-4xl mx-auto"
        >
          <img
            src={coupleImages.together}
            alt="Sophia and Alexander together"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-[#c9a96e]/50" />
              <Heart size={14} className="text-[#c9a96e] fill-[#c9a96e]" />
              <div className="w-16 h-px bg-[#c9a96e]/50" />
            </div>
            <p className="font-cormorant text-xl md:text-2xl text-white/90 italic mt-3">
              "Together is our favourite place to be"
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
