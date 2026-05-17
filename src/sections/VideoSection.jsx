import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { fadeUp, scaleIn } from '../animations/variants'
import { Play } from 'lucide-react'
import { useState } from 'react'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="video" className="relative bg-[#0f0c09] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#0f0c09] to-[#1a1410] opacity-90" />

      <div className="relative section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="font-poppins text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]/70 mb-4"
            >
              Our Cinematic Highlight
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-light italic"
            >
              The Film
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-px bg-[#c9a96e] mx-auto mt-8" />
          </motion.div>

          {/* Video container */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={scaleIn}
            className="relative aspect-video overflow-hidden border border-[#c9a96e]/15 group cursor-pointer"
            onClick={() => setPlaying(true)}
          >
            {!playing ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1280&q=85&auto=format&fit=crop"
                  alt="Wedding video thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a1410]/50 group-hover:bg-[#1a1410]/40 transition-all duration-400" />
                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/20 transition-all duration-400"
                  >
                    <Play size={28} className="text-white ml-1 fill-white" />
                  </motion.div>
                  <p className="font-cormorant text-lg text-white/70 italic mt-5">
                    Watch Our Story Unfold
                  </p>
                </div>
                {/* Cinematic bars */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/80" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/80" />
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Wedding Highlight Film"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </motion.div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center font-cormorant text-lg text-white/40 italic mt-8"
          >
            Directed &amp; Filmed by Lumière Wedding Films · Paris, 2026
          </motion.p>
        </div>
      </div>
    </section>
  )
}
