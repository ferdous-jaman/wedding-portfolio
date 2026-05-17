import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import FloatingPetals from './components/FloatingPetals'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import Couple from './sections/Couple'
import Story from './sections/Story'
import Timeline from './sections/Timeline'
import EventDetails from './sections/EventDetails'
import Gallery from './sections/Gallery'
import VideoSection from './sections/VideoSection'
import Wishes from './sections/Wishes'
import MemoryVault from './sections/MemoryVault'
import MusicPlayer from './sections/MusicPlayer'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Main site — always rendered, never hidden */}
      <div className="min-h-screen bg-[#fefaf6]">
        <FloatingPetals />
        <Navbar />
        <main>
          <Hero />
          <Couple />
          <Story />
          <Timeline />
          <EventDetails />
          <Gallery />
          <VideoSection />
          <Wishes />
          <MemoryVault />
          <MusicPlayer />
        </main>
        <Footer />
        <ScrollToTop />
      </div>

      {/* Loading screen overlay — fades out after 2.2s */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-[#1a1410] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <p className="font-poppins text-[10px] tracking-[0.5em] uppercase text-[#c9a96e]/60 mb-6">
                A Love Story
              </p>
              <h1 className="font-playfair text-5xl md:text-7xl text-white font-light leading-tight">
                Sophia
              </h1>
              <p className="font-cormorant text-3xl text-[#c9a96e] my-1">&amp;</p>
              <h1 className="font-playfair text-5xl md:text-7xl text-white font-light leading-tight">
                Alexander
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-32 h-px bg-[#c9a96e] mx-auto mt-10 origin-left"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="font-cormorant text-white/30 italic text-lg mt-6"
              >
                September 14, 2026
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
