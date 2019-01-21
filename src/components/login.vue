<template>
	<div>
	<loginheader></loginheader>
	<section class="zyw-container">
	    <div class="login-img"><img src="../assets/img/mylogo.png" alt=""></div>
	    <div class="weui-cells">
	        <div class="weui-cell weui-cell_select weui-cell_select-before">
	            <div class="weui-cell__hd">
	                <select class="weui-select" name="select2">
	                    <option value="1">+86</option>
	                    <option value="2">+80</option>
	                    <option value="3">+84</option>
	                    <option value="4">+87</option>
	                </select>
	            </div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model="userTel">
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__bd">
	                <input class="weui-input" type="password" placeholder="请输入密码" v-model="password">
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells__tips text-right"><a href="">忘记密码？</a></div>
	    <div class="login-btn" @click="checklogin"><a href="javascript:;" class="weui-btn weui-btn_warn theme-bgcolor">登录</a></div>
	</section>
	</div>
</template>

<script>
	import loginheader from "./loginheader";
	import * as types from "../store/types"
	export default {
		components:{loginheader},
		data() {
			return {
				userTel:"13916268176",
				password:"123456"
			};
		},
		methods:{
			checklogin(){
				this.$store.dispatch({
					type:types.CHECK_USER,
					userTel:this.useTel,
					password:this.password,
					}).then(
					(auth)=>{
						// this.$store.state.user.auth
						if(auth){this.$router.push("/user")}else{this.$router.push("/error")}
					}
					)
			}
		}
	}
</script>

<style>
	.login-img{
	    width: 90px;
	    height: 90px;
	    border-radius: 50%;
	    overflow: hidden;
	    border: 1px solid #dedede;
	    padding: 2px;
	    margin: 3rem auto;
	}
	.login-img img{
	    width: 100%;
	    border-radius: 50%;
	}
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
