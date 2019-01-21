<template>
	<div class="index-wares">
		<div class="wares-title"><img src="http://gw.alicdn.com/tfs/TB1Aw9JSVXXXXXQXXXXXXXXXXXX-1500-68.png" alt=""></div>
		<div class="wares-cont">
			<ul class="clearfix">
				<li class="col-sm-6 col-xs-6 ware-box" v-for="item of msg" :key="item.productId">
					<router-link :to="'/item/'+item.productId+'?dataName=' + dataName">
					<a href="##">
						<div class="ware-img">
							<img :src="item.smallImage" alt="">
							<span class="ware-vip">vip专享</span>
						</div>
						<h3 class="ware-title">{{item.productName}}</h3>
						<p class="ware-des">{{item.subTitle}}</p>
						<span class="ware-prince red-color">￥{{item.vipshopPrice}}</span>
					</a>
					</router-link>
				</li>
				<!-- <li class="col-sm-6 col-xs-6 ware-box">
					<a href="item.html">
						<div class="ware-img">
							<img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t14125/285/900232321/14466/12dfc3a3/5a163dd1Ne09fad4b.jpg!q70.jpg" alt="">
							<span class="ware-vip">vip专享</span>
						</div>
						<h3 class="ware-title">Apple 苹果 iPhoneX 全新发布</h3>
						<p class="ware-des">全网通 64G 深空灰</p>
						<span class="ware-prince red-color">￥8088.00</span>
					</a>
				</li> -->
				<!-- <li class="col-sm-6 col-xs-6 ware-box">
					<a href="item.html">
						<div class="ware-img">
							<img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t15811/137/1521616135/14255/a6150285/5a546fadN096d46b4.jpg!q70.jpg" alt="">
							<span class="ware-vip">vip专享</span>
						</div>
						<h3 class="ware-title">Apple 苹果 iPhoneX 全新发布</h3>
						<p class="ware-des">全网通 64G 深空灰</p>
						<span class="ware-prince red-color">￥8088.00</span>
					</a>
				</li> -->
				<!-- <li class="col-sm-6 col-xs-6 ware-box">
					<a href="item.html">
						<div class="ware-img">
							<img src="https://m.360buyimg.com//mobilecms/s276x276_jfs/t5848/205/6830434960/124593/19e83624/596c8b4eN3c8ba6a7.jpg!q70.jpg" alt="">
							<span class="ware-vip">vip专享</span>
						</div>
						<h3 class="ware-title">Apple 苹果 iPhoneX 全新发布</h3>
						<p class="ware-des">全网通 64G 深空灰</p>
						<span class="ware-prince red-color">￥8088.00</span>
					</a>
				</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props:["msg","dataName"],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	ul, ol, li{list-style-type: none;}
	.index-wares{
	    width: 100%;
	}
	.index-wares .wares-title {
	    line-height: 3rem;
	    text-align: center;
	    font-size: 1.3rem;
	    margin-top: 0.625rem;
	}
	.index-wares .wares-title img{
	    width: 100%;
	}
	.index-wares .wares-cont{
	    margin: 0;
	    padding: 0;
	    background: #fff;
	}
	.index-wares .wares-cont .ware-box{
	    width: 49.6%;
	    float: left;
	    padding-bottom: 5px;
	    border-bottom: 1px solid #f4f4f4;
	}
	.index-wares .wares-cont .ware-box:nth-child(2n+1){
	    border-right: 1px solid #f4f4f4;
	}
	.index-wares .wares-cont .ware-box .ware-img{
	    position: relative;
	    padding: 20px;
	}
	.index-wares .wares-cont .ware-box .ware-img img{
	    width: 100%;
	}
	.index-wares .wares-cont .ware-box .ware-img .ware-vip{
	    position: absolute;
	    background: #ff6585;
	    color: #fff;
	    padding: 1px 7px;
	    font-size: 0.8rem;
	    bottom: 0;
	    left: 0;
	}
	.index-wares .wares-cont .ware-box .ware-title{
	    font-size: 1.2rem;
	    line-height: 25px;
	    margin: 0;
	    word-break: break-all;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.index-wares .wares-cont .ware-box .ware-des{
	    margin: 0;
	    line-height: 20px;
	    font-size: 1rem;
	    color: #bbbbbb;
	    word-break: break-all;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.index-wares .wares-cont .ware-box .ware-prince{
	    font-size: 1.1rem;
	}
	
</style>
