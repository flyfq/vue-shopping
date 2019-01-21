<template>
	
		<div class="index-news">
			<div class="news-cont white-bgcolor">
				<strong>最新<em>资讯</em>：</strong>
				<div class="infoBox">
					<ul class="swiper-wrapper">
						<li class="swiper-slide"><a href="#"><span><i>热</i>酷购商城微信版上线啦！</span></a></li>
						<li class="swiper-slide"><a href="#"><span>酷购商城微信版上线啦2！</span></a></li>
						<li class="swiper-slide"><a href="#"><span>马上就要开学了，书包买买买！</span></a></li>
					</ul>
				</div>
				<ul>
					<li><a href=""></a></li>
				</ul>
				<a href="" class="news-more">更多</a>
			</div>
		</div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.index-news{
	    padding: 0.4rem 0.625rem;
	}
	.index-news .news-cont{
	    position: relative;
	    padding: 0 0.625rem;
	    height: 30px;
	    line-height: 30px;
	    border-radius: 4px;
	    overflow: hidden;
	}
	.index-news .news-cont strong{
	    position: absolute;
	    top: 0;
	    left: 0.625rem;
	}
	.index-news .news-cont strong em{
	    font-style: normal;
	    font-size: 0.8rem;
	    color: #fff;
	    padding: 1px 2px 0;
	    margin-left: 2px;
	    border-radius: 2px;
	}
	.index-news .infoBox{
	    display: inline-block;
	}
	.index-news .news-cont ul{
	    list-style-type: none;
	    margin: 0;
	}
	.index-news .news-cont ul li{
	    line-height: 30px;
	}
	.index-news .news-cont ul li span{
	    padding-left: 72px;
	    word-break: break-all;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.index-news .news-cont ul li span i{
	    font-style: normal;
	    font-size: 0.8rem;
	    border: 1px solid #fe7900;
	    color: #fe7900;
	    border-radius: 2px;
	    padding: 0 1px;
	    margin-right: 5px;
	}
	.index-news .news-cont .news-more{
	    position: absolute;
	    top: 0;
	    right: 0;
	    display: inline-block;
	    background: #fff;
	    padding: 0 0.625rem;
	    border-left: 1px solid #f2f2f2;
	}
</style>
