// src/components/testimonials-carousel.jsx
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Lorena S.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "A melhor coisa que fiz para finalmente perder o buxinho foi aprender a contar calorias. A segunda melhor foi sem dúvidas escolher esse app, salvou minha vida demaisss💗",
  },
  {
    id: 2,
    name: "João P.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "Incrível como um simples contato no whatsapp facilita (e muito) minha dieta. As respostas são rápidas e as sugestões são sempre adequadas aos meus objetivos de ganho de massa💪",
  },
  {
    id: 3,
    name: "Ana L.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "Minha nutre me indicou esse app para acompanhar meu planejamento alimentar. Já tentei usar outros app e nunca vi algo tão prático e preciso quanto esse. Estou simplesmente amando😍",
  },
  {
    id: 4,
    name: "Carlos M.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "App fantástico para quem gosta tanto de perfomance quanto eu 🚀🚀🚀 Além de me ajudar com a contagem dos macros e caloriais que meu coach estipulou, me dá recomendações incríveis de 'besteirinhas' para comer sem sair do foco!",
  },
  {
    id: 5,
    name: "Beatriz O.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "Moçada, to CHOCADA! 😱 Depois do parto tava super insegura com meu corpo, mas com 3 meses usando o nutre.ai já perdi 8kg! O melhor é que consigo manter a amamentação numa boa. Super indico pras mamães de primeira viagem ❤️",
  },

  {
    id: 6,
    name: "Fátima R.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "Tô adorando, viu! Depois dos 50 achei que seria impossível emagrecer, mas o app me ajudou a entender direitinho as porções. Já perdi 5kg sem passar fome e continuo tomando meu cafezinho com pão de queijo 😊",
  },
  {
    id: 7,
    name: "Lucas G.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "Mano, que app SINISTRO! 🎯 Tava perdidão tentando ganhar massa, mas com as dicas de substituição que ele dá, consigo bater as calorias mesmo morando em rep! Até aprendi umas receitas top pro pré-treino",
  },
  {
    id: 8,
    name: "Juliana M.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "Trabalho em escala 12/36 e sempre foi um perrengue manter a dieta organizada. O nutre.ai me ajudou MUITO com o planejamento, principalmente nos plantões noturnos. Perdi 6kg em 2 meses! 🏥💪",
  },

  {
    id: 9,
    name: "Mariana P.",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    text: "Que maravilha é essa?! 👗 Tenho casamento marcado pra dezembro e esse app está me salvando! O melhor é que consigo comer uns docinhos, que é o meu fraco, sem sair da dieta 😍",
  },
];

export function TestimonialsCarousel() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 mb-4">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-4 pt-4 pb-8 md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-customDark1">
                      {testimonial.name}
                    </h4>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 flex-grow">{testimonial.text}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static translate-y-0 bg-white border-none shadow-lg hover:bg-zinc-100 text-customDark1" />
          <CarouselNext className="static translate-y-0 bg-white border-none shadow-lg hover:bg-zinc-100 text-customDark1" />
        </div>
      </Carousel>
    </div>
  );
}

export default TestimonialsCarousel;
