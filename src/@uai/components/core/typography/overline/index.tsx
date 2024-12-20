'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot } from '@radix-ui/react-slot'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type OverlineProps = React.HTMLAttributes<HTMLParagraphElement> &
  Partial<{
    as: 'p' | 'div'
    asChild: boolean
    colorMode: 'main' | 'contrast'
    disabled: boolean
  }>

export const Overline = React.forwardRef<HTMLParagraphElement, OverlineProps>(
  (
    {
      as = 'p',
      asChild = false,
      colorMode = 'main',
      className,
      children,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : as

    return (
      <Component
        ref={ref}
        className={classNames([
          // default
          'font-body-bold',
          'tracking-xloose',
          'leading-xtight',
          'text-nano',
          // colorMode
          {
            main: ['text-mono-900'],
            contrast: ['text-white'],
          }[colorMode],
          // disabled
          {
            'text-mono-400': !!disabled,
          },
          // custom
          className,
        ])}
        {...props}
        {...(typeof children === 'string'
          ? {
              dangerouslySetInnerHTML: {
                __html: children,
              },
            }
          : {
              children,
            })}
      />
    )
  },
)

Overline.displayName = 'Overline'
