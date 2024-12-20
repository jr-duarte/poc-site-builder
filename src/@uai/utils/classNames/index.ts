/* Arquivo gerado automaticamente por UAI Design System */
import themePreset from '@uai/tailwind.preset'
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

type TailwindConfigExtends = keyof typeof themePreset.theme.extend

const classGroupsMergeFull = (
  baseClassName: string,
  key: TailwindConfigExtends,
) => {
  return { [baseClassName]: [...Object.keys(themePreset.theme.extend[key])] }
}

const getAllConfigExtensionsKeys = () => {
  return Object.entries(themePreset.theme.extend).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [key]: [...Object.keys(value)],
      }
    },
    {},
  )
}

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      ...getAllConfigExtensionsKeys(),
    },
    classGroups: {
      'outline-w': [classGroupsMergeFull('outline', 'outlineWidth')],
      'font-family': [classGroupsMergeFull('font', 'fontFamily')],
      'font-size': [classGroupsMergeFull('text', 'fontSize')],
      'font-weight': [classGroupsMergeFull('font', 'fontWeight')],
      tracking: [classGroupsMergeFull('tracking', 'letterSpacing')],
      leading: [classGroupsMergeFull('leading', 'lineHeight')],
      shadow: [classGroupsMergeFull('shadow', 'boxShadow')],
      'drop-shadow': [classGroupsMergeFull('drop-shadow', 'dropShadow')],
    },
  },
})

export default function classNames(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
  // return clsx(inputs)
}
