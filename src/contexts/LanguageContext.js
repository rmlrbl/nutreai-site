// src/contexts/LanguageContext.js
"use client";

import React, { createContext, useContext, useState } from "react";
import { translations } from "@/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("pt-BR");

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setCurrentLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
