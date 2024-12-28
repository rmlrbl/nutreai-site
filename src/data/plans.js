// src/data/plans.js

export const plans = {
  "pt-BR": {
    mensal: {
      price: "R$ 79,90",
      period: "/mês",
      month: "Plano Mensal",
      discount: "Sem desconto especial",
      features: [
        "Plano alimentar personalizado",
        "Contador de calorias",
        "Contador de macronutrientes",
        "Relatório mensal",
        "Suporte por Whatsapp",
        "Cancele quando quiser",
        "Cobrado Mensalmente",
      ],
    },
    trimestral: {
      price: "R$ 49,90",
      //period: "/mês",
      month: "Plano Trimestral",
      discount: "Com desconto especial",
      installments: "3x",
      features: [
        "Plano alimentar personalizado",
        "Contador de calorias",
        "Contador de macronutrientes",
        "Relatório mensal",
        "Suporte por Whatsapp",
        "Cancele quando quiser",
        "Renovação automática trimestral",
        "Desconto de 40%",
      ],
    },
    anual: {
      price: "R$ 29,90",
      //period: "/mês",
      month: "Plano Anual",
      discount: "Com desconto especial",
      installments: "12x",
      features: [
        "Plano alimentar personalizado",
        "Contador de calorias",
        "Contador de macronutrientes",
        "Relatório mensal",
        "Suporte por Whatsapp",
        "Cancele quando quiser",
        "Renovação automática anual",
        "Desconto de 60% no plano anual",
      ],
    },
  },
  "en-US": {
    mensal: {
      price: "$ 12.95",
      period: "/mo",
      month: "Monthly",
      discount: "No special discount",
      features: [
        "Personalized meal plan",
        "Calorie tracker",
        "Macronutrient tracker",
        "Monthly report",
        "Cancel anytime",
        "Automatic monthly renewal",
      ],
    },

    anual: {
      price: "$ 7,95",
      period: "/mo",
      month: "Annually",
      discount: "With special discount",
      //installments: "12x",
      features: [
        "Personalized meal plan",
        "Calorie tracker",
        "Macronutrient tracker",
        "Monthly report",
        "Cancel anytime",
        "Automatic annual renewal",
        "38,61% annual plan discount",
      ],
    },
  },
};
