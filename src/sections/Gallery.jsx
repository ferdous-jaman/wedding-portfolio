import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { galleryImages } from '../utils/imageData'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (img) => setLightbox(img)
  const closeLightbox = () => setLightbox(null)

  const navigate = (dir) => {
    const idx = galleryImages.findIndex((g) => g.id === lightbox.id)
    const next = (idx + dir + galleryImages.length) % galleryImages.length
    setLightbox(galleryImages[next])
  }

  return (
    <SectionWrapper id="gallery" className="bg-[#fefaf6]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Captured Moments"
          title="Our Gallery"
          subtitle="Every photograph holds a feeling. Every frame, a memory we will cherish forever."
        />

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className={`group relative overflow-hidden cursor-pointer ${
                img.span === 'tall' ? 'row-span-2' : ''
              } ${img.span === 'wide' ? 'col-span-2' : ''}`}
              onClick={() => openLightbox(img)}
            >
              <div
                className="w-full overflow-hidden"
                style={{ height: img.span === 'tall' ? '420px' : img.span === 'wide' ? '240px' : '220px' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1a1410]/0 group-hover:bg-[#1a1410]/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              {/* Caption */}
              <p className="text-center font-cormorant text-lg text-white/60 italic mt-4">{lightbox.alt}</p>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X size={26} />
              </button>

              {/* Navigation */}
              <button
                onClick={() => navigate(-1)}
                className="absolute top-1/2 -translate-y-1/2 -left-14 text-white/60 hover:text-white transition-colors hidden md:block"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute top-1/2 -translate-y-1/2 -right-14 text-white/60 hover:text-white transition-colors hidden md:block"
              >
                <ChevronRight size={32} />
              </button>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {galleryImages.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setLightbox(g)}
                    className={`transition-all duration-300 rounded-full ${
                      g.id === lightbox.id
                        ? 'w-6 h-1.5 bg-[#c9a96e]'
                        : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
