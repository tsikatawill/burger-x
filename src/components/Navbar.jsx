import Logo from '../images/burger-king-logo.png'
import { motion } from 'framer-motion'
import { fadeIn, navMenu } from '../animationVariants'
import { FaHamburger, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (showMenu) {
      body.style.height = '100vh'
      body.style.overflow = 'hidden'
    } else {
      body.style.height = 'auto'
      body.style.overflow = 'auto'
    }
  }, [showMenu])

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
          className="hidden md:flex items-center gap-10 text-yellow-900 font-bold text-2xl"
          style={{ fontFamily: 'Caveat' }}
        >
          <li>Home</li>
          <li>Menu</li>
          <li>Location</li>
          <li>Contact</li>
        </ul>

        <motion.div
          whileTap={{ scale: 0.9 }}
          className="menu-toggle absolute right-5 z-50 md:hidden cursor-pointer text-yellow-800 border-yellow-800 p-1 border rounded-full"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaTimes /> : <FaHamburger />}
        </motion.div>

        <motion.nav
          variants={navMenu}
          initial="initial"
          animate={showMenu ? 'animate' : 'initial'}
          exit="initial"
          className="nav-menu fixed flex flex-col items-center h-screen justify-evenly z-40 md:hidden bg-white top-0 w-full left-0"
        >
          <a href="/">Home</a>
          <a href="/#menu">Menu</a>
          <a href="/#location">Location</a>
          <a href="/#contact">Contact</a>
        </motion.nav>
      </div>
    </motion.nav>
  )
}
