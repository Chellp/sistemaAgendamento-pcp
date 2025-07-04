import path from 'path';
//import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// Para pegar o __dirname em módulos ES
const __dirname = new URL('.', import.meta.url).pathname;

export default {
  entry: './src/server.ts', // Ponto de entrada para o Webpack
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
  ],
  devtool: 'source-map', // Para gerar mapas de origem e facilitar a depuração
  devServer: {
    static: { // Usando 'static' no lugar de 'contentBase'
      directory: path.resolve(__dirname, 'dist'), // Pasta para servir os arquivos estáticos
    }, // Define a pasta onde os arquivos gerados estarão
    port: 8080, // Define a porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // Backend rodando na porta 3000
        changeOrigin: true,               // Altera a origem da requisição para o backend
        secure: false,                    // Para permitir conexões com servidores HTTP (não HTTPS)
      },
    },
  }
};
