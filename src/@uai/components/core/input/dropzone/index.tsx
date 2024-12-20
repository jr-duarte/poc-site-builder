'use client'
/* Arquivo gerado automaticamente por UAI Design System */
import { AspectRatio, AspectRatioProps } from '@uai/components/core/aspectRatio'
import { Icon, IconName } from '@uai/components/core/icon'
import { Label } from '@uai/components/core/typography/label'
import { Overline } from '@uai/components/core/typography/overline'
import { Paragraph } from '@uai/components/core/typography/paragraph'
import classNames from '@uai/utils/classNames'
import React from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'

export type InputDropzoneProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<{
    appearance: 'fill' | 'squared' | 'rounded'
    colorMode: 'main' | 'contrast'
    icon: IconName
    label: string
    helper: string
    error: string
    preview: string
    id: string
    disabled: boolean
    options: Omit<DropzoneOptions, 'disabled'>
    title: string
    message: string
  }>

export const InputDropzone = React.forwardRef<
  HTMLDivElement,
  InputDropzoneProps
>(
  (
    {
      appearance = 'fill',
      colorMode = 'main',
      options,
      label,
      helper,
      error,
      className,
      preview,
      id,
      icon,
      disabled = false,
      title,
      message,
      children,
    },
    ref,
  ) => {
    const { getRootProps, getInputProps } = useDropzone({
      ...options,
      disabled,
    })

    return (
      <div
        ref={ref}
        className={classNames([
          // default
          'flex',
          'flex-col',
          'w-full',
          'gap-input',
          // disabled
          {
            'cursor-not-allowed': !!disabled,
          },
          // custom
          className,
        ])}
      >
        {!!label && (
          <Label
            htmlFor={id}
            variant={error ? 'error' : 'primary'}
            disabled={disabled}
            colorMode={colorMode}
          >
            {label}
          </Label>
        )}
        <AspectRatio
          ratio={
            {
              fill: 'fluid',
              squared: '1:1',
              rounded: '1:1',
            }[appearance] as AspectRatioProps['ratio']
          }
          className={classNames([
            // default

            'relative',
            'flex',
            'items-center',
            'justify-center',
            // appearance
            {
              fill: ['w-full'],
              squared: ['w-xgiant'],
              rounded: ['w-xgiant', 'rounded-full'],
            }[appearance],
          ])}
        >
          <div
            {...getRootProps()}
            className={classNames([
              // default
              'relative',
              'flex',
              'flex-col',
              'items-center',
              'justify-center',
              'gap-4',
              'min-h-xgiant',
              'outline-dashed',
              'outline-thin',
              'focus:outline',
              'focus:outline-thin',
              'focus:outline-focus-500',
              'focus:shadow-focus',
              'overflow-hidden',
              'cursor-pointer',
              // appearance
              {
                fill: ['w-full'],
                squared: ['w-xgiant'],
                rounded: ['w-xgiant', 'rounded-full'],
              }[appearance],
              // colorMode
              {
                main: [
                  'bg-mono-100/50',
                  'text-mono-700',
                  'outline-border-default',
                  'focus:bg-focus-100',
                  {
                    'outline-negative-500': !!error,
                    'bg-negative-100/50': !!error,
                    'hover:bg-negative-100': !!error,
                    'hover:bg-mono-100': !disabled,
                  },
                ],
                contrast: [
                  'bg-mono-100/40',
                  'outline-border-default',
                  'focus:bg-focus-100/50',
                  {
                    'outline-negative-200': !!error && !disabled,
                    'hover:outline-white': !disabled,
                  },
                ],
              }[colorMode],
              // preview
              {
                'bg-center': !!preview,
                'bg-cover': !!preview,
                'bg-no-repeat': !!preview,
              },
              // disabled
              {
                'cursor-not-allowed': !!disabled,
              },
              // custom
              className,
            ])}
            style={{
              backgroundImage: preview ? `url(${preview})` : undefined,
            }}
          >
            <input id={id} {...getInputProps()} />
            {!preview && (
              <>
                {!!icon && (
                  <Icon
                    colorMode={colorMode}
                    name={icon}
                    size="large"
                    variant={error ? 'error' : 'paragraph'}
                    disabled={disabled}
                  />
                )}
                {appearance === 'fill' && (!!title || !!message) && (
                  <div className="flex flex-col items-center justify-center">
                    {!!title && (
                      <Overline colorMode={colorMode} disabled={disabled}>
                        {title}
                      </Overline>
                    )}
                    {!!message && (
                      <Paragraph
                        colorMode={colorMode}
                        variant="primary"
                        size="xxsmall"
                        disabled={disabled}
                      >
                        {message}
                      </Paragraph>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
          {!!children && (
            <div
              className={classNames([
                // default
                'absolute',
                'bottom-2',
                // appearance
                {
                  fill: ['right-2'],
                  squared: ['bottom-1'],
                  rounded: ['bottom-1'],
                }[appearance],
              ])}
            >
              {children}
            </div>
          )}
        </AspectRatio>
        {!!helper && !error && (
          <Paragraph
            variant="primary"
            size="xsmall"
            disabled={disabled}
            colorMode={colorMode}
          >
            {helper}
          </Paragraph>
        )}
        {!!error && (
          <Paragraph
            variant="error"
            size="xsmall"
            className="inline-flex gap-1 items-center"
            disabled={disabled}
            colorMode={colorMode}
          >
            <Icon
              name="MdWarning"
              size="small"
              disabled={disabled}
              colorMode={colorMode}
            />
            {error}
          </Paragraph>
        )}
      </div>
    )
  },
)

InputDropzone.displayName = 'InputDropzone'
