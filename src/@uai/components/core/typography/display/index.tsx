'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot } from '@radix-ui/react-slot'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type DisplayProps = React.HTMLAttributes<HTMLHeadingElement> &
  Partial<{
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    asChild: boolean
    colorMode: 'main' | 'contrast'
    size: 'small' | 'medium' | 'large'
  }>

export const Display = React.forwardRef<HTMLHeadingElement, DisplayProps>(
  (
    {
      as = 'h1',
      asChild = false,
      colorMode = 'main',
      size = 'medium',
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
          'tracking-tight',
          'leading-xtight',
          // colorMode
          {
            main: ['text-primary-500'],
            contrast: ['text-white'],
          }[colorMode],
          // size
          {
            small: ['text-huge', 'md:text-xxhuge'],
            medium: ['text-xhuge', 'md:text-giant'],
            large: ['text-xxhuge', 'md:text-xgiant'],
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

Display.displayName = 'Display'
