"use client";

import React from "react";
import { Input } from "@/components/ui/input";

const DateInput = ({ value, onChange, placeholder = "DD/MM/YYYY" }) => {
  const handleDateChange = (e) => {
    let input = e.target.value;

    // Remove todos os caracteres não numéricos
    input = input.replace(/\D/g, "");

    // Validação e formatação de "DD"
    let day = input.slice(0, 2);
    if (day && (parseInt(day) < 1 || parseInt(day) > 31)) {
      // Impede valores de dia fora do intervalo 01-31
      input = input.slice(0, 2);
    }

    // Validação e formatação de "MM"
    let month = input.slice(2, 4);
    if (month && (parseInt(month) < 1 || parseInt(month) > 12)) {
      // Impede valores de mês fora do intervalo 01-12
      input = input.slice(0, 5); // Formato DD/
    }

    // Formatação para impedir o mês começar com "00" (por exemplo, "00")
    if (month && parseInt(month) < 10 && input.length === 3) {
      input = input.slice(0, 3); // Formato DD/0
    }

    // Formatação de "YYYY"
    let year = input.slice(4, 8);
    if (year.length > 4) {
      input = input.slice(0, 8); // Impede que o ano ultrapasse 4 dígitos
    }

    // Limita o número de caracteres a 10 (DD/MM/YYYY)
    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    // Adiciona a formatação "DD/MM/YYYY"
    let formattedInput = "";
    if (input.length > 4) {
      formattedInput = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(
        4
      )}`;
    } else if (input.length > 2) {
      formattedInput = `${input.slice(0, 2)}/${input.slice(2)}`;
    } else {
      formattedInput = input;
    }

    // Atualiza o estado com o valor formatado
    onChange(formattedInput);
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleDateChange}
      placeholder={placeholder}
      maxLength={10}
      className="bg-zinc-800 border-zinc-700"
    />
  );
};

export default DateInput;
