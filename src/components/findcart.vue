<template>
	<div class="find-cart">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><a href="" class="cart-tab active">精选</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">直播</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">视频购</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">社区</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">家居生活</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">生鲜数码</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">个人洗护</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">海外直邮</a></div>
			<div class="swiper-slide"><a href="" class="cart-tab">服饰鞋靴</a></div>
		</div>
	</div>
	
</template>

<script>
	
	
	export default {
		data() {
			return {
				
			};
		},
	}
</script>

<style>
	.find-cart{
	    background: #fff;
	    line-height: 3.5rem;
	    border-bottom: 1px solid #f2f2f2;
	    width: 100%;
	    overflow: hidden;
	}
	.find-cart .swiper-slide{width: auto;}
	.find-cart .cart-tab{
	    display: inline-block;
	    padding: 0 15px;
	    color: #232323;
	    font-size: 1.2rem;
	}
	.find-cart .cart-tab.active{
	    font-weight: bold;
	}
</style>
