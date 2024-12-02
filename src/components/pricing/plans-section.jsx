// src/components/pricing/plans-section.jsx
"use client";

import { plans } from "@/data/plans";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PlanCard } from "./plan-card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ToggleSwitch } from "./toggle-switch";

export function PlansSection({ selectedPlan, setSelectedPlan }) {
  const { currentLanguage } = useLanguage();
  const currentPlans = plans[currentLanguage];
  const [isAnnual, setIsAnnual] = useState(false);

  // Renderiza o seletor PT-BR
  const renderPtBrSelector = () => (
    <TabsList className="flex justify-center items-center gap-4 bg-transparent w-full">
      {Object.keys(currentPlans).map((plan) => (
        <TabsTrigger
          key={plan}
          value={plan}
          className={cn(
            "rounded-2xl transition-all duration-200 w-[110px]",
            "border border-yellow-400 text-white data-[state=inactive]:bg-transparent",
            "data-[state=active]:bg-yellow-400 data-[state=active]:text-black data-[state=active]:border-yellow-400"
          )}
        >
          {plan.charAt(0).toUpperCase() + plan.slice(1)}
        </TabsTrigger>
      ))}
    </TabsList>
  );

  // Renderiza o seletor EN-US
  const renderEnUsSelector = () => (
    <div className="py-4">
      <ToggleSwitch isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
    </div>
  );

  return (
    <div className="flex justify-center py-6 md:p-4">
      {currentLanguage === "pt-BR" ? (
        <Tabs
          defaultValue="trimestral"
          className="w-full"
          onValueChange={setSelectedPlan}
        >
          <div>{renderPtBrSelector()}</div>

          {Object.entries(currentPlans).map(([key, plan]) => (
            <TabsContent key={key} value={key}>
              <PlanCard plan={plan} />
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="w-full">
          {renderEnUsSelector()}
          <div className="mt-6">
            <PlanCard
              plan={isAnnual ? currentPlans.anual : currentPlans.mensal}
            />
          </div>
        </div>
      )}
    </div>
  );
}
