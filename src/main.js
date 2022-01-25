import { createApp, onMounted } from 'vue';
import App from './App.vue';
import router from './router/index';
import './router/premission';
import store from './store/index';

const app = createApp(App);
app.use(router).use(store);
app.mount('#app');
