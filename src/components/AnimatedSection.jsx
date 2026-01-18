import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { staggerContainer } from '../animations/motionVariants';

const AnimatedSection = ({ children, className, threshold = 0.2 }) => {
  const { ref, controls } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  threshold: PropTypes.number
};

export default AnimatedSection;