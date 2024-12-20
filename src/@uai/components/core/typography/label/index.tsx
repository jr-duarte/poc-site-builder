'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot } from '@radix-ui/react-slot'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  Partial<{
    variant: 'primary' | 'error'
    colorMode: 'main' | 'contrast'
    asChild: boolean
    disabled: boolean
  }>

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      variant = 'primary',
      colorMode = 'main',
      asChild = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'label'

    return (
      <Component
        ref={ref}
        className={classNames([
          // default
          'font-body-bold',
          'tracking-normal',
          'leading-xtight',
          'text-xnano',
          // colorMode / variant
          {
            main: {
              primary: ['text-primary-500'],
              error: ['text-negative-500'],
            },
            contrast: {
              primary: ['text-white'],
              error: ['text-negative-100'],
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

Label.displayName = 'Label'
