// src/components/pricing/toggle-switch.jsx
"use client";

import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export function ToggleSwitch({ isAnnual, setIsAnnual }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-3">
        <Switch
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
          className="data-[state=checked]:bg-yellow-500"
        />
        <span className="text-white">
          Pay annually and{" "}
          <span className="relative">
            <span className="font-semibold text-yellow-500">
              save up to 38.61%
            </span>
            <Image
              src="/social/brush.svg"
              alt="brush effect"
              width={120}
              height={20}
              className="absolute -bottom-3 left-0 w-full"
            />
          </span>
        </span>
      </div>
    </div>
  );
}
