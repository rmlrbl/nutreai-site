// src/components/language-selector.jsx
"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSelector() {
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const buttonStyle =
    "w-20 h-6 text-xs flex items-center justify-center rounded-2xl transition-all duration-200 font-semibold";
  const selectedStyle = "bg-yellow-400 text-black font-semibold";
  const unselectedStyle =
    "border border-yellow-400 text-white hover:bg-yellow-400/10";

  return (
    <div className="w-full flex justify-center space-x-2 px-5 py-[30px] md:p-4">
      <button
        onClick={() => setCurrentLanguage("pt-BR")}
        className={cn(
          buttonStyle,
          currentLanguage === "pt-BR" ? selectedStyle : unselectedStyle
        )}
      >
        <span className="mr-1.5">
          <Image
            src="/flags/br.png"
            alt="Bandeira do Brasil"
            width={14}
            height={14}
            className="inline-block"
          />
        </span>
        pt-BR
      </button>
      <button
        onClick={() => setCurrentLanguage("en-US")}
        className={cn(
          buttonStyle,
          currentLanguage === "en-US" ? selectedStyle : unselectedStyle
        )}
      >
        <span className="mr-1.5">
          <Image
            src="/flags/us.png"
            alt="Bandeira dos EUA"
            width={14}
            height={14}
            className="inline-block"
          />
        </span>
        en-US
      </button>
    </div>
  );
}
