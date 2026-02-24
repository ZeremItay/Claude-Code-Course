"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלח הודעה בוואטסאפ"
      className="group fixed bottom-6 left-6 z-50"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "backOut" as const }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        style={{ animation: "pulse-ring 2s ease-out infinite" }}
      />

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)]">
        <MessageCircle className="h-6 w-6" />
      </span>
    </motion.a>
  );
}
