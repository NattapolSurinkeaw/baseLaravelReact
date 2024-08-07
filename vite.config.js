import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                    'resources/js/app.jsx',
                    
                    'resources/css/app.css',
                    'resources/css/modal.css',
                    'public/js/main.js',
                    'public/css/modal.css',
            ],
            refresh: true,
        }),
        react(),
    ],
});
