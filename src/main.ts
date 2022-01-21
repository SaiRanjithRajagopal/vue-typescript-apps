import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import '/node_modules/primeflex/primeflex.css'

import App from './App.vue';
import router from './router'

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component('InputText',InputText);
app.component('InputNumber',InputNumber);
app.component('Button',Button);
app.mount('#app');
