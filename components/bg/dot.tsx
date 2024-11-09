import { motion } from 'framer-motion';

interface DotProps {
  className?: string;
}

export default function Dot({ className }: DotProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 150,
          restDelta: 0.001,
        },
      }}
      whileHover={{
        scale: 1.2,
        transition: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 150,
            restDelta: 0.001,
          },
        },
      }}
      whileTap={{
        scale: 1.2,
        transition: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 150,
            restDelta: 0.001,
          },
        },
      }}
    />
  );
}
