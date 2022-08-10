import { motion } from 'framer-motion'

export default function NavigationButton({ text, selected, onClick }) {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.1 },
      }}
      className={`px-4 ${selected === text && 'font-bold text-yellow-900'}`}
      onClick={onClick}
    >
      {text}
    </motion.button>
  )
}
