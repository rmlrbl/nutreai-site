// src/app/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { VideoLoop } from "@/components/video-loop";
import { VideoProvider } from "@/contexts/VideoContext";
import { TikTokCarousel } from "@/components/tiktok-carousel";
import { Footer } from "@/components/footer";
import { LanguageSelector } from "@/components/language-selector";
import { VerticalVideoLoop } from "@/components/vertical-video-loop";
import { PlansSection } from "@/components/pricing/plans-section";
import { plans } from "@/data/plans";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LandingPage() {
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState("trimestral");

  const scrollToSection = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-customDark1 text-white">
      {/* Hero Section */}
      <section className="bg-customDark1">
        <div className="min-h-screen lg:h-screen flex flex-col">
          <LanguageSelector />

          <div className="flex-1 mx-7 flex items-center">
            <div className="w-full max-w-7xl mx-auto lg:py-0">
              <div className="lg:grid grid-cols-2 gap-8 items-center">
                {/* Coluna de Texto */}
                <div>
                  <h1 className="text-4xl font-bold text-center mb-[50px] lg:hidden">
                    nutre<span className="text-yellow-500">.ai</span>
                  </h1>

                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                      <h2 className="text-4xl font-bold lg:text-7xl">
                        {t("heroTitle")}
                        <br />
                        {t("heroTitleMiddle")}
                        <span className="text-yellow-500">
                          {t("heroTitleSuffix")}
                        </span>
                      </h2>
                      <p className="text-gray-300 lg:text-2xl">
                        {t("heroSubtitle")}
                      </p>
                      <div className="flex space-x-4 justify-center lg:justify-start">
                        <Button
                          className="text-black font-semibold rounded-[40px] bg-yellow-400 hover:bg-yellow-500 shadow-[0_0_10px_0_rgba(255,215,0,1)] flex justify-center items-center px-[43px] pt-[9px] pb-[11px]"
                          onClick={() => scrollToSection("planos")}
                        >
                          {t("buttonContract")}
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-[40px] border border-white bg-transparent flex justify-center items-center px-[31px] pt-[9px] pb-[11px]"
                          onClick={() => scrollToSection("features")}
                        >
                          {t("buttonLearnMore")}
                        </Button>
                      </div>
                    </div>
                    {/* Redes Sociais - Mobile */}
                    <div className="lg:hidden flex flex-col gap-4">
                      <p className="text-white text-center text-[14px] font-light leading-normal">
                        {t("socialHighlightOne")}
                        <br />
                        {t("socialHighlightTwo")}
                      </p>
                      <div className="flex space-x-2.5 justify-center">
                        <Image
                          src="/social/instagram.svg"
                          alt="logo instagram"
                          width={24}
                          height={24}
                          className="inline-block"
                        />
                        <Image
                          src="/social/facebook.svg"
                          alt="logo facebook"
                          width={24}
                          height={24}
                          className="inline-block"
                        />
                        <Image
                          src="/social/tiktok.svg"
                          alt="logo tiktok"
                          width={24}
                          height={24}
                          className="inline-block w-[21px] h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna do Vídeo */}
                <div className="flex items-center justify-center lg:h-[calc(100vh-200px)]">
                  <div className="w-full aspect-[9/16] lg:max-h-full lg:h-full">
                    <VerticalVideoLoop />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Video */}
      <VideoProvider>
        <section className="min-h-screen flex flex-col">
          {/* Seção Clara */}
          <div className="flex-1 bg-white flex items-center">
            <div className="container mx-auto px-6 lg:px-[150px] py-[50px]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
                {/* Texto */}
                <div className="lg:flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-customDark1 text-center">
                    {t("featureTitle1")}
                  </h3>
                  <p className="text-customDark1 text-lg font-normal text-center">
                    {t("featureDesc1")}
                    <br />
                    {t("featureDesc1Extra")}
                  </p>
                </div>
                {/* Vídeo */}
                <div className="lg:flex-1 flex justify-center my-10 lg:my-0">
                  <div className="rounded-3xl overflow-hidden bg-customDark1 w-[321px] h-[321px]">
                    <VideoLoop
                      src="/videos/plano-alimentar.mp4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Seção Escura */}
          <div className="flex-1 bg-customDark1 flex items-center">
            <div className="container mx-auto px-6 lg:px-[150px] py-[50px]">
              <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-20">
                {/* Texto */}
                <div className="lg:flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-white text-center">
                    {t("featureTitle2")}
                  </h3>
                  <p className="text-white text-lg font-normal text-center">
                    {t("featureDesc2")}
                  </p>
                </div>
                {/* Vídeo */}
                <div className="lg:flex-1 flex justify-center my-10 lg:my-0">
                  <div className="rounded-3xl overflow-hidden bg-white w-[321px] h-[321px]">
                    <VideoLoop
                      src="/videos/descreva-refeicao.mp4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </VideoProvider>

      {/* TikTok Videos Section */}
      <section className="min-h-screen bg-white flex items-center relative">
        <div
          className="absolute w-full bg-[#F7F7F7]"
          style={{ height: "calc(100% - 200px)" }}
        ></div>
        <div className="container mx-auto px-6 lg:px-[150px] py-10 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-20">
            {/* Coluna Esquerda - Estrelas e Título */}
            <div className="flex flex-col items-center lg:flex-1 lg:items-start">
              <div className="flex text-yellow-500 rounded-[40px] border border-[#007F00] bg-[rgba(32,177,32,0.80)] w-[240px] h-[46px] flex-shrink-0 justify-center items-center space-x-3">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/social/star.svg"
                    alt="Star"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
              <h3 className="text-4xl font-bold text-customDark1 text-center pt-10 lg:max-w-xl lg:text-left">
                {t("routineTitle")}
              </h3>
            </div>

            {/* Coluna Direita - Carrossel */}
            <div className="py-6 lg:py-0 lg:flex-1">
              <TikTokCarousel
                videos={[
                  { src: "/videos/tiktok1.mp4" },
                  { src: "/videos/tiktok2.mp4" },
                  { src: "/videos/tiktok3.mp4" },
                  { src: "/videos/tiktok4.mp4" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="min-h-screen">
        <div className="px-6 py-12 bg-customDark1">
          <h3 className="text-4xl font-bold text-center mb-5">
            {t("plansTitle")}
          </h3>
          <PlansSection
            plans={plans}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        </div>
      </section>

      {/* Garantia */}
      <section className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-10 lg:h-screen">
          <div className="h-full lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Coluna Esquerda - Título, Subtítulo e Imagem */}
            <div className="text-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:space-y-8">
              <div className="space-y-6">
                <p className="text-customDark1 font-semibold text-2xl lg:text-4xl">
                  {t("warrantyTitle")}
                </p>
                <p className="text-lg py-6 lg:py-0 text-customDark1 font-medium">
                  {t("warrantySubtitle")}
                </p>
              </div>
              <div className="flex justify-center py-8 lg:py-0">
                <Image
                  src="/social/garantia.png"
                  alt="Selo de Garantia"
                  width={248}
                  height={248}
                  className="lg:w-[350px] lg:h-[350px]"
                />
              </div>
            </div>

            {/* Coluna Direita - Texto Detalhado */}
            <div className="text-customDark1 text-base font-medium lg:flex lg:items-center">
              <div className="lg:max-w-xl bg-[#F7F7F7] rounded-2xl p-6">
                <p className="py-2 text-justify">{t("warrantyText1")}</p>
                <p className="py-2 text-justify">{t("warrantyText2")}</p>
                <p className="py-2 text-justify">{t("warrantyText3")}</p>
                <p className="py-2 text-justify">{t("warrantyText4")}</p>
                <p className="py-2 text-justify">{t("warrantyText5")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="features" className="px-6 py-12 bg-white">
        <h3 className="text-4xl font-bold text-center mb-12 text-customDark1">
          {t("faqTitle")}
        </h3>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion1")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer1")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion2")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer2")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion3")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer3")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion4")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer4")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion5")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer5")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion6")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer6")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion7")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer7")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion8")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer8")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-9"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion9")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer9")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion10")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer10")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-11"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion11")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer11")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-12"
              className="border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium text-customDark1 hover:no-underline">
                {t("faqQuestion12")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {t("faqAnswer12")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white px-6 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-customDark1">
            {t("newsletterTitle")}
          </h3>

          <p className="text-base text-gray-600">{t("newsletterSubtitle")}</p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("newsletterPlaceholder")}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-500"
            />
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
              {t("newsletterButton")}
            </button>
          </form>

          <p className="text-sm text-gray-500">{t("newsletterDisclaimer")}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
