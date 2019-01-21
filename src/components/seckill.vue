<template>
	
		<div class="index-seckill white-bgcolor">
			<div class="seckill-hd">
				<span class="seckill-hd-title red-color"><i class="fa fa-clock-o" aria-hidden="true"></i> 限时秒杀</span>
				<strong>10点场</strong>
				<div id="time"></div>
				<div class="seckill-hd-r">秒抢好货 <i class="fa fa-angle-right theme-color" aria-hidden="true"></i></div>
			</div>
			<div class="seckill-bd">
				<div class="seckill-wares">
					<div class="swiper-wrapper">
						<div class="swiper-slide seckill-ware" v-for="item of msg" :key="item.productId">
							<router-link  :to="'/item/'+item.productId+'?dataName=' + dataName">
								<a href="##">
									<img :src="item.smallImage" alt="">
									<p class="red-color">￥<strong>{{item.vipshopPrice}}</strong></p>
									<del>￥{{item.marketPrice}}</del>
								</a>
							</router-link>
						</div>
						<!-- <div class="swiper-slide seckill-ware">
							<a href="item.html">
								<img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t14287/16/2071526173/41836/766c1953/5a6935d3N17ca68e7.jpg!q70.jpg" alt="">
								<p class="red-color">￥<strong>89.90</strong></p>
								<del>￥128.89</del>
							</a>
						</div> -->
						<!-- <div class="swiper-slide seckill-ware">
							<a href="item.html">
								<img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t15049/171/1967249015/25679/d554d9a9/5a61d929N027318e3.jpg!q70.jpg" alt="">
								<p class="red-color">￥<strong>1900.00</strong></p>
								<del>￥2200.00</del>
							</a>
						</div> -->
						<!-- <div class="swiper-slide seckill-ware">
							<a href="item.html">
								<img src="https://m.360buyimg.com//mobilecms/s276x276_jfs/t13030/75/2301251503/262030/ed6dc00d/5a3a09beN645f27a8.jpg!q70.jpg" alt="">
								<p class="red-color">￥<strong>35.00</strong></p>
								<del>￥38.00</del>
							</a>
						</div> -->
						<!-- <div class="swiper-slide seckill-ware">
							<a href="item.html">
								<img src="https://m.360buyimg.com//mobilecms/s276x276_jfs/t11401/34/504898878/183378/5a6a8a48/59f1c3a1N2174c8cc.jpg!q70.jpg" alt="">
								<p class="red-color">￥<strong>38.00</strong></p>
								<del>￥50.00</del>
							</a>
						</div> -->
					</div>
				</div>
			</div>
			
		</div>

</template>

<script>

	export default {
		props:["msg","dataName"],
	}
</script>

<style>
	.index-seckill{}
	.index-seckill .seckill-hd{
	    position: relative;
	    height: 30px;
	    padding: 0 0.625rem;
	    margin-bottom: 0.5rem;
	}
	span.seckill-hd-title.theme-color {
	    font-weight: bold;
	    font-size: 1.25rem;
	}
	.index-seckill .seckill-hd strong{
	    line-height: 30px; 
	    font-size: 0.8rem;
	}
	.index-seckill .seckill-hd #time {
	    position: absolute;
	    top: 0;
	    left: 42%;
	    line-height: 30px;
	}
	.seckill-hd #time span{
	    padding: 0 3px;
	    border: 1px solid #dedede;
	    border-radius: 4px;
	    font-size: 0.8rem;
	}
	.index-seckill .seckill-hd-r{
	    position: absolute;
	    right: 0.625rem;
	    top: 0;
	    line-height: 30px;
	    font-size: 0.8rem;
	}
	
	.index-seckill .seckill-bd{
	    width: 100%;
	    overflow: hidden;
	}
	
	.index-seckill .seckill-bd .seckill-wares{}
	.index-seckill .seckill-bd .seckill-wares .seckill-ware{
		width: 83px;   /* 自己后来加上去的 */
	    text-align: center;
	    padding: 0.625rem;
	}

	.seckill-ware img{
	    width: 100%;
	}
	.seckill-ware p{
	    margin: 5px 0 0;
	    font-size: 0.8rem;
	    font-weight: bold;
	}
	.seckill-ware p strong{
	    font-size: 1.25rem;
	}
	.seckill-ware del{
	    font-size: 0.8rem;
	    color: #999;
	}
	
</style>
