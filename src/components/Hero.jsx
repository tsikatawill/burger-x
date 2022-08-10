import HeaderBurger from '../images/burger2.png'
import Onion1 from '../images/onion1.png'
import Lettuce1 from '../images/lettuce2.png'
import Onion2 from '../images/onion2.png'
import Tomatoes1 from '../images/tomatoes1.png'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../animationVariants'
import Accoutrement from './Accoutrement'

export default function Hero() {
  return (
    <AnimatePresence>
      <section className="hero">
        <div className="container h-fit sm:h-96 grid sm:grid-cols-2 items-center">
          <div className="text-wrapper text-yellow-900 py-10">
            <div className="text-inner max-w-md mx-auto text-center sm:text-left">
              <motion.h1
                variants={fadeIn('down')}
                initial="initial"
                animate="animate"
                style={{ fontFamily: 'Insanity' }}
                className="text-5xl"
              >
                BACON <pre className="inline font-bold">&</pre> CHEESE WHOOPER{' '}
                <pre className="inline">&reg;</pre> SANDWICH
              </motion.h1>

              <motion.p
                variants={fadeIn()}
                initial="initial"
                animate="animate"
                className="my-5 text-4xl"
                style={{ fontFamily: 'Caveat' }}
              >
                Juicy and superbly tasty
              </motion.p>

              <motion.button
                initial={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.8,
                  transition: { duration: 0.15 },
                }}
                className="rounded-full bg-yellow-800 text-yellow-300 font-bold h-fit py-2 px-5 shadow-md shadow-yellow-800"
              >
                ORDER NOW
              </motion.button>
            </div>
          </div>

          <motion.div
            variants={fadeIn('top', 2)}
            initial="initial"
            animate="animate"
            className="image-wrapper row-start-1 sm:col-start-2 h-full sm:h-fit py-10"
          >
            <div className="relative h-full w-fit mx-auto grid place-content-center">
              <img
                src={HeaderBurger}
                alt="header-burger.jpg"
                className="h-52 sm:w-72 sm:h-auto"
              />
              <motion.div
                className="accouts"
                variants={staggerContainer}
                // initial="initial"
                // animate="animate"
              >
                <Accoutrement
                  img={Lettuce1}
                  className="-top-8 sm:-top-12 -left-16 sm:-left-16"
                  speed={2}
                />

                <Accoutrement
                  img={Lettuce1}
                  className="-bottom-10 sm:-bottom-10 right-0 rotate-45"
                  speed={2.7}
                />

                <Accoutrement
                  img={Tomatoes1}
                  className="top-0 -right-0 sm:-right-5"
                  speed={4}
                />

                <Accoutrement
                  img={Onion2}
                  className="-top-10 sm:-top-16 right-16 sm:right-20"
                  speed={3}
                />
                <Accoutrement
                  img={Onion1}
                  className="top-16 sm:top-20 -right-7 sm:-right-10 rotate-45"
                  speed={2.5}
                />
                <Accoutrement
                  img={Onion2}
                  speed={3.2}
                  className="top-20 sm:top-32 -left-16 sm:-left-24 rotate-45"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  )
}
