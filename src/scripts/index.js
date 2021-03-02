import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@webcomponents/template';
import { createApp } from 'vue'
import Hello from '@/vue/Components/Hello';

createApp(Hello).mount('#app');

async function hoge() {
  try {
    const data = '!!!';
    return data;
  } catch(err) {
    console.error(err);
  }
}

hoge().then((data) => {
  console.log(data);
});