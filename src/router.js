import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

	import list from "./components/list";
	// const list = () => import( './components/list')
	const buycart = () => import(/* webpackChunkName: "buycart" */ './components/buycart')
	const count = () => import(/* webpackChunkName: "count" */ './components/count')
	const finding = () => import(/* webpackChunkName: "finding" */ './components/finding')
	const productlist = () => import(/* webpackChunkName: "productlist" */ './components/productlist')
	const item = () => import(/* webpackChunkName: "item" */ './components/item')
	const user = () => import(/* webpackChunkName: "user" */ './components/user')
	const login = () => import(/* webpackChunkName: "login" */ './components/login')
	const reg = () => import(/* webpackChunkName: "reg" */ './components/reg')
	const error = () => import(/* webpackChunkName: "error" */ './components/error')
	
// 	import buycart from "./components/buycart";
// 	import count from "./components/count";
// 	import finding from "./components/finding";
// 	import productlist from "./components/productlist";
// 	import item from "./components/item";
// 	import user from "./components/user";
// 	import login from "./components/login";
// 	import reg from "./components/reg";
// 	import error from "./components/error";
	

const routes =[
	{path:'/list',component:list},
	{path:'/buycart',component:buycart},
	{path:'/count',component:count},
	{path:'/finding',component:finding},
	{path:'/productlist',component:productlist},
	{path:'/item/:id',component:item,name:'item'},
	{path:'/user',component:user},
	{path:'/login',component:login},
	{path:'/reg',component:reg},
	{path:'/',redirect:'/list'},
	{path:'*',component:error},

]

export default new Router({
  routes,
	 scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
