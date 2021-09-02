import { useEffect } from 'react'

import theme from './theme'
import { clickDocsButtonOnFirstLoad } from './util'
import './index.css'

import '../src/index.css'

export const decorators = [
  (storyFunc, context) => {
    useEffect(() => {
      window.addEventListener("load", clickDocsButtonOnFirstLoad)
      return () => window.removeEventListener("load", clickDocsButtonOnFirstLoad)
    }, [])

    const { padding } = context.globals

    return <div style={{ padding: padding === 'on' ? '2rem' : '0' }}>{storyFunc()}</div>
  }
]

export const globalTypes = {
  padding: {
    name: 'Padding',
    description: 'Toggle padding surrounding component-preview.',
    defaultValue: 'on',
    toolbar: {
      icon: 'component',
      items: ['on', 'off'],
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  docs: { theme },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Documentation', ['Introduction', 'Installation', 'Cookbook', 'Extending Atomic'], 'Base', 'Components', 'Examples']
    }
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: '', color: '#F4F4F6' },
      { name: 'night', class: 'dark', color: '#14161F' },
    ]
  },
}
