import { createSSRApp } from 'vue';
import App from './App.vue';
import { registerShareMenu } from '@/utils/share';
export function createApp() {
  const app = createSSRApp(App);
  app.mixin(registerShareMenu); // 全局混入分享功能 需单独关闭
  return {
    app,
  };
}
