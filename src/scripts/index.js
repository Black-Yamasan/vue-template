import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@webcomponents/template';
import Vue from 'vue'
import Hello from '@/vue/Components/Hello';

new Vue({
  el: '#app',
  components: { Hello },
  template: '<Hello />'
})

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