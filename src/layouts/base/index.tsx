import '@uai/globals.css'
import React, { ComponentPropsWithoutRef } from "react"

export type LayoutBaseProps = ComponentPropsWithoutRef<"html">

export default function LayoutBase({ children, ...props }: LayoutBaseProps) {
  return (
    <html lang="pt-BR" {...props}>
      <body>{children}</body>
    </html>
  )
}
