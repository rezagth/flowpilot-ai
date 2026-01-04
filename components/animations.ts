export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export const hoverGlow = {
  rest: { 
    boxShadow: "0 0 0 rgba(59,130,246,0)" 
  },
  hover: { 
    boxShadow: "0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)",
    transition: { duration: 0.3 }
  }
};
