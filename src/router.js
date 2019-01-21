import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

	// import list from "./components/list";
	const list = () => import( './components/list')
	const buycart = () => import( './components/buycart')
	const count = () => import( './components/count')
	const finding = () => import( './components/finding')
	const productlist = () => import( './components/productlist')
	const item = () => import( './components/item')
	const user = () => import( './components/user')
	const login = () => import( './components/login')
	const reg = () => import( './components/reg')
	const error = () => import( './components/error')
	
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
  routes
})
