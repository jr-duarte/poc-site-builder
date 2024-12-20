'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot } from '@radix-ui/react-slot'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    colorMode: 'main' | 'contrast'
    asChild: boolean
  }>

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { colorMode = 'main', asChild = false, children, className, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : 'a'

    return (
      <Component
        ref={ref}
        className={classNames([
          'cursor-pointer',
          // default
          'whitespace-nowrap',
          'overflow-hidden',
          'font-body-regular',
          'text-nano',
          'leading-normal',
          'tracking-normal',
          'transition-all',
          'duration-300',
          'ease-in-out',
          'bg-no-repeat',
          'bg-gradient-to-r',
          'bg-left-bottom',
          'bg-[length:0%_1px]',
          'focus:outline',
          'focus:outline-thin',
          'focus:shadow-focus',
          'from-current',
          'to-current',
          'hover:bg-[length:100%_1px]',
          'focus:bg-[length:100%_1px]',
          // colorMode
          {
            main: ['text-primary-500', 'focus:outline-focus-500'],
            contrast: ['text-white', 'focus:outline-focus-200'],
          }[colorMode],
          className,
        ])}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Link.displayName = 'Link'
