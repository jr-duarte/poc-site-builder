"use client"


import { Button } from "@/@uai/components/core/button/default"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CustomError() {
  const router = useRouter()

  return (
    <section className="container h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
        Oops! Algo deu errado.
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Ocorreu um erro inesperado. Tente novamente mais tarde.
      </p>

      <Button className="mt-6" onClick={() => router.refresh()}>
        Tentar Novamente
      </Button>

      <Link href="/">
        <Button className="mt-6">Voltar para a página inicial</Button>
      </Link>
    </section>
  )
}
