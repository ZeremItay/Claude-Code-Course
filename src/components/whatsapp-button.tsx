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
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#20bd5a]"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "backOut" as const }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  );
}
