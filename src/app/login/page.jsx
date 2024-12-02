"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-customDark text-white md:flex md:items-center md:justify-center p-6">
      <div className="w-full max-w-md md:bg-zinc-900 md:p-8 md:rounded-xl md:shadow-xl mt-6">
        <div className="text-center space-y-2">
          <h1 className="text-white font-montserrat text-4xl font-bold">
            nutre
            <span className="text-yellow-500 font-montserrat text-4xl font-bold">
              .ai
            </span>
          </h1>
          <h2 className="text-xl">Acessar painel</h2>
        </div>

        <form className="space-y-4 mt-8">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              className="bg-zinc-800 border-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              className="bg-zinc-800 border-zinc-700"
            />
          </div>

          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Entrar
          </Button>

          <a
            href="#"
            className="block text-sm text-center text-gray-400 hover:text-white"
          >
            *Esqueci minha senha
          </a>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 text-gray-400 bg-customDark md:bg-zinc-900">
                OU
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 space-x-2"
          >
            <img src="/google.svg" alt="Google logo" className="w-5 h-5" />
            <span>Continue com o Google</span>
          </Button>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              Ainda não é assinante?{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                clique aqui
              </a>{" "}
              para conhecer.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <a href="#" aria-label="Instagram">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
