// src/components/pricing/plan-card.jsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function PlanCard({ plan }) {
  const { t } = useLanguage();
  return (
    <div className="flex justify-center pt-6 size-full">
      <div className="w-full lg:w-[360px] rounded-[16px] bg-[#F7F7F7] shadow-[0px_4px_12px_1px_rgba(255,255,255,0.25)] space-y-10 py-10">
        <div className="text-center">
          <div className="text-4xl text-customDark1">{plan.month}</div>
          <div className="text-sm text-customDark1 mt-2">{plan.discount}</div>
          <div className="text-4xl font-bold mt-2 text-customDark1">
            {plan.installments && (
              <span className="text-lg">{plan.installments} </span>
            )}
            {plan.price}
            <span className="text-sm text-customDark1">{plan.period}</span>
          </div>
        </div>

        <div>
          <ul className="space-y-4 text-customDark1">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center text-lg ml-5">
                <Image
                  src="/social/check-mark.svg"
                  alt="Emoji Check Mark"
                  width={28}
                  height={28}
                  className="h-4 w-4 mr-2 inline-block"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <Button className="text-xl font-semibold text-customDark1 rounded-[29px] border border-black/40 bg-[#facc15] shadow-[0px_4px_6px_1px_rgba(0,0,0,0.25)] w-[240px] h-[50px] flex-shrink-0">
            {t("PlansCardCta")}
          </Button>
        </div>
      </div>
    </div>
  );
}
