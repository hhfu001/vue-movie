import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App}
});

// setTimeout(function() {
//   console.log('setTimeout')
// }, 0);
// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });

// promise.then(function() {
//   console.log('Resolved.');
// });

// console.log('Hi!');

// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// var p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2.then(result => console.log('result', result), error=> console.log(error)).catch(error => console.log(error))