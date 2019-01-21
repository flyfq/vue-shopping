<template>
	<header class="zyw-header">
	    <div class="zyw-container white-color">
	        <div class="head-l" @click="goback"><a href="##" target="_self"><img src="../assets/img/svg/head-return.svg" alt=""></a></div>
	        <h1><a href="#" class="active">商品</a><a href="#item-precent">详情</a><a href="">评价</a></h1>
	        <div class="head-r"><img src="img/svg/head-more.svg" alt=""></div>
	    </div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.zyw-header h1 a{
	    font-size: 1.3rem;
	    padding: 0 18px;
	    color: #f5f5f5;
	}
	.zyw-header h1 a.active{
	    font-weight: bold;
	    color: #fff;
	}
</style>
