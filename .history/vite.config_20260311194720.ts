import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  root:path.resolve(__dirname, 'example'),  //设置根目录为example
  build: {
    lib:{
      entry: path.resolve(__dirname, 'packages/index.ts'), //设置入口文件
      name: 'MyLib', //设置库名称
      fileName: (format) => `my-lib.${format}.js` //设置输出文件名  
    }
  },
  server: {
    port: 3000,
    open: true,
  },
}); 