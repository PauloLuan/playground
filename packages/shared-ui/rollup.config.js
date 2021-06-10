import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const plugins = [
  resolve({
    customResolveOptions: {
      moduleDirectories: ['node_modules']
    }
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    rootMode: 'upward'
  }),
  typescript()
]

export default [
  {
    input: 'src/index.ts',
    plugins,
    output: {
      file: `dist/index.js`,
      format: 'esm'
    },
    external: [
      'react',
      'styled-components',
      'styled-icons',
      'styled-media-query'
    ]
  }
]
