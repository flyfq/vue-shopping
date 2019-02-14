<template>
	<section class="zyw-container">
		<findheader></findheader>
		<findcart></findcart>
		<banner></banner>
		<findgroup :msg1="msg1" dataName="find"></findgroup>
	</section>
</template>

<script>
	import findheader from "./findheader";
	import findcart from "./findcart";
	import banner from "./banner";
	import findgroup from "./findgroup";
	let top =0;
	export default {
		data() {
			return {
				msg1:[]
			};
		},
		components: {
			findheader,findcart,banner,findgroup
		},
		mounted() {
			this.$http({
				url:"http://localhost:3001/finding",
				method:"get"
			}).then(
			  res=>this.msg1=res.data
			)
		},
		updated(){document.documentElement.scrollTop=top;},
		destroyed(){top=document.documentElement.scrollTop;}
	}
</script>

<style>

</style>
