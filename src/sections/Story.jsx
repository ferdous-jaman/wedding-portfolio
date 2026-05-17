import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { fadeLeft, fadeRight, fadeUp } from '../animations/variants'

const chapters = [
  {
    number: '01',
    title: 'A Chance Encounter',
    date: 'Spring, 2019',
    text: `It was a rainy Tuesday at a small bookshop in Florence. She was reaching for the same
    dog-eared copy of Neruda's poetry. Their hands touched. Their eyes met. The world paused.
    Neither of them believed in coincidences — until that moment.`,
    side: 'left',
  },
  {
    number: '02',
    title: 'Getting to Know You',
    date: 'Summer, 2019',
    text: `Late-night conversations over candlelit dinners. Long walks along the Seine.
    Handwritten notes slipped under doors. They discovered that the universe had been quietly
    weaving their paths together long before that bookshop.`,
    side: 'right',
  },
  {
    number: '03',
    title: 'Falling Deeply',
    date: 'Autumn, 2019',
    text: `By the time the leaves turned gold, so had their love. He told her she was his home.
    She told him he was her favourite adventure. They were right about both.`,
    side: 'left',
  },
  {
    number: '04',
    title: 'The Proposal',
    date: 'Winter, 2024',
    text: `On a snowy evening beneath the Eiffel Tower, he got down on one knee. With trembling
    hands and a heart full of everything, he asked the question. She whispered "yes" before he
    even finished the sentence.`,
    side: 'right',
  },
]

export default function Story() {
  return (
    <SectionWrapper id="story" className="bg-[#f9f4ee]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="How We Met"
          title="Our Love Story"
          subtitle="Every great love story deserves to be told. Here is ours — honest, beautiful, and all ours."
        />

        <div className="relative">
          {/* Centre line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {chapters.map((chapter, i) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, x: chapter.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-stretch gap-6 md:gap-0 md:mb-14 ${
                  chapter.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content card */}
                <div className="w-full md:w-[44%] md:flex-shrink-0">
                  <div
                    className={`bg-white border border-[#e8d5b0] p-8 md:p-10 shadow-sm relative h-full ${
                      chapter.side === 'right' ? 'md:text-right' : ''
                    }`}
                  >
                    <p className="font-poppins text-[10px] tracking-[0.35em] uppercase text-[#c9a96e] mb-3">
                      {chapter.date}
                    </p>
                    <h3 className="font-playfair text-2xl md:text-3xl text-[#1a1410] mb-4 italic">
                      {chapter.title}
                    </h3>
                    <p className="font-cormorant text-lg text-[#2d2420]/70 leading-relaxed">
                      {chapter.text}
                    </p>
                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#c9a96e]/30" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#c9a96e]/30" />
                  </div>
                </div>

                {/* Centre dot — desktop only */}
                <div className="hidden md:flex w-12 flex-shrink-0 items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-[#c9a96e] shadow-lg shadow-[#c9a96e]/40" />
                </div>

                {/* Chapter number — desktop only */}
                <div className="hidden md:flex flex-1 items-center justify-center">
                  <p className="font-playfair text-[8rem] text-[#c9a96e]/8 font-light leading-none select-none">
                    {chapter.number}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="font-playfair text-3xl md:text-4xl text-[#1a1410] italic font-light leading-relaxed">
            "I knew I wanted you forever the moment I realized forever felt too short."
          </p>
          <p className="font-poppins text-xs tracking-widest uppercase text-[#c9a96e] mt-6">— Alexander</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
