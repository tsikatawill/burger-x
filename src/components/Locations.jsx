import React, { useState } from 'react'
import { motion } from 'framer-motion'
import NavigationButton from './NavigationButton'

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState('Tema')
  const maps = [
    {
      location: 'Tema',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.597323833828!2d-0.2762953515404934!3d5.626308295901302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98c25ce18e1d%3A0xa488794859304f7!2sPentecost%20University!5e0!3m2!1sen!2sgh!4v1658745265782!5m2!1sen!2sgh',
    },
    {
      location: 'Kasoa',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.597323833828!2d-0.2762953515404934!3d5.626308295901302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98c25ce18e1d%3A0xa488794859304f7!2sPentecost%20University!5e0!3m2!1sen!2sgh!4v1658745265782!5m2!1sen!2sgh',
    },
    {
      location: 'Circle',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.597323833828!2d-0.2762953515404934!3d5.626308295901302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98c25ce18e1d%3A0xa488794859304f7!2sPentecost%20University!5e0!3m2!1sen!2sgh!4v1658745265782!5m2!1sen!2sgh',
    },
  ]

  const handleClick = (e) => {
    if (
      e.target.textContent === 'Tema' ||
      e.target.textContent === 'Circle' ||
      e.target.textContent === 'Accra'
    ) {
      setSelectedLocation(e.target.textContent)
    }
  }

  return (
    <section className="locations" id="locations">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container py-10 md:py-16"
      >
        <div className="section-header text-center">
          <h2 className="text-xl text-yellow-900 font-bold mb-2">Locations</h2>

          <div className="navigation space-x-2" onClick={handleClick}>
            <NavigationButton
              text="Tema"
              selected={selectedLocation}
              onClick={() => setSelectedLocation('Tema')}
            />

            <span className="divider">|</span>
            <NavigationButton
              text="Circle"
              selected={selectedLocation}
              onClick={() => setSelectedLocation('Circle')}
            />

            <span className="divider">|</span>
            <NavigationButton
              text="Kasoa"
              selected={selectedLocation}
              onClick={() => setSelectedLocation('Kasoa')}
            />
          </div>
        </div>

        <div className="maps mt-10">
          {maps.map((map, idx) => {
            return (
              map.location === selectedLocation && (
                <motion.iframe
                  initial={{ x: 100, opacity: 0, scale: 0.5 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.25, ease: 'easeOut' },
                  }}
                  viewport={{ once: true }}
                  key={idx}
                  src={map.src}
                  title={map.location}
                  loading="lazy"
                  className="h-56 w-full rounded-md"
                  referrerPolicy="no-referrer-when-downgrade"
                ></motion.iframe>
              )
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
