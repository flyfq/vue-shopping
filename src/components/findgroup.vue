<template>
	<div class="find-group1">
		<div class="find-group1-item mb-625 white-bgcolor" v-for="value of msg1" :key="value.productId">
			<router-link to="">
				<div class="group1-hd clearfix mb-625">
					<div class="pull-left hd-img"><img src="img/user0.png" alt=""></div>
					<div class="pull-left">
						<p class="hd-name">{{value.brandShowName}}</p>
						<span class="hd-time">11月10日前</span>
					</div>
					<a href="" class="pull-right hd-take">+订阅</a>
				</div>
				<div class="group1-bd clearfix">
					<div class="pull-left bd-l">
						<div class="bd-img"><img :src="value.smallImage" alt=""></div>
					</div>
					<div class="pull-right bd-r">
						<h4 class="bd-title">{{value.subTitle}}</h4>
						<span class="bd-intro">1.1万人浏览 2390件宝贝</span>
					</div>
				</div>
			</router-link>
		</div>
		<!-- <div class="find-group1-item mb-625 white-bgcolor">
			<div class="group1-hd clearfix mb-625">
				<div class="pull-left hd-img"><img src="img/user4.png" alt=""></div>
				<div class="pull-left">
					<p class="hd-name">艾佳生活</p>
					<span class="hd-time">10月10日发布</span>
				</div>
				<a href="" class="pull-right hd-take">+订阅</a>
			</div>
			<div class="group1-bd clearfix">
				<div class="pull-left bd-l">
					<div class="bd-img"><img src="https://img10.360buyimg.com/n4/jfs/t19768/164/187787594/229738/a7cbf352/5a6296c9Nf984db1f.jpg" alt=""></div>
				</div>
				<div class="pull-right bd-r">
					<h4 class="bd-title">
						席梦思（Simmons） 原装进口独立袋弹簧 软硬适中 艾乔安娜承托 灰蓝白 1500*2000*280灰蓝白 1500*2000*280
					</h4>
					<span class="bd-intro">1.1万人浏览 2390件宝贝</span>
				</div>
			</div>
		</div> -->
		<!-- <div class="find-group1-item mb-625 white-bgcolor">
			<div class="group1-hd clearfix mb-625">
				<div class="pull-left hd-img"><img src="img/user3.png" alt=""></div>
				<div class="pull-left">
					<p class="hd-name">小虾米</p>
					<span class="hd-time">10月10日发布</span>
				</div>
				<a href="" class="pull-right hd-take">+订阅</a>
			</div>
			<div class="group1-bd clearfix">
				<div class="pull-left bd-l">
					<div class="bd-img"><img src="https:////img11.360buyimg.com/babel/s120x120_jfs/t4642/88/2956500267/418343/5a43d35d/58f4f7d7Nec86838c.jpg!q90.webp" alt=""></div>
				</div>
				<div class="pull-right bd-r">
					<h4 class="bd-title">
						ML权力的游戏史塔克家族徽章印花短袖T恤1700140 黑色AK权力的游戏史塔克家族徽章印花短袖T恤1700140 黑色 L
					</h4>
					<span class="bd-intro">1.1万人浏览 2390件宝贝</span>
				</div>
			</div>
		</div> -->
		<!-- <div class="find-group1-item mb-625 white-bgcolor">
			<div class="group1-hd clearfix mb-625">
				<div class="pull-left hd-img"><img src="img/user2.png" alt=""></div>
				<div class="pull-left">
					<p class="hd-name">每天都坚果一下</p>
					<span class="hd-time">10月10日发布</span>
				</div>
				<a href="" class="pull-right hd-take">+订阅</a>
			</div>
			<div class="group1-bd clearfix">
				<div class="pull-left bd-l">
					<div class="bd-img"><img src="https://img13.360buyimg.com/n7/jfs/t14281/61/824785556/474495/2cb01128/5a3a3de7Nf6b6fe58.jpg" alt=""></div>
				</div>
				<div class="pull-right bd-r">
					<h4 class="bd-title">
						沃隆 每日坚果750g零食果干无添加混合坚果孕妇食品小包装礼盒 成人A款=25g*30袋
					</h4>
					<span class="bd-intro">1.1万人浏览 2390件宝贝</span>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
	export default {
		props:["msg1","dataName"],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.find-group1{}
	.find-group1 .find-group1-item{
	    padding: 0.625rem;
	}
	.find-group1-item .group1-hd{}
	.group1-hd .hd-img{
	    overflow: hidden;
	    width: 37px;
	    height: 37px;
	    display: block;
	    border-radius: 50%;
	    max-width: 100%;
	    border: none;
	    margin-right: 10px;
	    margin-top: 1px;
	}
	.group1-hd .hd-img img{width: 100%;}
	.group1-hd .hd-name{
	    margin: 0;
	    color: #232323;
	    font-weight: bold;
	    font-size: 1.2rem;
	}
	.group1-hd .hd-time{
	    color: #999;
	    font-size: 1rem;
	}
	.group1-hd .hd-take{
	    display: block;
	    padding: 0px 5px;
	    margin-top: 10px;
	    font-size: 1rem;
	}
	.find-group1-item .group1-bd{}
	.group1-bd .bd-l{
	    width: 30%;
	}
	.group1-bd .bd-r{
	    width: 70%;
	    padding-left: 10px;
	}
	.group1-bd .bd-img{
	    padding: 4px;
	}
	.group1-bd .bd-img img{width: 100%;}
	.group1-bd .bd-title{
	    font-size: 1.1rem;
	    color: #232323;
	}
	.group1-bd .bd-intro{
	    color: #999;
	    font-size: 1rem;
	}
</style>
