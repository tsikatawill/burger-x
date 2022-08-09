import { motion } from 'framer-motion'
import { dropSpring, shake } from '../animationVariants'

export default function Accoutrement({ img, className, speed }) {
  return (
    <motion.div variants={dropSpring} className={className}>
      <motion.img
        variants={shake}
        initial="initial"
        animate="animate"
        custom={speed}
        src={img}
        alt="acc.jpg"
      />
    </motion.div>
  )
}
