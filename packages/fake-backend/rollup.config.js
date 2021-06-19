import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import * as pkg from './package.json'

const input = './src/index.ts'
const extensions = ['.ts']

const peerDependencies = pkg.peerDependencies || {}
const externals = Object.keys(peerDependencies)

const plugins = [
  typescript({
    tsconfigDefaults: {
      exclude: [
        // all TS test files, regardless whether co-located or in test/ etc
        '**/*.spec.ts',
        '**/*.test.ts'
      ],
      compilerOptions: {
        sourceMap: true,
        declaration: true
      },
      tsconfigOverride: {
        compilerOptions: {
          // TS -> esnext, then leave the rest to babel-preset-env
          target: 'esnext'
        }
      }
    },
    typescript: require('typescript')
  }),
  commonjs(),
  sourceMaps(),
  babel({
    extensions,
    babelHelpers: 'runtime',
    include: './src/**/*',
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          loose: true
        }
      ]
    ],
    plugins: ['@babel/plugin-transform-runtime']
  })
]

const outputOptions = {
  sourcemap: true,
  freeze: false,
  esModule: true
}

export default {
  input,
  output: [
    {
      file: pkg.module,
      format: 'es',
      ...outputOptions
    },
    {
      file: pkg.main,
      format: 'cjs',
      ...outputOptions
    }
  ],
  external: [...externals],
  plugins
}
