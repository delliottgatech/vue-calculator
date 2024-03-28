import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import App from './App.vue';
import VueCalculator from './components/VueCalculator.vue';

Vue.use(vueCustomElement);

// Define each component as a custom element
Vue.customElement('app-component', App);
Vue.customElement('vue-calculator', VueCalculator);
