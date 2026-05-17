import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { timelineImages } from '../utils/imageData'
import { Heart, Star, Gem } from 'lucide-react'

function TimelineCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden border group ${
        event.isFuture
          ? 'border-[#c9a96e]/40 bg-[#c9a96e]/5'
          : 'border-white/10 bg-white/[0.05]'
      }`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/20 to-transparent" />
        {event.isFuture && (
          <div className="absolute inset-0 bg-[#1a1410]/50 flex items-center justify-center">
            <span className="font-poppins text-xs tracking-widest uppercase text-[#c9a96e] border border-[#c9a96e]/40 px-4 py-2">
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-3 py-1">
          <p className="font-poppins text-[10px] tracking-widest text-[#c9a96e] uppercase">
            {event.month} {event.year}
          </p>
        </div>
      </div>
      {/* Text */}
      <div className="p-5">
        <p className="font-poppins text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/70 mb-1">
          {event.subtitle}
        </p>
        <h3 className="font-playfair text-xl text-white font-light italic mb-2">
          {event.title}
        </h3>
        <p className="font-cormorant text-base text-white/60 leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  )
}

const events = [
  {
    year: '2019',
    month: 'March',
    title: 'First Meeting',
    subtitle: 'Florence Bookshop',
    description: 'Fate brought two strangers together in a tiny bookshop. One copy of Neruda. Two reaching hands. The rest is history.',
    image: timelineImages.meet,
    icon: Star,
    color: '#c9a96e',
  },
  {
    year: '2019',
    month: 'June',
    title: 'Our First Date',
    subtitle: 'Candlelit Dinner, Paris',
    description: 'He chose a restaurant by the Seine. She wore a dress the colour of roses. They talked until the candles burned low and the night grew deep.',
    image: timelineImages.firstDate,
    icon: Heart,
    color: '#b76e79',
  },
  {
    year: '2022',
    month: 'April',
    title: 'Adventures Together',
    subtitle: 'Santorini, Greece',
    description: 'From the caldera cliffs they watched the sun melt into the Aegean. They made a quiet promise: to keep choosing each other, every day.',
    image: timelineImages.engagement,
    icon: Star,
    color: '#c9a96e',
  },
  {
    year: '2024',
    month: 'December',
    title: 'The Proposal',
    subtitle: 'Under the Eiffel Tower',
    description: 'Snow was falling. She was laughing at something he said. He reached into his pocket and the world went silent. She whispered yes before he could finish asking.',
    image: timelineImages.wedding,
    icon: Gem,
    color: '#b76e79',
  },
  {
    year: '2026',
    month: 'September',
    title: 'Our Wedding Day',
    subtitle: 'Grand Palace, Paris',
    description: 'The day two lives become one story. Surrounded by everyone they love, they will make their vows and begin forever together.',
    image: timelineImages.meet,
    icon: Heart,
    color: '#c9a96e',
    isFuture: true,
  },
]

export default function Timeline() {
  return (
    <SectionWrapper id="timeline" className="bg-[#1a1410]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Our Journey"
          title={<span className="text-white">Milestones of <span className="text-[#c9a96e] italic">Our Love</span></span>}
          subtitle="Every love story is made of moments. Here are the ones that shaped ours."
          light
        />

        {/* Vertical spine line */}
        <div className="relative mt-8">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c9a96e]/30 to-transparent pointer-events-none" />

          <div className="space-y-10 md:space-y-12">
            {events.map((event, i) => {
              const Icon = event.icon
              const isRight = i % 2 !== 0
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                >
                  {/* Mobile layout: icon + card stacked */}
                  <div className="flex gap-4 items-start md:hidden">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                      style={{ backgroundColor: event.color }}
                    >
                      <Icon size={14} className="text-white" style={{ fill: 'white' }} />
                    </div>
                    <div className="flex-1">
                      <TimelineCard event={event} />
                    </div>
                  </div>

                  {/* Desktop layout: 3-col grid */}
                  <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] items-start">
                    {/* Left col */}
                    <div className="pr-8">
                      {!isRight && <TimelineCard event={event} />}
                    </div>
                    {/* Centre node */}
                    <div className="flex justify-center pt-5">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 relative"
                        style={{ backgroundColor: event.color, boxShadow: `0 0 24px ${event.color}50` }}
                      >
                        <Icon size={18} className="text-white" style={{ fill: 'white' }} />
                      </motion.div>
                    </div>
                    {/* Right col */}
                    <div className="pl-8">
                      {isRight && <TimelineCard event={event} />}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
