"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

const FormularioNutreAi = () => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const alturas = Array.from({ length: 121 }, (_, i) => i + 130);
  const pesos = Array.from({ length: 151 }, (_, i) => i + 40);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-customDark text-white p-6">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2 p-6">
          <h1 className="text-white font-montserrat text-5xl font-bold">
            nutre
            <span className="text-yellow-500 font-montserrat text-5xl font-bold">
              .ai
            </span>
          </h1>
          <h2 className="text-xl">Gerar plano personalizado</h2>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              placeholder="Digite seu nome completo"
              className="bg-zinc-800 border-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              placeholder="WhatsApp para cadastro no Nutre.AI"
              className="bg-zinc-800 border-zinc-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Data de Nascimento</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-zinc-800 border-zinc-700 w-full justify-start text-left font-normal"
                  >
                    {date ? format(date, "dd/MM/yyyy") : "Selecione"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-zinc-800">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    disabled={(date) => date > new Date()}
                    fromYear={1940}
                    toYear={2024}
                    captionLayout="dropdown-buttons"
                    className="bg-zinc-800"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Sexo</Label>
              <Select>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800">
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Altura</Label>
              <Select>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 max-h-[200px]">
                  {alturas.map((altura) => (
                    <SelectItem key={altura} value={altura.toString()}>
                      {altura} cm
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Peso</Label>
              <Select>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 max-h-[200px]">
                  {pesos.map((peso) => (
                    <SelectItem key={peso} value={peso.toString()}>
                      {peso} kg
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Objetivo</Label>
            <Textarea
              placeholder="Qual é o seu objetivo principal? (ex: emagrecimento, ganho de massa muscular, manutenção de peso, melhora da saúde geral, etc.)"
              className="bg-zinc-800 border-zinc-700 min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Nível de Atividade</Label>
            <Textarea
              placeholder="Você pratica exercícios? Com que frequência e intensidade?"
              className="bg-zinc-800 border-zinc-700 min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Preferências Alimentares</Label>
            <Textarea
              placeholder="Tem algum tipo de alimento que você gosta mais ou que não consome? (ex: vegetariano, vegano, sem glúten, etc.)"
              className="bg-zinc-800 border-zinc-700 min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Refeições Diárias</Label>
            <Select>
              <SelectTrigger className="bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800">
                <SelectItem value="2">2 refeições</SelectItem>
                <SelectItem value="3">3 refeições</SelectItem>
                <SelectItem value="4">4 refeições</SelectItem>
                <SelectItem value="5">5 refeições</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Restrições Alimentares ou Alergias</Label>
            <Textarea
              placeholder="Existe algum alimento que você precisa evitar por questões de saúde? (ex: intolerância à lactose, alergia ao glúten, etc.)"
              className="bg-zinc-800 border-zinc-700 min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Histórico de Saúde</Label>
            <Textarea
              placeholder="Tem algum problema de saúde atual ou no passado que devo levar em consideração? (ex: diabetes, hipertensão, colesterol alto, etc.)"
              className="bg-zinc-800 border-zinc-700 min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Ingestão de Suplementos</Label>
            <Textarea
              placeholder="Você utiliza algum tipo de suplemento alimentar? (ex: whey protein, vitaminas, etc.)"
              className="bg-zinc-800 border-zinc-700 min-h-[120px]"
            />
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black">
              Gerar plano
            </Button>
            <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black">
              Baixar plano
            </Button>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Conversar com o Nutre
          </Button>
        </form>

        <p className="text-xs text-gray-400 mt-4">
          *Não gostou de algo no plano alimentar? Fique tranquilo(a), você terá
          um nutre.ai 24h para te ajudar a fazer as devidas alterações.
        </p>
      </div>
    </div>
  );
};

export default FormularioNutreAi;
