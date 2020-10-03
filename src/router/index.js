import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require(['../views/home/home.vue'], resolve);
const Sort = resolve => require(['../views/sort/sort.vue'], resolve);
const Cart = resolve => require(['../views/cart/cart.vue'], resolve);
const My = resolve => require(['../views/my/my.vue'], resolve);


const routes=[
	{
		path:'',
		redirect: '/home'
	},
	{
		path:'/home',
		component: Home
	},
	{
		path:'/sort',
		component: Sort
	},
	{
		path:'/cart',
		component: Cart
	},
	{
		path:'/my',
		component: My
	},
]
const router = new VueRouter({
	routes,
})

export default router