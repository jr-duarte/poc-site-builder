'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { Slot, Slottable } from '@radix-ui/react-slot'
import { Icon, IconName } from '@uai/components/core/icon'
import classNames from '@uai/utils/classNames'
import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    colorMode: 'main' | 'contrast'
    variant: 'primary' | 'secondary' | 'ghost' | 'error' | 'facebook' | 'google'
    size: 'small' | 'medium' | 'large'
    asChild: boolean
    icon: Partial<{
      left: IconName
      right: IconName
    }>
  }>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorMode = 'main',
      variant = 'primary',
      size = 'medium',
      asChild = false,
      children,
      className,
      icon,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button'

    const leftIcon =
      variant === 'facebook' || variant === 'google'
        ? {
            facebook: 'MdFacebook',
            google: 'FcGoogle',
          }[variant]
        : icon?.left

    return (
      <Component
        ref={ref}
        type="button"
        className={classNames([
          // default
          'inline-flex',
          'items-center',
          'justify-center',
          'whitespace-nowrap',
          'overflow-hidden',
          'gap-button',
          'cursor-pointer',
          'px-4',
          'transition-all',
          'duration-300',
          'ease-in-out',
          'rounded-button',
          'font-body-bold',
          'text-nano',
          'leading-xtight',
          'tracking-normal',
          'focus:outline',
          'focus:outline-thin',
          'focus:shadow-focus',
          // disabled
          {
            'cursor-not-allowed': !!props?.disabled,
          },
          // size
          {
            small: ['h-10', 'h-10'],
            medium: ['h-12', 'h-12'],
            large: ['h-14', 'h-14'],
          }[size],
          // colorMode
          {
            main: ['focus:outline-focus-500'],
            contrast: ['focus:outline-focus-200'],
          }[colorMode],
          // colorMode / variant
          {
            main: {
              primary: [
                // idle
                'bg-primary-500',
                'text-white',
                // hover
                'hover:bg-primary-600',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              secondary: [
                // idle
                'outline',
                'outline-hairline',
                'outline-primary-500',
                'text-primary-500',
                // hover
                'hover:outline-primary-600',
                'hover:text-primary-600',
                // disabled
                {
                  'outline-mono-400': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:outline-mono-400': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              ghost: [
                // idle
                'text-primary-500',
                // hover
                'hover:text-primary-600',
                // disabled
                {
                  'text-mono-400': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              error: [
                // idle
                'bg-negative-500',
                'text-white',
                // hover
                'hover:bg-negative-600',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              facebook: [
                // idle
                'bg-facebook-brand',
                'text-white',
                // hover
                'hover:bg-facebook-hover',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              google: [
                // idle
                'bg-google-brand',
                'outline',
                'outline-google-hover',
                'outline-hairline',
                'text-google-text',
                // hover
                'hover:bg-google-hover',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
            },
            contrast: {
              primary: [
                // idle
                'bg-white',
                'text-primary-500',
                // hover
                'hover:bg-primary-100',
                'hover:text-primary-600',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              secondary: [
                // idle
                'outline',
                'outline-hairline',
                'outline-white',
                'text-white',
                // hover
                'hover:outline-primary-100',
                'hover:text-primary-100',
                // disabled
                {
                  'outline-mono-400': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:outline-mono-400': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              ghost: [
                // idle
                'text-white',
                // hover
                'hover:text-primary-100',
                // disabled
                {
                  'text-mono-400': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              error: [
                // idle
                'bg-negative-100',
                'text-negative-500',
                // hover
                'hover:bg-negative-200',
                'hover:text-negative-600',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              facebook: [
                // idle
                'bg-white',
                'text-facebook-brand',
                // hover
                'hover:bg-facebook-hover-light',
                'hover:text-facebook-hover',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
              google: [
                // idle
                'bg-google-brand',
                'outline',
                'outline-google-hover',
                'outline-hairline',
                'text-google-text',
                // hover
                'hover:bg-google-hover',
                // disabled
                {
                  'bg-mono-200': !!props?.disabled,
                  'text-mono-400': !!props?.disabled,
                  'hover:bg-mono-200': !!props?.disabled,
                  'hover:text-mono-400': !!props?.disabled,
                },
              ],
            },
          }[colorMode][variant],
          // custom
          className,
        ])}
        {...props}
      >
        {!!leftIcon && <Icon name={leftIcon as IconName} size={size} />}
        <Slottable>{children}</Slottable>
        {!!icon?.right && <Icon name={icon.right} size={size} />}
      </Component>
    )
  },
)

Button.displayName = 'Button'
