import * as packageJson from './package.json'
import { defineConfig } from 'vite'
import path, { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

const componentsAlias = path.resolve(__dirname, 'src', 'components')

export default defineConfig(() => ({
    plugins: [react()],
    resolve: {
        alias: {
            // Alias for components folder
            '@components': componentsAlias,
        },
    },
    build: {
        lib: {
            entry: path.join('src', 'component/index.js'),

            name: 'ReactViteLibrary',
            formats: ['es', 'umd'],
            fileName: (format) => `react-vite-library.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
}))
