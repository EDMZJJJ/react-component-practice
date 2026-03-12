import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({
    entryRoot: 'packages', // 设置入口文件夹
    outputDir: 'dist/types', // 设置输出文件夹
    tsconfigPath: path.resolve(__dirname, 'tsconfig.json'), // 指定tsconfig.json路径
    })],
  root:path.resolve(__dirname, 'example'),  //设置根目录为example
  build: {
    outDir: path.resolve(__dirname, 'dist'), //设置输出目录为dist
    lib:{  //打包配置
      entry: path.resolve(__dirname, 'packages/index.ts'), //设置入口文件
      name: 'MyLib', //设置库名称
      formats:  ['es', 'umd', 'cjs', 'iife'], //设置输出格式,各种规范都支持  
      fileName: (format) => `my-lib.${format}.js` //设置输出文件名  
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['react', 'react-dom'], //设置外部依赖
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    } 
  },
  server: {
    port: 3000,
    open: true,
  },
}); 