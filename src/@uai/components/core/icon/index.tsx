'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import classNames from '@uai/utils/classNames'
import { FcGoogle } from 'react-icons/fc'
import * as mdIcons from 'react-icons/md'

const iconList = { ...mdIcons, FcGoogle }

export type IconName = keyof typeof iconList

export type IconProps = React.SVGProps<SVGSVGElement> &
  Partial<{
    name: IconName
    colorMode: 'main' | 'contrast'
    variant:
      | 'primary'
      | 'title'
      | 'paragraph'
      | 'success'
      | 'alert'
      | 'error'
      | 'info'
    size: 'small' | 'medium' | 'large'
    disabled: boolean
  }>

export const Icon = ({
  name = 'MdHome',
  size = 'medium',
  colorMode = 'main',
  variant,
  disabled = false,
  className,
  ...props
}: IconProps) => {
  const Icon = iconList[name]

  if (!Icon) return null

  return (
    <Icon
      className={classNames([
        // size
        {
          small: ['min-w-4', 'min-h-4', 'max-w-4', 'max-h-4'],
          medium: ['min-w-6', 'min-h-6', 'max-w-6', 'max-h-6'],
          large: ['min-w-8', 'min-h-8', 'max-w-8', 'max-h-8'],
        }[size],
        // colorMode / variant
        {
          main: {
            primary: ['text-primary-500'],
            title: ['text-mono-900'],
            paragraph: ['text-mono-700'],
            success: ['text-success-500'],
            alert: ['text-alert-500'],
            error: ['text-negative-500'],
            info: ['text-focus-500'],
            none: [],
          },
          contrast: {
            primary: ['text-white'],
            title: ['text-white'],
            paragraph: ['text-white'],
            success: ['text-success-100'],
            alert: ['text-alert-100'],
            error: ['text-negative-100'],
            info: ['text-focus-100'],
            none: [],
          },
        }[colorMode][variant || 'none'],
        // disabled
        {
          'text-disable-content': !!disabled,
        },
        // custom
        className,
      ])}
      {...props}
    />
  )
}
