import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { useCountdown } from '../hooks/useCountdown'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const WEDDING_DATE = '2026-09-14T15:00:00'

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light"
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <p className="font-poppins text-[9px] tracking-[0.3em] uppercase text-[#c9a96e]/70 mt-2">
        {label}
      </p>
    </div>
  )
}

const detailCards = [
  {
    icon: Calendar,
    label: 'Date',
    value: 'September 14, 2026',
    sub: 'Sunday Celebration',
  },
  {
    icon: Clock,
    label: 'Ceremony Begins',
    value: '3:00 PM',
    sub: 'Reception at 6:00 PM',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'Grand Palace Ballroom',
    sub: '12 Rue de Rivoli, Paris',
  },
  {
    icon: Users,
    label: 'Dress Code',
    value: 'Black Tie Optional',
    sub: 'Champagne & Gold tones welcome',
  },
]

export default function EventDetails() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE)

  return (
    <SectionWrapper id="event" className="bg-[#1a1410]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Mark Your Calendar"
          title={<span className="text-white">The <span className="text-[#c9a96e] italic">Wedding Day</span></span>}
          subtitle="Join us as we celebrate our love and begin our forever together."
          light
        />

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="glass border border-[#c9a96e]/15 p-8 md:p-14 max-w-3xl mx-auto text-center">
            <p className="font-poppins text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]/60 mb-8">
              Counting down to forever
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-14">
              <CountdownUnit value={days} label="Days" />
              <span className="font-playfair text-4xl text-[#c9a96e]/40 mb-4">:</span>
              <CountdownUnit value={hours} label="Hours" />
              <span className="font-playfair text-4xl text-[#c9a96e]/40 mb-4">:</span>
              <CountdownUnit value={minutes} label="Minutes" />
              <span className="font-playfair text-4xl text-[#c9a96e]/40 mb-4">:</span>
              <CountdownUnit value={seconds} label="Seconds" />
            </div>
          </div>
        </motion.div>

        {/* Detail Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {detailCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="border border-white/10 bg-white/[0.03] p-8 text-center group transition-all duration-300 hover:border-[#c9a96e]/30 hover:bg-white/[0.05]"
              >
                <div className="w-12 h-12 rounded-full border border-[#c9a96e]/30 flex items-center justify-center mx-auto mb-5 group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/10 transition-all duration-300">
                  <Icon size={18} className="text-[#c9a96e]" />
                </div>
                <p className="font-poppins text-[9px] tracking-[0.3em] uppercase text-[#c9a96e]/60 mb-2">{card.label}</p>
                <p className="font-playfair text-lg text-white italic mb-1">{card.value}</p>
                <p className="font-cormorant text-sm text-white/40">{card.sub}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-[#c9a96e]/15 overflow-hidden"
        >
          <div className="relative">
            <iframe
              title="Wedding Venue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342457!2d2.3316!3d48.8636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sRue%20de%20Rivoli%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="380"
              style={{ border: 0, filter: 'grayscale(30%) sepia(20%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none border border-[#c9a96e]/10" />
          </div>
          <div className="p-6 text-center bg-white/[0.03]">
            <p className="font-cormorant text-lg text-white/70 italic">
              Grand Palace Ballroom · 12 Rue de Rivoli, Paris, France
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 font-poppins text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] hover:text-[#e8d5b0] transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
