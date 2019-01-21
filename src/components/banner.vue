<template>
			<swipe class="my-swipe" :speed="200" :auto="1000">
				<swipe-item class="slide1"><img src="https://img.alicdn.com/imgextra/i4/2590951958/TB2Fz6XfgMPMeJjy1XbXXcwxVXa_!!2590951958.jpg" alt=""></swipe-item>
				<swipe-item class="slide2"><img src="https://img.alicdn.com/imgextra/i4/2590951958/TB2z.NKbaagSKJjy0FgXXcRqFXa_!!2590951958.jpg" alt=""></swipe-item>
				<swipe-item class="slide3"><img src="https://img.alicdn.com/imgextra/i4/2590951958/TB2ZxVCbjihSKJjy0FeXXbJtpXa_!!2590951958.jpg" alt=""></swipe-item>
			</swipe>
		
</template>

<script>
	
	import "vue-swipe/dist/vue-swipe.css";
	import { Swipe, SwipeItem } from 'vue-swipe';
	
	export default {
		data() {
			return {
				
			};
		},
	components: {
		'swipe': Swipe,
		'swipe-item': SwipeItem
  }
	}
</script>


<style>
/* .swiper-slide img{
    width: 100%;
}
.swiper-pagination-bullet-active {
    opacity: 1;
} */

.my-swipe {
  height: 180px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.my-swipe img{width: 100%;vertical-align:middle}
 
.slide1 {
  /* background-color: #0089dc; */
  color: #fff;
}
 
.slide2 {
  /* background-color: #ffd705; */
  color: #000;
}
 
.slide3 {
  /* background-color: #ff2d4b; */
  color: #fff;
}
</style>


