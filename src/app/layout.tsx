"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import MinimalCursor from "../components/MinimalCursor";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<any>(null);
  const [key, setKey] = useState(0);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [curtainDone, setCurtainDone] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      const savedLocale = localStorage.getItem("locale") || "en";
      setLocale(savedLocale);

      try {
        const module = await import(`../../messages/${savedLocale}.json`);
        setMessages(module.default);
      } catch (error) {
        console.error("Error loading messages:", error);
        const fallback = await import(`../../messages/en.json`);
        setMessages(fallback.default);
      }
    };

    loadMessages();

    const handleLocaleChange = () => {
      loadMessages();
      setKey(prev => prev + 1);
    };

    window.addEventListener("localeChange", handleLocaleChange);
    return () => window.removeEventListener("localeChange", handleLocaleChange);
  }, []);

  // Cuando los messages cargan, esperar un momento y abrir la cortina
  useEffect(() => {
    if (messages && !curtainOpen) {
      const timer = setTimeout(() => setCurtainOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, [messages, curtainOpen]);

  return (
    <html lang={locale}>
      <body>
        {/* Contenido real (se renderiza debajo de la cortina) */}
        {messages && (
          <>
            <MinimalCursor />
            <NextIntlClientProvider key={key} locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </>
        )}

        {/* Cortina de bienvenida */}
        <AnimatePresence onExitComplete={() => setCurtainDone(true)}>
          {!curtainDone && (
            <div className="fixed inset-0 z-10000 pointer-events-none">
              {/* Contenido central de la cortina (estrella + nombre) */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: curtainOpen ? 0 : 1 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="relative w-12 h-12"
                >
                  <Image src="/star.png" alt="" fill className="object-contain" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-black text-sm font-light tracking-[0.3em] uppercase"
                >
                  LOADING...
                </motion.span>
              </motion.div>

              {/* Mitad izquierda */}
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: curtainOpen ? "-100%" : "0%" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                onAnimationComplete={() => {
                  if (curtainOpen) setCurtainDone(true);
                }}
                className="absolute top-0 left-0 w-1/2 h-full bg-[#fcb9c0]"
              >
                {/* Linea decorativa en el borde */}
                <div className="absolute top-0 right-0 w-px h-full bg-black/10" />
              </motion.div>

              {/* Mitad derecha */}
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: curtainOpen ? "100%" : "0%" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute top-0 right-0 w-1/2 h-full bg-[#fcb9c0]"
              >
                {/* Linea decorativa en el borde */}
                <div className="absolute top-0 left-0 w-px h-full bg-black/10" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
