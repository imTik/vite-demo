import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy'; // 为传统浏览器提供支持

// https://vitejs.dev/config/
export default defineConfig({
  base: 'vite-demo',
  envDir: './env',
  server: {
    port: '3001',
    proxy: {
      '/api': {
        target: 'http://192.168.35.171:8888',
        changeOrigin: '',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
    cssCodeSplit: true, // 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    sourcemap: false,
  },
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
