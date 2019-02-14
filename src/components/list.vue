<template>
	<div>
		
		<section class="zyw-container">
			<banner></banner>
			<navmeau></navmeau>
			<news></news>
			<seckill :msg="msg" dataName="products"></seckill>
			<show></show>
			<wares :msg="msg" dataName="products"></wares>
			<!-- <loading></loading> -->
		</section>
		
	</div>
</template>

<script>
	import banner from "./banner";
	import navmeau from "./navmeau";
	import news from "./news";
	import seckill from "./seckill";
	import show from "./show";
	import wares from "./wares";
	let top = 0;
	export default {
		data() {
			return {
				msg:[]
			};
		},
		components:{banner,navmeau,news,seckill,show,wares},
		mounted(){
			this.$http({
				url:"http://localhost:3001/list",
				method:"get"
			}).then(res=>this.msg=res.data)
		},
		updated(){document.documentElement.scrollTop=top;},
		destroyed(){top=document.documentElement.scrollTop;}
	}
</script>

<style>
section.zyw-container{ border-top: 45px solid transparent;}
</style>
