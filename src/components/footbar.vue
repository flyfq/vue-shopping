<template>
	
	<div>
		<footer class="zyw-footer">
		    <div class="zyw-container white-bgcolor clearfix">
		        <div class="weui-tabbar">
				   <router-link class="weui-tabbar__item weui-bar__item--on" to="/list">
					   <div class="weui-tabbar__icon">
					   	<img src="../assets/img/svg/foot-1-1.svg" alt="">
					   </div>
					   <p class="weui-tabbar__label">首页</p>
				   </router-link>
		           
					<router-link class="weui-tabbar__item" to="/productlist">
						<div class="weui-tabbar__icon">
							<img src="../assets/img/svg/foot-2.svg" alt="">
						</div>
						<p class="weui-tabbar__label">分类</p>
					</router-link>
		            
					<router-link class="weui-tabbar__item" to="/finding">
						<div class="weui-tabbar__icon">
							<img src="../assets/img/svg/foot-3.svg" alt="">
						</div>
						<p class="weui-tabbar__label">发现</p>
					</router-link>
		            
					<router-link class="weui-tabbar__item" to="/buycart">
						<span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>
						<div class="weui-tabbar__icon">
							<img src="../assets/img/svg/foot-4.svg" alt="">
						</div>
						<p class="weui-tabbar__label">购物车</p>
					</router-link>
		            
					<router-link  class="weui-tabbar__item" to="/user" >
						<div class="weui-tabbar__icon">
							<img src="../assets/img/svg/foot-5.svg" alt="">
						</div>
						<p class="weui-tabbar__label">我的</p>
					</router-link>
		            
		        </div>
		    </div>
		</footer>
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

</style>
