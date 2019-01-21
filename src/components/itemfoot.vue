<template>
	<footer class="zyw-footer">
		<div class="zyw-container white-bgcolor clearfix">
			<div class="col-sm-2 col-xs-2">
				<a href="javascript:;" class="weui-tabbar__item">
					<div class="weui-tabbar__icon">
						<img src="../assets/img/svg/item-1.svg" alt="">
					</div>
					<p class="weui-tabbar__label">店铺</p>
				</a>
			</div>
			<div class="col-sm-2 col-xs-2">
				<a href="cart.html" class="weui-tabbar__item">
					<span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>
					<div class="weui-tabbar__icon">
						<img src="../assets/img/svg/item-2.svg" alt="">
					</div>
					<p class="weui-tabbar__label">购物车</p>
				</a>
			</div>
			<div class="col-sm-2 col-xs-2">
				<a href="javascript:;" class="weui-tabbar__item">
					<div class="weui-tabbar__icon">
						<img src="../assets/img/svg/item-3.svg" alt="">
					</div>
					<p class="weui-tabbar__label">收藏</p>
				</a>
			</div>
			<div class="col-sm-3 col-xs-3">
				<a href="" class="footer-btn footer-warning">立即购买</a>
			</div>
			<div class="col-sm-3 col-xs-3">
				<a href="" class="footer-btn footer-danger">加入购物车</a>
			</div>
		</div>
	</footer>
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
	.zyw-footer .col-sm-2, .zyw-footer .col-sm-3, .zyw-footer .col-xs-2, .zyw-footer .col-xs-3{
	    padding: 0;
	    border-top: 1px solid #f6f6f6;
	}
	.zyw-footer .footer-btn{
	    line-height: 56px;
	    display: inline-block;
	    width: 100%;
	    text-align: center;
	    color: #fff;
	    font-size: 1.25rem;
	}
	.zyw-footer .footer-warning{
	    background: orange;
	}
	.zyw-footer .footer-danger{
	    background: red;
	}
</style>
