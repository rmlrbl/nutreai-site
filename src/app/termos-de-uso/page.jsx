"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfService() {
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
        <h1 className="text-3xl font-bold text-white mb-8">Termos de Uso</h1>

        <div className="prose prose-invert">
          <p className="text-gray-300 mb-6">
            Última atualização: 02 de Dezembro de 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-300">
              Ao acessar e usar o nutre.ai, você concorda em cumprir estes
              termos de uso. Se você não concordar com qualquer parte destes
              termos, não use nosso serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Descrição do Serviço
            </h2>
            <p className="text-gray-300">
              O nutre.ai é um aplicativo de nutrição que utiliza inteligência
              artificial para criar planos alimentares personalizados. Não
              substituímos a orientação profissional de nutricionistas ou
              médicos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Conta do Usuário
            </h2>
            <p className="text-gray-300 mb-4">Você é responsável por:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Manter a confidencialidade de sua conta</li>
              <li>Fornecer informações precisas</li>
              <li>Atualizar suas informações quando necessário</li>
              <li>Notificar sobre uso não autorizado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Pagamentos e Reembolsos
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Oferecemos garantia de 7 dias</li>
              <li>Reembolso integral dentro do período de garantia</li>
              <li>Renovação automática das assinaturas</li>
              <li>Cancelamento pode ser feito a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Uso Apropriado
            </h2>
            <p className="text-gray-300 mb-4">Você concorda em não:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Violar leis ou regulamentos</li>
              <li>Compartilhar conteúdo ofensivo</li>
              <li>Tentar acessar dados de outros usuários</li>
              <li>Interferir na operação do serviço</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Limitação de Responsabilidade
            </h2>
            <p className="text-gray-300">
              O nutre.ai não se responsabiliza por resultados específicos.
              Consulte profissionais de saúde para orientações médicas ou
              nutricionais personalizadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Modificações dos Termos
            </h2>
            <p className="text-gray-300">
              Reservamos o direito de modificar estes termos a qualquer momento.
              Mudanças significativas serão notificadas aos usuários.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Cancelamento
            </h2>
            <p className="text-gray-300">
              Você pode cancelar sua conta a qualquer momento. Após o
              cancelamento, seus dados serão tratados conforme nossa política de
              privacidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Contato
            </h2>
            <p className="text-gray-300">
              Para dúvidas sobre estes termos:
              <br />
              Email: ajuda@nutre.ai
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
