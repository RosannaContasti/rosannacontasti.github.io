"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import MinimalCursor from "../components/MinimalCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<any>(null);
  const [key, setKey] = useState(0); // Para forzar re-render

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

    // Escuchar cambios personalizados (cuando cambia de idioma)
    const handleLocaleChange = () => {
      loadMessages();
      setKey(prev => prev + 1); // Forzar re-render
    };

    window.addEventListener("localeChange", handleLocaleChange);
    return () => window.removeEventListener("localeChange", handleLocaleChange);
  }, []);

  // Mostrar loading mientras carga
  if (!messages) {
    return (
      <html lang={locale}>
        <body>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            background: 'black',
            color: 'white'
          }}>
            Loading...
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale}>
      <body>
      <MinimalCursor /> 
        <NextIntlClientProvider key={key} locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
