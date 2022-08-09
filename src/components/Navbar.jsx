import Logo from '../images/burger-king-logo.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../animationVariants'

export default function Navbar() {
  return (
    <motion.nav
      variants={fadeIn('down', 0.25)}
      initial="initial"
      animate="animate"
      className="navbar"
    >
      <div className="container py-2 flex justify-between items-center">
        <div className="Logo">
          <img src={Logo} alt="logo.jpg" className="w-16" />
        </div>
        <ul
          className="flex items-center gap-10 text-yellow-900 font-bold text-2xl"
          style={{ fontFamily: 'Caveat' }}
        >
          <li>Home</li>
          <li>Menu</li>
          <li>Location</li>
          <li>Contact</li>
        </ul>
        <button className="rounded-full bg-yellow-900 text-yellow-300 font-bold h-fit py-2 px-5 shadow-md shadow-yellow-800">
          ORDER NOW
        </button>
      </div>
    </motion.nav>
  )
}
