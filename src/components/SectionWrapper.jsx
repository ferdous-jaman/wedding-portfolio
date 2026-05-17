export default function SectionWrapper({ children, className = '', id = '' }) {
  return (
    <section
      id={id}
      className={`section-padding ${className}`}
    >
      {children}
    </section>
  )
}
