import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

const ignoredPaths = [
  '.next/**',
  'next-env.d.ts',
  'node_modules/**',
  'playwright-report/**',
  'test-results/**',
]

const eslintConfig = [
  {
    ignores: ignoredPaths,
  },
  ...nextVitals,
  ...nextTypeScript,
]

export default eslintConfig
