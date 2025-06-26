import React from 'react';
import { motion } from 'framer-motion';

const RotatingChain = () => {
  // Array of colors for the chain links and gears
  const colors = ['#8A2BE2', '#FF6347', '#00BFFF']; // Purple, Orange, Sky Blue
  
  return (
    <div style={styles.container}>
      <motion.div
        style={styles.chainWrapper}
        animate={{
          rotate: 360, // Rotating animation for the entire chain
        }}
        transition={{
          repeat: Infinity, // Infinite rotation
          duration: 6, // Time taken for one full rotation
          ease: "linear", // Smooth rotation
        }}
      >
        {colors.map((color, index) => (
          <div key={index} style={styles.linkContainer}>
            {/* Chain link */}
            <motion.div
              style={{
                ...styles.link,
                backgroundColor: color,
              }}
              animate={{
                rotate: 360, // Rotating each link
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
              }}
            />
            {/* Gear */}
            <motion.div
              style={{
                ...styles.gear,
                borderColor: color,
              }}
              animate={{
                rotate: -360, // Opposite rotation for gears for a realistic effect
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
    backgroundColor: 'transparent', // Dark background to highlight the animation
  },
  chainWrapper: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  gear: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '5px solid',
    position: 'relative',
  },
};

export default RotatingChain;
