<template>
	<div>
	<regheader></regheader>
	<section class="zyw-container">
	    <div class="weui-cell mt-2">
	        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
	        <div class="weui-cell__bd">
	            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model="userTel">
	        </div>
	    </div>
	    <div class="weui-cell weui-cell_vcode">
	        <div class="weui-cell__hd">
	            <label class="weui-label">验证码</label>
	        </div>
	        <div class="weui-cell__bd">
	            <input class="weui-input" type="tel" placeholder="请输入验证码">
	        </div>
	        <div class="weui-cell__ft">
	            <button class="weui-vcode-btn theme-color">获取验证码</button>
	        </div>
	    </div>
	    <div class="weui-cell">
	        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
	        <div class="weui-cell__bd">
	            <input class="weui-input" type="password" placeholder="输入密码" v-model="password">
	        </div>
	    </div>
	    <div class="weui-cell">
	        <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
	        <div class="weui-cell__bd">
	            <input class="weui-input" type="password" placeholder="确认密码">
	        </div>
	    </div>
	    <label for="weuiAgree" class="weui-agree">
	        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
	        <span class="weui-agree__text">
	        阅读并同意<a href="javascript:void(0);">《相关条款》</a>
	      </span>
	    </label>
	    <div class="login-btn" @click="reg"><a href="javascript:;" class="weui-btn weui-btn_warn theme-bgcolor">注册</a></div>
	</section>
	</div>
</template>

<script>
	import regheader from "./regheader";
	import * as types from "../store/types";
	export default {
		components:{regheader},
		data() {
			return {
				userTel:"",
				password:""
			};
		},
		methods:{
			reg(){
				this.$http({
					url:'http://localhost:3001/reg',
					params:{
						username:this.userTel,
						password:this.password,
					}
				}).then((res)=>{
					if(res.data.error==0){
						// alert("注册成功")
						this.$store.dispatch(types.CHECK_USER,true)
						this.$router.push("/user")
					}else if(res.data.error==1){
						// alert("该账户已注册请登录")
						// console.log("该账户已注册请登录")
						this.$router.push("/login")
					}
				})
			}
		}
	}
</script>

<style>
	.weui-cells {
	    margin-top: 0;
	}
	.weui-cells:before {
	    border-top: none;
	    height: 0;
	    color: #fff;
	}
	.login-btn{
	    padding: 4rem 0.625rem;
	}
</style>
