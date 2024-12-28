// src/utils/checkout.js

// Mapa de normalização de nomes de planos
const PLAN_NAME_MAP = {
  // PT-BR
  "Plano Mensal": "mensal",
  "Plano Trimestral": "trimestral",
  "Plano Anual": "anual",
  // EN-US
  Monthly: "mensal",
  Annually: "anual",
  // Fallbacks diretos
  mensal: "mensal",
  trimestral: "trimestral",
  anual: "anual",
};

// Configuração das URLs base do checkout
export const CHECKOUT_URLS = {
  "pt-BR": {
    mensal: "https://pay.kiwify.com.br/VsOU8qX",
    trimestral: "https://pay.kiwify.com.br/9d2uI4Y",
    anual: "https://pay.kiwify.com.br/YJ90mGx",
  },
  "en-US": {
    mensal: "https://pay.kiwify.com.br/VsOU8qX",
    anual: "https://pay.kiwify.com.br/YJ90mGx",
  },
};

// Parâmetros de rastreamento por plataforma
const TRACKING_PARAMETERS = {
  // Google Ads e Analytics
  google: [
    "gclid", // Google Click ID
    "dclid", // Display Click ID
    "gclsrc", // Google Click Source
    "utm_id", // Campaign ID
    "utm_term", // Palavras-chave pagas
    "_gl", // Google Enhanced Link Attribution
  ],

  // Meta Ads (Facebook/Instagram)
  meta: [
    "fbclid", // Facebook Click ID
    "fb_action_ids", // Facebook Action IDs
    "fb_action_types", // Facebook Action Types
    "fb_source", // Facebook Traffic Source
    "igshid", // Instagram Share ID
  ],

  // TikTok Ads
  tiktok: [
    "ttclid", // TikTok Click ID
    "tt_medium", // TikTok Medium
    "tt_content", // TikTok Content
    "tt_campaign_id", // TikTok Campaign ID
  ],

  // Microsoft Advertising
  microsoft: [
    "msclkid", // Microsoft Click ID
  ],

  // UTM Padrão
  utm: [
    "utm_source", // Fonte do tráfego
    "utm_medium", // Meio de marketing
    "utm_campaign", // Nome da campanha
    "utm_content", // Conteúdo do anúncio
    "utm_term", // Termos da campanha
  ],

  // Outros parâmetros comuns
  other: [
    "ref", // Referência genérica
    "source", // Fonte alternativa
    "medium", // Meio alternativo
    "campaign", // Campanha alternativa
    "referral", // Código de referência
    "affiliate", // ID de afiliado
    "partner", // ID de parceiro
  ],
};

// Analytics e outros parâmetros de rastreamento adicionais
const ANALYTICS_PARAMETERS = [
  "_ga", // Google Analytics Client ID
  "_gac", // Google Analytics Campaign
  "_gid", // Google Analytics Session ID
  "ir-placement", // Parâmetro de localização IR
];

/**
 * Normaliza o nome do plano para o formato usado nas URLs
 * @param {string} planName - Nome do plano como está no objeto plan
 * @returns {string} Nome normalizado do plano
 */
const normalizePlanName = (planName) => {
  const normalized = PLAN_NAME_MAP[planName];
  if (!normalized) {
    console.warn(`Nome do plano não mapeado: ${planName}`);
    // Fallback: converter para lowercase e remover "plano "
    return planName.toLowerCase().replace("plano ", "");
  }
  return normalized;
};

/**
 * Extrai todos os parâmetros de rastreamento da URL
 * @param {URLSearchParams} searchParams - Objeto URLSearchParams do Next.js
 * @returns {Object} Objeto com todos os parâmetros de rastreamento encontrados
 */
export const extractTrackingParams = (searchParams) => {
  const params = {};

  // Função auxiliar para extrair parâmetros
  const extractParams = (paramList) => {
    paramList.forEach((param) => {
      const value = searchParams.get(param);
      if (value) params[param] = value;
    });
  };

  // Extrair parâmetros de cada plataforma
  Object.values(TRACKING_PARAMETERS).forEach((platformParams) => {
    extractParams(platformParams);
  });

  // Extrair parâmetros de analytics
  extractParams(ANALYTICS_PARAMETERS);

  return params;
};

/**
 * Gera um ID de sessão único
 * @returns {string} ID de sessão único
 */
const generateSessionId = () => {
  return "sess_" + Math.random().toString(36).substring(2, 15);
};

/**
 * Adiciona parâmetros personalizados ao objeto de parâmetros
 * @param {Object} params - Objeto de parâmetros existente
 * @param {Object} customParams - Parâmetros personalizados para adicionar
 * @returns {Object} Objeto combinado de parâmetros
 */
export const addCustomParams = (params, customParams = {}) => {
  return {
    ...params,
    ...customParams,
    timestamp: new Date().toISOString(), // Adiciona timestamp para rastreamento
    session_id: generateSessionId(), // Adiciona ID de sessão único
  };
};

/**
 * Constrói a URL completa do checkout com todos os parâmetros
 * @param {Object} options - Opções para construir a URL
 * @param {string} options.language - Idioma atual (pt-BR ou en-US)
 * @param {Object} options.plan - Objeto com informações do plano
 * @param {Object} options.trackingParams - Parâmetros de rastreamento
 * @param {Object} options.customParams - Parâmetros personalizados adicionais
 * @returns {string} URL completa do checkout
 */
export const buildCheckoutUrl = ({
  language,
  plan,
  trackingParams = {},
  customParams = {},
}) => {
  try {
    // Normalizar o nome do plano
    const normalizedPlanName = normalizePlanName(plan.month);

    // Log para debug
    console.log("Plano original:", plan.month);
    console.log("Plano normalizado:", normalizedPlanName);

    // Obter URL base do plano
    const baseUrl = CHECKOUT_URLS[language][normalizedPlanName];
    if (!baseUrl) {
      console.error(
        `URL não encontrada para o plano: ${normalizedPlanName} no idioma: ${language}`
      );
      return null;
    }

    // Combinar todos os parâmetros
    const allParams = addCustomParams(
      {
        plan: normalizedPlanName,
        price: plan.price,
        ...trackingParams,
      },
      customParams
    );

    // Construir URL final
    const params = new URLSearchParams(allParams);
    return `${baseUrl}?${params.toString()}`;
  } catch (error) {
    console.error("Erro ao construir URL do checkout:", error);
    return null;
  }
};

/**
 * Valida uma URL de checkout
 * @param {string} url - URL para validar
 * @returns {boolean} True se a URL é válida
 */
export const isValidCheckoutUrl = (url) => {
  try {
    const urlObj = new URL(url);
    // Validar se a URL base corresponde a uma das URLs de checkout conhecidas
    const isValidBase = Object.values(CHECKOUT_URLS).some((urlGroup) =>
      Object.values(urlGroup).some(
        (checkoutUrl) => urlObj.origin + urlObj.pathname === checkoutUrl
      )
    );
    return isValidBase;
  } catch {
    return false;
  }
};
