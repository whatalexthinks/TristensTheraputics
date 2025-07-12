import { motion } from "framer-motion";

export default function JungleBorder() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top jungle leaves silhouette - more dramatic */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 opacity-90">
          <svg viewBox="0 0 1920 300" className="w-full h-full">
            {/* Large palm fronds and jungle leaves */}
            <path 
              d="M0,0 L1920,0 L1920,150 Q1800,100 1600,120 Q1400,140 1200,110 Q1000,80 800,130 Q600,180 400,140 Q200,100 0,180 Z" 
              fill="#000"
            />
            {/* Detailed leaf edges */}
            <path 
              d="M0,50 Q100,80 200,60 Q300,40 400,70 Q500,100 600,80 Q700,60 800,90 Q900,120 1000,100 Q1100,80 1200,110 Q1300,140 1400,120 Q1500,100 1600,130 Q1700,160 1800,140 Q1850,130 1920,150 L1920,0 L0,0 Z" 
              fill="#000"
            />
          </svg>
        </div>
      </motion.div>
      
      {/* Bottom jungle leaves silhouette - more dramatic */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      >
        <div className="absolute inset-0 opacity-90">
          <svg viewBox="0 0 1920 300" className="w-full h-full">
            {/* Large palm fronds and jungle leaves */}
            <path 
              d="M0,300 L1920,300 L1920,150 Q1800,200 1600,180 Q1400,160 1200,190 Q1000,220 800,170 Q600,120 400,160 Q200,200 0,120 Z" 
              fill="#000"
            />
            {/* Detailed leaf edges */}
            <path 
              d="M0,250 Q100,220 200,240 Q300,260 400,230 Q500,200 600,220 Q700,240 800,210 Q900,180 1000,200 Q1100,220 1200,190 Q1300,160 1400,180 Q1500,200 1600,170 Q1700,140 1800,160 Q1850,170 1920,150 L1920,300 L0,300 Z" 
              fill="#000"
            />
          </svg>
        </div>
      </motion.div>
      
      {/* Left jungle leaves silhouette - more detailed */}
      <motion.div 
        className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent opacity-70"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
      >
        <div className="absolute inset-0">
          <svg viewBox="0 0 200 1080" className="w-full h-full">
            <path 
              d="M0,0 L200,0 Q150,100 180,200 Q120,300 170,400 Q100,500 160,600 Q90,700 150,800 Q80,900 140,1000 Q70,1080 0,1080 Z" 
              fill="#000"
            />
          </svg>
        </div>
      </motion.div>
      
      {/* Right jungle leaves silhouette - more detailed */}
      <motion.div 
        className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent opacity-70"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
      >
        <div className="absolute inset-0">
          <svg viewBox="0 0 200 1080" className="w-full h-full">
            <path 
              d="M200,0 L0,0 Q50,100 20,200 Q80,300 30,400 Q100,500 40,600 Q110,700 50,800 Q120,900 60,1000 Q130,1080 200,1080 Z" 
              fill="#000"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
