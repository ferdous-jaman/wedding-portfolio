import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from 'lucide-react'

const playlist = [
  { id: 1, title: 'A Thousand Years', artist: 'Christina Perri', duration: '4:45' },
  { id: 2, title: 'Can\'t Help Falling in Love', artist: 'Elvis Presley', duration: '3:01' },
  { id: 3, title: 'Perfect', artist: 'Ed Sheeran', duration: '4:23' },
  { id: 4, title: 'All of Me', artist: 'John Legend', duration: '4:29' },
  { id: 5, title: 'Marry You', artist: 'Bruno Mars', duration: '3:50' },
]

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(32)
  const [volume, setVolume] = useState(75)

  const track = playlist[currentTrack]

  const prev = () => setCurrentTrack((p) => (p - 1 + playlist.length) % playlist.length)
  const next = () => setCurrentTrack((p) => (p + 1) % playlist.length)

  return (
    <SectionWrapper id="music" className="bg-[#f9f4ee]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-poppins text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-4">
            Our Wedding Soundtrack
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#1a1410] font-light italic">
            Songs of Our Story
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mt-8" />
        </motion.div>

        {/* Player card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#1a1410] p-8 md:p-12 shadow-2xl shadow-[#1a1410]/20 relative overflow-hidden"
        >
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#c9a96e]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#b76e79]/10 blur-3xl pointer-events-none" />

          {/* Album art placeholder */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#c9a96e]/20 to-[#b76e79]/20 border border-[#c9a96e]/20 flex items-center justify-center">
              <motion.div
                animate={{ rotate: playing ? 360 : 0 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Music size={40} className="text-[#c9a96e]/60" />
              </motion.div>
            </div>
            {/* Vinyl rings */}
            <div className="absolute inset-4 rounded-full border border-[#c9a96e]/10" />
            <div className="absolute inset-8 rounded-full border border-[#c9a96e]/10" />
            <div className="absolute inset-[40%] w-5 h-5 rounded-full bg-[#c9a96e]/30" />
          </div>

          {/* Track info */}
          <div className="text-center mb-8">
            <p className="font-playfair text-2xl text-white font-light italic mb-1">{track.title}</p>
            <p className="font-poppins text-xs tracking-widest text-[#c9a96e]/60 uppercase">{track.artist}</p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="relative h-1 bg-white/10 rounded-full cursor-pointer mb-2">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#c9a96e] to-[#b76e79] rounded-full"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
            <div className="flex justify-between font-poppins text-[10px] text-white/30">
              <span>1:27</span>
              <span>{track.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <button onClick={prev} className="text-white/40 hover:text-white transition-colors">
              <SkipBack size={22} />
            </button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setPlaying(!playing)}
              className="w-14 h-14 rounded-full bg-[#c9a96e] flex items-center justify-center shadow-lg shadow-[#c9a96e]/30 hover:bg-[#e8d5b0] transition-colors"
            >
              {playing
                ? <Pause size={22} className="text-white" />
                : <Play size={22} className="text-white ml-0.5 fill-white" />
              }
            </motion.button>
            <button onClick={next} className="text-white/40 hover:text-white transition-colors">
              <SkipForward size={22} />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            <Volume2 size={14} className="text-white/30 flex-shrink-0" />
            <div className="relative flex-1 h-1 bg-white/10 rounded-full">
              <div
                className="absolute left-0 top-0 bottom-0 bg-[#c9a96e]/60 rounded-full"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Playlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 border border-[#e8d5b0] bg-white"
        >
          {playlist.map((song, i) => (
            <motion.button
              key={song.id}
              onClick={() => setCurrentTrack(i)}
              whileHover={{ backgroundColor: '#fdf6ec' }}
              className={`w-full flex items-center gap-4 px-6 py-4 border-b border-[#e8d5b0] last:border-0 transition-colors text-left ${
                i === currentTrack ? 'bg-[#fdf6ec]' : 'bg-white'
              }`}
            >
              <div className="w-6 text-center">
                {i === currentTrack && playing
                  ? <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-[#c9a96e] mx-auto"
                    />
                  : <span className="font-poppins text-xs text-[#2d2420]/30">{String(i + 1).padStart(2, '0')}</span>
                }
              </div>
              <div className="flex-1">
                <p className={`font-cormorant text-base ${i === currentTrack ? 'text-[#c9a96e] italic' : 'text-[#1a1410]'}`}>
                  {song.title}
                </p>
                <p className="font-poppins text-[10px] text-[#2d2420]/40 uppercase tracking-wider">{song.artist}</p>
              </div>
              <span className="font-poppins text-xs text-[#2d2420]/30">{song.duration}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
