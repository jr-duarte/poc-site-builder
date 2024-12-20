/* eslint-disable @next/next/no-img-element */
import { Button, ButtonProps } from "@/@uai/components/core/button/default"
import { Heading } from "@/@uai/components/core/typography/heading"
import { Paragraph } from "@/@uai/components/core/typography/paragraph"
import classNames from "@/@uai/utils/classNames"
import type { Config } from "@measured/puck"
import React from "react"

type Props = {
  // HeadingBlock: { title: string }
  // Button: ButtonProps
  Image: { imgDesk: string; imgMobile: string; alt: string }
  Cards: {
    title: string
    items: { image: string; title: string; description: string }[]
  }
  Iframe: {
    title: string
    src: string
  }
}

export const config: Config<Props> = {
  categories: {
    // typography: {
    //   components: ["HeadingBlock"],
    // },
    // button: {
    //   components: ["Button"],
    // },
    Seções: {
      components: ["Image", "Cards", "Iframe"],
    },
  },
  components: {
    // HeadingBlock: {
    //   fields: {
    //     title: { type: "text" },
    //   },
    //   defaultProps: {
    //     title: "Heading",
    //   },
    //   render: ({ title }) => (
    //     <div style={{ padding: 64 }}>
    //       <h1>{title}</h1>
    //     </div>
    //   ),
    // },
    // Button: {
    //   fields: {
    //     children: { label: "Texto", type: "text" },
    //     variant: {
    //       label: "Estilo",
    //       type: "select",
    //       options: [
    //         { label: "ghost", value: "ghost" },
    //         { label: "secondary", value: "secondary" },
    //         { label: "primary", value: "primary" },
    //       ],
    //     },
    //   },
    //   defaultProps: {
    //     children: "Button",
    //     variant: "primary",
    //   },
    //   render: ({ children, ...props }: ButtonProps) => (
    //     <Button
    //       {...props}
    //       className={classNames([
    //         "w-[310px]",
    //         "font-heading-bold",
    //         "text-[1.5rem]",
    //         "fixed",
    //         "bottom-8",
    //         "left-[50%]",
    //         "translate-x-[-50%]",
    //         "shadow-2xl",
    //         "z-[99999999]",
    //       ])}
    //     >
    //       {children}
    //     </Button>
    //   ),
    // },
    Image: {
      label: "Seção de Imagem",
      fields: {
        imgDesk: { type: "text" },
        imgMobile: { type: "text" },
        alt: { type: "text" },
      },
      defaultProps: {
        imgDesk:
          "https://hnk-my-promo-production.s3.us-east-1.amazonaws.com/website/DD1FBD226D5624D70ABE-HERO-DESK.PNG",
        imgMobile:
          "https://hnk-my-promo-production.s3.us-east-1.amazonaws.com/website/62E64652D9CAFC5FB48A-HERO-MOBILE.PNG",
        alt: "Rock in Rio",
      },
      render: ({ imgDesk, imgMobile, alt }) => (
        <section>
          <img
            className="w-full h-full hidden md:block"
            src={imgDesk}
            alt={alt}
          />

          <img
            className="w-full h-full block md:hidden"
            src={imgMobile}
            alt={alt}
          />
        </section>
      ),
    },
    Cards: {
      label: "Seção de Cards",
      fields: {
        title: { type: "text" },
        items: {
          type: "array",
          arrayFields: {
            image: { type: "text" },
            title: { type: "text" },
            description: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Prêmios",
        items: [
          {
            image:
              "https://hnk-my-promo-production.s3.us-east-1.amazonaws.com/website/67CA32BC08D208985D6A-CHOPEIRA---VITROLA--2-.PNG",
            title: "Prêmio semanal",
            description:
              "05 (cinco) vitrolas personalizadas e 04 (quatro) chopeiras Heineken.",
          },
          {
            image:
              "https://hnk-my-promo-production.s3.us-east-1.amazonaws.com/website/417394553D51EFEABACE-LOGO.PNG",
            title: "Prêmio Final",
            description:
              "40 (quarenta) pares de ingressos gramado e pacote de viagem.",
          },
        ],
      },
      render: ({ title, items }) => (
        <section className="container pt-6 pb-6">
          <Heading as="h3" className="mb-9">
            {title}
          </Heading>
          <div className="flex flex-col gap-4 lg:flex-row">
            {items &&
              items.length &&
              React.Children.toArray(
                items.map((items) => (
                  <div>
                    <img
                      src={items.image}
                      alt="imagem"
                      className="object-contain"
                    />

                    <div className="px-4 py-6">
                      <Heading
                        size="small"
                        as="h3"
                        className={classNames([
                          "mb-2",
                          "text-ellipsis",
                          "line-clamp-2",
                          "overflow-hidden",
                          "text-center",
                        ])}
                      >
                        {items.title}
                      </Heading>
                      <Paragraph
                        size="large"
                        className={classNames([
                          "text-ellipsis",
                          "line-clamp-4",
                          "overflow-hidden",
                          "text-center",
                        ])}
                      >
                        {items.description}
                      </Paragraph>
                    </div>
                  </div>
                )),
              )}
          </div>
        </section>
      ),
    },
    Iframe: {
      label: "Seção de Iframe",
      fields: {
        title: { type: "text" },
        src: { type: "text" },
      },
      defaultProps: {
        title: "Onde Comprar",
        src: "https://heineken.pertinhodemim.com/",
      },
      render: ({ title, src }) => (
        <section className="container pt-6 pb-6">
          <Heading as="h3" className="mb-9">
            {title}
          </Heading>

          <iframe
            title="gofind"
            loading="lazy"
            id="gofind-iframe"
            src={src}
            width="100%"
            height="644px"
            allow="geolocation"
            className="border-none"
          />
        </section>
      ),
    },
  },
}

export default config
