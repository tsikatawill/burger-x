import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Burgers, Sandwiches } from '../lib/MenuItems'
import { dropSpring, staggerContainer } from '../animationVariants'

function NavigationButton({ text, selected, onClick }) {
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

function MenuItems({ items }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-5"
    >
      {items.map((item, indx) => (
        <motion.div variants={dropSpring(0.03)} key={indx}>
          <motion.img
            whileHover={{
              rotateZ: [0, 10, 0, -10, 0],
              translateY: [0, -10, 0],
              transition: { duration: '2', repeat: Infinity, ease: 'linear' },
            }}
            src={item.image}
            alt="some.jpg"
            className="h-40 w-40 mb-2 mx-auto mt-4"
          />

          <div className="text text-center">
            <h3 className="font-bold text-yellow-900 uppercase text-lg">
              {item.name}
            </h3>
            <p className="text-sm"> {item.description}</p>
            <p className="font-semibold text-yellow-900 uppercase text-lg">
              ${item.price}
            </p>

            <motion.button
              initial={{
                scale: 0.6,
              }}
              whileTap={{
                scale: 0.5,
                transition: { duration: 0.05 },
              }}
              className="rounded-full bg-yellow-800 text-white font-bold h-fit py-2 px-5 shadow-md shadow-yellow-800 scale-50"
            >
              ORDER NOW
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Menu() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Burger')
  const [menuItems, setMenuItems] = useState(Burgers)

  const handleClick = (e) => {
    if (
      e.target.textContent === 'Burger' ||
      e.target.textContent === 'Sandwich' ||
      e.target.textContent === 'Drinks'
    ) {
      setSelectedMenuItem(e.target.textContent)
    }
  }

  return (
    <section className="menu">
      <div className="container py-10 md:py-16">
        <div className="section-header text-center">
          <h2 className="text-xl text-yellow-900 font-bold mb-2">Our Menu</h2>

          <div className="navigation space-x-2" onClick={handleClick}>
            <NavigationButton
              text="Burger"
              selected={selectedMenuItem}
              onClick={() => setMenuItems(Burgers)}
            />

            <span className="divider">|</span>
            <NavigationButton
              text="Sandwich"
              selected={selectedMenuItem}
              onClick={() => setMenuItems(Sandwiches)}
            />

            <span className="divider">|</span>
            <NavigationButton
              text="Drinks"
              selected={selectedMenuItem}
              onClick={() => setMenuItems(Burgers)}
            />
          </div>
        </div>

        <MenuItems items={menuItems} />
      </div>
    </section>
  )
}
