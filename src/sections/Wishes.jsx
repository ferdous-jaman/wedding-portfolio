import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { Heart, Send, MessageCircle } from 'lucide-react'

const sampleWishes = [
  {
    id: 1,
    name: 'Emily & James',
    relation: 'College friends',
    message: "Sophia, you radiate joy in everything you do. Alexander, you are the luckiest man alive. Watching you two together is proof that real love exists. Wishing you a lifetime of laughter and adventure.",
    avatar: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=100&q=70&fit=crop&auto=format',
    date: 'April 2026',
  },
  {
    id: 2,
    name: 'Charlotte Brooks',
    relation: 'Maid of Honour',
    message: "Sophia, you have always deserved the greatest love — and you found it in Alexander. I have never seen you more at peace, more radiant, or more yourself. Here is to forever, my darling.",
    avatar: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=100&q=70&fit=crop&auto=format',
    date: 'May 2026',
  },
  {
    id: 3,
    name: 'Dr. & Mrs. Bennett',
    relation: 'The Groom\'s Parents',
    message: "Alexander, from the moment you brought Sophia home, we knew she was the one. She fills our family with so much light. Welcome to the family, darling. We love you both more than words can say.",
    avatar: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=100&q=70&fit=crop&auto=format',
    date: 'March 2026',
  },
  {
    id: 4,
    name: 'Thomas & Lily',
    relation: 'Childhood friends',
    message: "We have known Sophia since she was eight years old. Watching her grow into this beautiful, loving woman — and seeing how Alexander looks at her — our hearts are so full. May your love only deepen with time.",
    avatar: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=100&q=70&fit=crop&auto=format',
    date: 'April 2026',
  },
  {
    id: 5,
    name: 'Monsieur Laurent',
    relation: 'The bookshop owner',
    message: "I remember two strangers reaching for the same book on a rainy afternoon in my shop. I knew then. Some things are simply meant to be. Félicitations, mes amis.",
    avatar: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=100&q=70&fit=crop&auto=format',
    date: 'May 2026',
  },
  {
    id: 6,
    name: 'Olivia Chen',
    relation: 'Best friend of the Bride',
    message: "You two are my favourite love story — and I have read a lot of them. Sophia, you deserve every bit of this happiness. Alexander, thank you for loving her exactly the way she always deserved.",
    avatar: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=100&q=70&fit=crop&auto=format',
    date: 'May 2026',
  },
]

export default function Wishes() {
  const [wishes, setWishes] = useState(sampleWishes)
  const [form, setForm] = useState({ name: '', relation: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.message) return
    const newWish = {
      id: wishes.length + 1,
      name: form.name,
      relation: form.relation || 'Guest',
      message: form.message,
      avatar: `https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=100&q=70&fit=crop&auto=format`,
      date: 'May 2026',
    }
    setWishes([newWish, ...wishes])
    setForm({ name: '', relation: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <SectionWrapper id="wishes" className="bg-[#f9f4ee]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Words of Love"
          title="Guest Wishes"
          subtitle="The most beautiful gift you can give us is your heartfelt words. Leave us a message we will treasure forever."
        />

        {/* Wish form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mb-14"
        >
          <form onSubmit={handleSubmit} className="bg-white border border-[#e8d5b0] p-8 md:p-12 shadow-sm">
            <h3 className="font-playfair text-2xl text-[#1a1410] italic mb-6">Leave a Wish</h3>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="font-poppins text-[10px] tracking-widest uppercase text-[#2d2420]/50 block mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full border border-[#e8d5b0] bg-[#fefaf6] px-4 py-3 font-cormorant text-lg text-[#1a1410] focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#2d2420]/30 rounded-none"
                  placeholder="Margaret & William"
                />
              </div>
              <div>
                <label className="font-poppins text-[10px] tracking-widest uppercase text-[#2d2420]/50 block mb-2">
                  Relation
                </label>
                <input
                  type="text"
                  value={form.relation}
                  onChange={(e) => setForm({ ...form, relation: e.target.value })}
                  className="w-full border border-[#e8d5b0] bg-[#fefaf6] px-4 py-3 font-cormorant text-lg text-[#1a1410] focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#2d2420]/30 rounded-none"
                  placeholder="Aunt & Uncle"
                />
              </div>
            </div>
            <div className="mb-7">
              <label className="font-poppins text-[10px] tracking-widest uppercase text-[#2d2420]/50 block mb-2">
                Your Message *
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full border border-[#e8d5b0] bg-[#fefaf6] px-4 py-3 font-cormorant text-lg text-[#1a1410] focus:outline-none focus:border-[#c9a96e] transition-colors resize-none placeholder:text-[#2d2420]/30 rounded-none"
                placeholder="Share your heartfelt wishes for the couple..."
              />
            </div>
            <div className="flex items-center justify-between">
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-cormorant text-[#b76e79] italic"
                  >
                    Thank you for your beautiful wish! ♥
                  </motion.p>
                )}
              </AnimatePresence>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="ml-auto flex items-center gap-3 font-poppins text-xs tracking-[0.25em] uppercase px-8 py-3 bg-[#1a1410] text-white hover:bg-[#c9a96e] transition-all duration-300"
              >
                Send Wish
                <Send size={13} />
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Wishes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              layout
              className="bg-white border border-[#e8d5b0] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative group flex flex-col"
            >
              <MessageCircle
                size={20}
                className="text-[#c9a96e]/30 mb-4 group-hover:text-[#c9a96e]/50 transition-colors flex-shrink-0"
              />
              <p className="font-cormorant text-[17px] text-[#2d2420]/75 leading-relaxed mb-6 italic flex-1">
                "{wish.message}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#e8d5b0]">
                <img
                  src={wish.avatar}
                  alt={wish.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-poppins text-sm text-[#1a1410] font-medium">{wish.name}</p>
                  <p className="font-cormorant text-xs text-[#2d2420]/50 italic">{wish.relation} · {wish.date}</p>
                </div>
                <Heart size={12} className="text-[#b76e79] fill-[#b76e79] ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
