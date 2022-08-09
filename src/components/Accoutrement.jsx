import { motion } from 'framer-motion'
import { dropSpring, shake } from '../animationVariants'

export default function Accoutrement({ img, className, speed }) {
  return (
    <motion.div variants={dropSpring} className={`${className} absolute`}>
      <motion.img
        variants={shake}
        initial="initial"
        whileInView="animate"
        custom={speed}
        src={img}
        className="w-12   sm:w-16"
        alt="acc.jpg"
      />
    </motion.div>
  )
}
