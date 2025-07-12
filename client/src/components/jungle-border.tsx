import { motion } from "framer-motion";

export default function JungleBorder() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Mist overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      
      {/* Top jungle leaves silhouette */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 opacity-80">
          <svg viewBox="0 0 1920 200" className="w-full h-full">
            <path 
              d="M0,0 L1920,0 L1920,120 Q1600,80 1400,100 Q1200,120 1000,90 Q800,60 600,100 Q400,140 200,110 Q100,95 0,120 Z" 
              fill="#000"
            />
          </svg>
        </div>
      </motion.div>
      
      {/* Bottom jungle leaves silhouette */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      >
        <div className="absolute inset-0 opacity-80">
          <svg viewBox="0 0 1920 200" className="w-full h-full">
            <path 
              d="M0,200 L1920,200 L1920,80 Q1600,120 1400,100 Q1200,80 1000,110 Q800,140 600,100 Q400,60 200,90 Q100,105 0,80 Z" 
              fill="#000"
            />
          </svg>
        </div>
      </motion.div>
      
      {/* Left jungle leaves silhouette */}
      <motion.div 
        className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent opacity-60"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
      />
      
      {/* Right jungle leaves silhouette */}
      <motion.div 
        className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent opacity-60"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
      />
    </div>
  );
}
