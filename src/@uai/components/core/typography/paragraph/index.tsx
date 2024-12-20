'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot } from '@radix-ui/react-slot'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> &
  Partial<{
    as: 'p' | 'div'
    asChild: boolean
    colorMode: 'main' | 'contrast'
    size: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
    variant: 'primary' | 'error' | 'success' | 'alert'
    disabled: boolean
  }>

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      as = 'p',
      asChild = false,
      colorMode = 'main',
      size = 'medium',
      variant = 'primary',
      disabled = false,
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
          'font-body-regular',
          'tracking-normal',
          'leading-normal',
          // size
          {
            xxsmall: ['text-xxxnano'],
            xsmall: ['text-xxnano'],
            small: ['text-xnano'],
            medium: ['text-nano'],
            large: ['text-xxsmall'],
          }[size],
          // colorMode / variant
          {
            main: {
              primary: ['text-mono-700'],
              error: ['text-negative-500'],
              success: ['text-success-500'],
              alert: ['text-alert-500'],
            },
            contrast: {
              primary: ['text-white'],
              error: ['text-negative-100'],
              success: ['text-success-100'],
              alert: ['text-alert-100'],
            },
          }[colorMode][variant],
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

Paragraph.displayName = 'Paragraph'
