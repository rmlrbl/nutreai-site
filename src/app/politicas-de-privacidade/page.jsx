"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-customDark1">
      {/* Header */}
      <div className="px-6 py-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            nutre<span className="text-yellow-500">.ai</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-invert">
          <p className="text-gray-300 mb-6">
            Última atualização: 02 de Dezembro de 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introdução
            </h2>
            <p className="text-gray-300">
              A nutre.ai está comprometida em proteger sua privacidade. Esta
              política descreve como coletamos, usamos e protegemos suas
              informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Informações que Coletamos
            </h2>
            <p className="text-gray-300 mb-4">
              Coletamos as seguintes informações:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Informações de perfil (nome, e-mail, telefone)</li>
              <li>Dados físicos (altura, peso, idade)</li>
              <li>Objetivos e preferências alimentares</li>
              <li>Histórico de saúde relevante</li>
              <li>Dados de uso do aplicativo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Como Usamos suas Informações
            </h2>
            <p className="text-gray-300 mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Personalizar seu plano alimentar</li>
              <li>Melhorar nossos serviços</li>
              <li>Enviar atualizações importantes</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Processar pagamentos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Compartilhamento de Dados
            </h2>
            <p className="text-gray-300">
              Não vendemos suas informações pessoais. Compartilhamos dados
              apenas com:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Processadores de pagamento seguros</li>
              <li>Prestadores de serviço essenciais</li>
              <li>Quando exigido por lei</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Seus Direitos
            </h2>
            <p className="text-gray-300">Você tem direito a:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Acessar seus dados</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar exclusão de dados</li>
              <li>Revogar consentimento</li>
              <li>Exportar seus dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Segurança
            </h2>
            <p className="text-gray-300">
              Implementamos medidas de segurança técnicas e organizacionais para
              proteger seus dados, incluindo criptografia, backups regulares e
              controles de acesso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Contato
            </h2>
            <p className="text-gray-300">
              Para questões sobre privacidade:
              <br />
              Email: ajuda@nutre.ai
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
