export const fadeIn = (direction = 'up', duration = 1) => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: 'easeInOut',
        type: 'spring',
      },
    },
  }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
}

export const shake = {
  initial: {},
  animate: (custom) => ({
    x: [20, 0, 20],
    rotate: [5, 0, 5],
    transition: {
      type: 'linear',
      repeat: Infinity,
      duration: custom,
    },
  }),
}

export const dropSpring = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, type: 'spring' },
  },
}

export const verticalOccilation = {
  initial: {},
  animate: {
    y: [-20, 0, -20],
    // rotate: [2, 0, 2],
    transition: {
      // delay: 0.8,
      duration: 1,
      type: 'spring',
      repeat: Infinity,
    },
  },
}
