'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import * as RadixAccordion from '@radix-ui/react-accordion'
import { Icon } from '@uai/components/core/icon'
import { Heading } from '@uai/components/core/typography/heading'
import { Paragraph } from '@uai/components/core/typography/paragraph'
import classNames from '@uai/utils/classNames'
import React from 'react'
import './style.css'

export type AccordionOptionType = {
  title: string
  content: React.ReactNode
}

export type AccordionProps = Omit<
  RadixAccordion.AccordionSingleProps,
  'children' | 'type'
> &
  Partial<{
    colorMode: 'main' | 'contrast'
    options: AccordionOptionType[]
  }>

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ colorMode = 'main', options = [], className, ...props }, ref) => {
    const optionList = options.map((option, id) => ({ id, ...option }))
    return (
      <RadixAccordion.Root
        ref={ref}
        type="single"
        collapsible
        className={classNames([
          // default
          'w-full',
          // custom
          className,
        ])}
        {...props}
      >
        {optionList.map((option) => (
          <RadixAccordion.Item
            key={option.id}
            value={String(option.id)}
            className={classNames([
              // default
              'border-b-thin',
              'py-3',
              // colorMode
              {
                main: 'border-mono-200',
                contrast: 'border-white',
              }[colorMode],
            ])}
          >
            <RadixAccordion.Header>
              <RadixAccordion.Trigger
                className={classNames([
                  // default
                  'w-full',
                  'inline-flex',
                  'justify-between',
                  'items-center',
                  'group',
                  'px-medium',
                  'py-small',
                  'focus:outline-focus-500',
                  'focus:outline-thin',
                  'focus:shadow-focus',
                  'focus:outline',
                ])}
              >
                <Heading as="h2" size="small" colorMode={colorMode}>
                  {option.title}
                </Heading>
                <Icon
                  variant="primary"
                  size="medium"
                  name="MdOutlineChevronRight"
                  colorMode={colorMode}
                  className={classNames([
                    // default
                    'rotate-90',
                    'group-data-[state=open]:-rotate-90 ',
                    'transition-all',
                    'duration-300',
                    'ease-in-out',
                  ])}
                />
              </RadixAccordion.Trigger>
            </RadixAccordion.Header>
            <RadixAccordion.Content
              className={classNames([
                'w-full',
                'overflow-hidden',
                'accordion-animate-down',
                'accordion-animate-up',
              ])}
            >
              <Paragraph
                as="div"
                variant="primary"
                size="medium"
                colorMode={colorMode}
                className={classNames([
                  // default
                  'flex',
                  'flex-col',
                  'gap-2',
                  'p-large',
                ])}
              >
                {option.content}
              </Paragraph>
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        ))}
      </RadixAccordion.Root>
    )
  },
)

Accordion.displayName = 'Accordion'
