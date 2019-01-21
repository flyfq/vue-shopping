<template>
	
	<form method="post" name="cart_form" target="_self" id="cart_form" action="">
		<cartheader></cartheader>
	<section class="zyw-container te">
	        <!--list-->
	        <div class="commodity_list_box">
				<carttop></carttop>
				<cartbox></cartbox>
	        </div>
	        <!-- end -->
	</section>
	<count></count>
	</form>
	
	
</template>

<script>
	import carttop from "./carttop";
	import cartbox from "./cartbox";
	import count from "./count";
	import cartheader from "./cartheader";
	export default {
		data() {
			return {
				
			};
		},
		components:{carttop,cartbox,count,cartheader}
	}
</script>

<style>


 .te{
    border-top: 45px solid transparent;
}

</style>
