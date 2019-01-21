<template>
  <div id="app">
		<!-- <itemheader></itemheader> -->
		
		<navbar v-show="bnav" ></navbar>
		<transition enter-active-class="animated fadeIn">
			<router-view></router-view>
		</transition>
		
		<!-- <item></item> -->
		<footbar v-show="bfoot"></footbar>
		<!-- <itemfoot></itemfoot> -->
		<loading v-show="bloading"></loading>
	 </div>
</template>
<script>
	
	// import navbar from "./components/navbar";
	// import search from "./components/search";
	// import productlist from "./components/productlist";
	// import finding from "./components/finding";
	// import buycart from "./components/buycart";
	// import list from "./components/list";
	import navbar from "./components/navbar";
	// import itemheader from "./components/itemheader";
	// import item from "./components/item";
	// import itemfoot from "./components/itemfoot";
	import footbar from "./components/footbar";
	// import count from "./components/count";
	import {mapGetters} from "vuex"
	import * as types from './store/types'
	
export default{
	name:'app',
	components:{navbar,footbar},
  computed:mapGetters(
	["bnav","bfoot","bloading"]
	),
	watch:{
		$route:{//路由监听
			handler:function(to){
				let path = to.path;
				if(/list/.test(path)){
					this.$store.dispatch(types.VIEW_NAV,true);
					this.$store.dispatch(types.VIEW_FOOT,true);
				}
				if(/item|buycart|login|reg/.test(path)){
					this.$store.dispatch(types.VIEW_NAV,false);
					this.$store.dispatch(types.VIEW_FOOT,false);
				}
				if(/productlist|finding|user/.test(path)){
					this.$store.dispatch(types.VIEW_NAV,false);
					this.$store.dispatch(types.VIEW_FOOT,true);
				}
			},
			immediate:true
		}
},
}

</script>

