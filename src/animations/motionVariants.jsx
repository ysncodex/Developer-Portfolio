export const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3
    }
  },
  exit: {
    y: 60,
    opacity: 0
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

export const scaleIn = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.25
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0
  }
};