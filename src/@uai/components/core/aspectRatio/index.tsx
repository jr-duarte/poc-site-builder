'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import classNames from '@uai/utils/classNames'
import React from 'react'

export type AspectRatioProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<{
    ratio: '16:9' | '4:3' | '3:2' | '1:1' | '2:3' | '3:4' | '9:16' | 'fluid'
  }>

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = '16:9', children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames([
          // default
          'w-full',
          // ratio
          {
            '16:9': 'aspect-[16/9]',
            '4:3': 'aspect-[4/3]',
            '3:2': 'aspect-[3/2]',
            '1:1': 'aspect-[1/1]',
            '2:3': 'aspect-[2/3]',
            '3:4': 'aspect-[3/4]',
            '9:16': 'aspect-[9/16]',
            fluid: [],
          }[ratio],
          // custom
          className,
        ])}
        {...props}
      >
        {children}
      </div>
    )
  },
)

AspectRatio.displayName = 'AspectRatio'
