import React, { useState } from 'react'
import { motion } from 'framer-motion'
import NavigationButton from './NavigationButton'
import {
  FaCalendarAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaRegClock,
} from 'react-icons/fa'

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState('Tema')
  const maps = [
    {
      location: 'Tema',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127046.1539157831!2d-0.0586825151956617!3d5.685324651951139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102078a5400d3e29%3A0xccdf4b5d4026488b!2sTema!5e0!3m2!1sen!2sgh!4v1660140800715!5m2!1sen!2sgh',
    },
    {
      location: 'Kasoa',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31770.16987853918!2d-0.4368015000000098!3d5.526717800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbaedda8d54f7%3A0xd48e16c6c340829a!2sKasoa!5e0!3m2!1sen!2sgh!4v1660140974610!5m2!1sen!2sgh',
    },
    {
      location: 'Circle',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63535.71012243477!2d-0.2814770687500262!3d5.569695699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99e34a453019%3A0xef3607e9a96eff13!2sKwame%20Nkrumah%20Circle!5e0!3m2!1sen!2sgh!4v1660140921554!5m2!1sen!2sgh',
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
                <div className="grid sm:grid-cols-2 gap-10">
                  <motion.div
                    className="map bg-slate-300"
                    initial={{ x: 100, opacity: 0, scale: 0.5 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.25, ease: 'easeOut' },
                    }}
                    viewport={{ once: true }}
                  >
                    <iframe
                      key={idx}
                      src={map.src}
                      title={map.location}
                      loading="lazy"
                      className="h-56 sm:h-64 lg:h-72 w-full rounded-md"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                  <div className="location-details text-center sm:text-left">
                    <h3 className="text-yellow-900 font-semibold">
                      Join us at {selectedLocation} today, 123 Street, 45 Av
                    </h3>
                    <p>We serve the best lorem to our most loyal ipsums</p>
                    <p className="flex mt-4 items-center gap-2 justify-center sm:justify-start">
                      <FaCalendarAlt /> Monday - Saturday
                    </p>
                    <p className="flex items-center gap-2 justify-center sm:justify-start my-2">
                      <FaRegClock /> 7am - 11pm
                    </p>
                    <p className="flex items-center gap-2 justify-center sm:justify-start my-2">
                      <FaPhoneAlt /> +123456789
                    </p>
                    <p className="flex items-center gap-2 justify-center sm:justify-start">
                      <FaEnvelope /> fake@email.com
                    </p>
                  </div>
                </div>
              )
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
