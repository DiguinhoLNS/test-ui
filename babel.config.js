export default {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-transform-modules-commonjs' // Garante que o código seja convertido para CommonJS
    ]
}
  