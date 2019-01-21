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
	
	export default {
		data() {
			return {
				msg:[]
			};
		},
		components:{banner,navmeau,news,seckill,show,wares},
		mounted(){
			this.$http({
				url:"/data/products.data"
			}).then(res=>this.msg=res.data)
		}
	}
</script>

<style>
section.zyw-container{ border-top: 45px solid transparent;}
</style>
