'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot } from '@radix-ui/react-slot'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  Partial<{
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    asChild: boolean
    colorMode: 'main' | 'contrast'
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  }>

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
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
            xsmall: ['text-nano'],
            small: ['text-small'],
            medium: ['text-medium md:text-large'],
            large: ['text-xlarge md:text-xxlarge'],
            xlarge: ['text-xxlarge md:text-huge'],
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

Heading.displayName = 'Heading'
