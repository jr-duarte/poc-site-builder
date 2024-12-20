'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot } from '@radix-ui/react-slot'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type SubtitleProps = React.HTMLAttributes<HTMLParagraphElement> &
  Partial<{
    as: 'p' | 'div'
    asChild: boolean
    colorMode: 'main' | 'contrast'
    size: 'small' | 'large'
  }>

export const Subtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>(
  (
    {
      as = 'p',
      asChild = false,
      colorMode = 'main',
      size = 'small',
      className,
      children,
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
          'font-heading-bold',
          'tracking-normal',
          'leading-tight',
          // colorMode
          {
            main: ['text-mono-900'],
            contrast: ['text-white'],
          }[colorMode],
          // size
          {
            small: ['text-xsmall md:text-small'],
            large: ['text-small md:text-medium'],
          }[size],
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

Subtitle.displayName = 'Subtitle'
