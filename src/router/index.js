import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


// https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: (resolve) => {
				require(['../views/index.vue'], resolve);
			}
		},
		{
			path: '/list/:type',
			name: 'list',
			component: (resolve) => {
				require(['../views/list.vue'], resolve)
			}
		},
		{
			path: '/show/:id',
			name: 'show',
			component: (resolve) => {
				require(['../views/show.vue'], resolve)
			}
		},
		{
			path: '/director/:id',
			name: 'director',
			component: (resolve) => {
				require(['../views/director.vue'], resolve)
			}
		},
		{
			path: '/search',
			name: 'search',
			component: (resolve) => {
				require(['../views/search.vue'], resolve)
			}
		}

	]
});
