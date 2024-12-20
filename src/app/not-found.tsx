import { Button } from "@/@uai/components/core/button/default"
import Link from "next/link"

export default function Custom404() {
  return (
    <section className="container h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Oops! A página que você está procurando não foi encontrada.
      </p>
      <Link href="/">
        <Button className="mt-6">Voltar para a página inicial</Button>
      </Link>
    </section>
  )
}
