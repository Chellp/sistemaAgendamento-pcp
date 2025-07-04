const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // Ponto de entrada para o Webpack
  output: {
    filename: 'bundle.js', // Nome do arquivo gerado
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Permite que o Webpack entenda arquivos .ts e .tsx
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Regra para arquivos TypeScript
        use: 'ts-loader', // Usa o ts-loader para compilar TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Limpa a pasta dist antes de gerar novos arquivos
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Template HTML para injetar o bundle
    }),
  ],
  devtool: 'source-map', // Para gerar mapas de origem e facilitar a depuração
  devServer: {
    contentBase: './dist', // Define a pasta onde os arquivos gerados estarão
    port: 3000, // Define a porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
  },
};
