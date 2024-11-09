import { motion } from 'framer-motion';

import { CSSProperties } from 'react';

interface DotProps {
  className?: string;
  delay?: number;
  style?: CSSProperties; // Aggiungi questa riga per accettare una prop style
}

export default function DotUp({ className, delay = 0, style }: DotProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ y: "100vh" }}
      animate={{ y: "-150vh" }}
      transition={{
        y: { duration: 5, repeat: Infinity, repeatType: 'loop', delay },
      }}
    />
  );
}

