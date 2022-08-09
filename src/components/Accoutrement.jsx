import { motion } from 'framer-motion'
import { dropSpring, shake } from '../animationVariants'

export default function Accoutrement({ img, className, speed }) {
  return (
    <motion.div
      variants={dropSpring}
      className={`${className} absolute scale-50 sm:scale-90`}
    >
      <motion.img
        variants={shake}
        initial="initial"
        whileInView="animate"
        // animate="animate"
        custom={speed}
        src={img}
        alt="acc.jpg"
      />
    </motion.div>
  )
}
