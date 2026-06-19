export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
}

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay },
  }),
}

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export const slideLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay },
  }),
}

export const slideRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay },
  }),
}

export const pulseVariants = {
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
}

export const glowVariants = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(24, 169, 87, 0.4)',
      '0 0 0 10px rgba(24, 169, 87, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
}
