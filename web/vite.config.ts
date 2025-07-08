import { defineConfig } from 'vite';

// Configuração padrão do Vite
export default defineConfig({
    server: {
        port: 5173,           // Porta do servidor de desenvolvimento
        open: true,           // Abrir o navegador automaticamente
        proxy: {
            '/api': {
            target: 'http://localhost:3001',  // Proxy para o seu backend (API)
            changeOrigin: true, // faz parecer que a requisição vem diretamente do frontend
            secure: false, // ignora problemas de HTTPS (em desenvolvimento)
        },}
    },
    build: {
        outDir: 'dist',       // Pasta onde o build será gerado
        sourcemap: true,      // Geração de mapas de origem
    },
    plugins: [
        // Plugins para React, Vue, etc.
    ],

});