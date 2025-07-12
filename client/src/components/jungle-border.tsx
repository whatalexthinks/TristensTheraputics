import { motion } from "framer-motion";

export default function JungleBorder() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Light jungle atmosphere - no heavy overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent"></div>
    </div>
  );
}
