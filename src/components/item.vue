<template>
	<div>
	<itemheader></itemheader>
	<section class="zyw-container">
	    <!-- Swiper -->
	    <div class="item-img">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"><img :src="itemlist.smallImage" alt=""></div>
	            <div class="swiper-slide"><img :src="itemlist.image3" alt=""></div>
	            <div class="swiper-slide"><img :src="itemlist.image3" alt=""></div>
	            <div class="swiper-slide"><img :src="itemlist.image3" alt=""></div>
	            <div class="swiper-slide"><img :src="itemlist.image3" alt=""></div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
	    <div class="item-details white-bgcolor clearfix">
	        <h3 class="details-title">{{itemlist.productName}}</h3>
	        <strong class="details-prince theme-color pull-left">￥{{itemlist.vipshopPrice}}</strong>
	        <span class="details-volume pull-right">月销：{{itemlist.newCatId}}件</span>
	    </div>
	    <div class="item-choose weui-cells mt-625">
	        <a class="weui-cell weui-cell_access open-popup" href="javascript:;" data-target="#item_spec">
	            <div class="weui-cell__bd">
	                <p class="choose-text">选择 <span>颜色分类</span></p>
	            </div>
	            <div class="weui-cell__ft choose-des">
	            </div>
	        </a>
	        <div id="item_spec" class="weui-popup__container popup-bottom">
	            <div class="weui-popup__overlay"></div>
	            <div class="weui-popup__modal">
	                <div class="item-spec-layer white-bgcolor">
	                    <div class="spec-head clearfix">
	                        <div class="spec-head-img"><img src="https://m.360buyimg.com/n1/jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg" alt=""></div>
	                        <strong class="spec-head-prince theme-color">￥7800.00</strong>
	                        <p class="spec-head-intro">商品编号：51867</p>
	                    </div>
	                    <div class="spec-info clearfix">
	                        <div class="spec-info-hd">颜色</div>
	                        <div class="spec-info-bd">
	                            <ul>
	                                <li class="active">银色</li>
	                                <li>深空灰色</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div class="spec-info clearfix">
	                        <div class="spec-info-hd">版本</div>
	                        <div class="spec-info-bd">
	                            <ul>
	                                <li>64GB</li>
	                                <li class="active">256GB</li>
	                                <li>64GB+一年碎屏险套餐</li>
	                                <li>256GB+一年碎屏险套餐</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div class="spec-length mb-625">
	                        <div class="weui-cell__bd">
	                            <p class="length-hd">数量</p>
	                        </div>
	                        <div class="weui-cell__ft">
	                            <div class="weui-count">
	                                <a class="weui-count__btn weui-count__decrease"></a>
	                                <input class="weui-count__number" type="number" value="1">
	                                <a class="weui-count__btn weui-count__increase"></a>
	                            </div>
	                        </div>
	                    </div>
	                    <button class="item-layer-button theme-bgcolor white-color" type="submit">确定</button>
	                    <a href="javascript:;" class="close-popup spec-close"><i class="fa fa-close"></i></a>
	                </div>
	            </div>
	        </div>
	        <a class="weui-cell weui-cell_access open-popup" href="javascript:;" data-target="#item_parameter">
	            <div class="weui-cell__bd">
	                <p class="choose-text">产品参数</p>
	            </div>
	            <div class="weui-cell__ft choose-des">
	            </div>
	        </a>
	        <div id="item_parameter" class="weui-popup__container popup-bottom">
	            <div class="weui-popup__overlay"></div>
	            <div class="weui-popup__modal">
	                <div class="item-parameter-layer white-bgcolor">
	                    <h3 class="parameter-title">产品参数</h3>
	                    <table class="table table-condensed parameter-table">
	                        <tr>
	                            <th>品牌</th>
	                            <td>Apple/苹果</td>
	                        </tr>
	                        <tr>
	                            <th>Apple型号</th>
	                            <td>Apple X</td>
	                        </tr>
	                        <tr>
	                            <th>网络类型</th>
	                            <td>无需合约版</td>
	                        </tr>
	                        <tr>
	                            <th>机身颜色</th>
	                            <td>深空灰色 银色</td>
	                        </tr>
	                        <tr>
	                            <th>套餐类型</th>
	                            <td>官方标配</td>
	                        </tr>
	                        <tr>
	                            <th>售后服务</th>
	                            <td>全国联保</td>
	                        </tr>
	                        <tr>
	                            <th>存储容量</th>
	                            <td>256GB 64GB</td>
	                        </tr>
	                    </table>
	                    <button class="item-layer-button theme-bgcolor white-color close-popup" type="submit">完成</button>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="item-serve">
	        <span><i class="fa fa-check-circle-o theme-color"></i> 品质承诺</span>
	        <span><i class="fa fa-check-circle-o theme-color"></i> 七天包退换</span>
	        <span><i class="fa fa-check-circle-o theme-color"></i> 如实描述</span>
	    </div>
	    <div class="item-assess weui-cells mb-625">
	        <a class="weui-cell weui-cell_access" href="javascript:;">
	            <div class="weui-cell__bd">
	                <p class="choose-text">用户评价（<em class="theme-color">0</em>条）</p>
	            </div>
	            <div class="weui-cell__ft choose-des">
	                100%好评
	            </div>
	        </a>
	    </div>
	    <div class="item-precent white-bgcolor" id="item-precent">
	        <h4>图文详情</h4>
	        <span>
	            <img :src="itemlist.smallImage" alt="">
	            <img :src="itemlist.image3" alt="">
	            <img :src="itemlist.image7" alt="">
	            <br>
	        </span>
	    </div>
	</section>
	<itemfoot></itemfoot>
	</div>
</template>

<script>
	import itemheader from "./itemheader";
	import itemfoot from "./itemfoot";
	export default {
		components:{itemheader,itemfoot},
		data() {
			return {
				itemlist:{},
			}
			
		},
		mounted(){
			let id = this.$route.params.id-0;
			let dataName = this.$route.query.dataName;
			
			this.$http({
				url:'http://localhost:3001/item',
				method:"get",
				params:{
					id:id
				}
			}).then(
				res=>this.itemlist = res.data[id-1]
			)
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
	.item-img{
	    width: 100%;
	    overflow: hidden;
	    position: relative;
	}
	.item-img .swiper-slide>img{
	    width: 100%;
	}
	.item-img .swiper-pagination-fraction{
	    width: 60px;
	    right: 10px;
	    left: auto;
	    background: #a6a6a6;
	    background: rgba(0, 0, 0, 0.35);
	    border-radius: 50px;
	    color: #fff;
	    font-size: 1.2rem;
	    text-align: center;
	}
	.item-details{
	    padding: 1rem 0.625rem;
	}
	.item-details .details-title{
	    font-size: 1.28rem;
	    font-weight: bold;
	    line-height: 2rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.item-details .details-prince{
	    font-size: 1.5rem;
	}
	.item-details .details-volume{
	    font-size: 1.22rem;
	    color: #999;
	}
	.item-serve {
	    line-height: 3rem;
	    padding: 0 0.625rem;
	}
	.item-serve span{
	    margin-right: 2rem;
	    font-size: 1rem;
	    color: #777;
	}
	.item-assess .choose-text{color: #444;}
	.item-assess .choose-text em{font-style: normal;}
	
	/*商品规格弹窗*/
	.item-spec-layer{
	    position: relative;
	    width: 100%;
	}
	.item-spec-layer .spec-head{
	    position: relative;
	    padding: 0.625rem;
	    border-bottom: 1px solid #f6f6f6;
	}
	.item-spec-layer .spec-head .spec-head-img{
	    float: left;
	    width: 76px;
	    height: 76px;
	    overflow: hidden;
	    margin-left: 0.625rem;
	}
	.item-spec-layer .spec-head .spec-head-img img{
	    width: 100%;
	}
	.item-spec-layer .spec-head .spec-head-prince{
	    margin-left: 100px;
	    display: block;
	    margin-top: 1rem;
	}
	.item-spec-layer .spec-head .spec-head-intro{
	    margin-left: 100px;
	    color: #999;
	    font-size: 1.2rem;
	    line-height: 2rem;
	    margin-bottom: 0;
	}
	.item-spec-layer .spec-info{
	    border-bottom: 1px solid #f6f6f6;
	    padding: 1rem 0.625rem;
	}
	.item-spec-layer .spec-info .spec-info-hd{
	    color: #999;
	    font-size: 1.2rem;
	}
	.item-spec-layer .spec-info .spec-info-bd{}
	.item-spec-layer .spec-info .spec-info-bd ul{}
	.item-spec-layer .spec-info .spec-info-bd ul li{
	    float: left;
	    border: 1px solid #e5e5e5;
	    border-radius: 4px;
	    color: #777;
	    list-style-type: none;
	    font-size: 1rem;
	    margin-right: 10px;
	    margin-bottom: 10px;
	    padding: 4px 8px;
	}
	.item-spec-layer .spec-length{
	    border-bottom: 1px solid #f6f6f6;
	    padding-left: 0.625rem;
	}
	.item-spec-layer .spec-length .length-hd{
	    margin: 0;
	    color: #999;
	    font-size: 1.2rem;
	}
	.item-layer-button{
	    border: none;
	    display: block;
	    width: 100%;
	    line-height: 56px;
	    position: fixed;
	    bottom: 0;
	}
	.item-spec-layer .spec-close{
	    position: absolute;
	    top: 2px;
	    right: 5px;
	    font-size: 1.5rem;
	    color: #777;
	}
	.item-parameter-layer{
	    height: 400px;
	    overflow-y: auto;
	}
	.item-parameter-layer .parameter-title{
	    margin: 0;
	    font-size: 1.2rem;
	    line-height: 3rem;
	    text-align: center;
	}
	.item-parameter-layer .parameter-table{
	    margin-bottom: 56px;
	}
	.item-parameter-layer .table>tbody>tr>td, .item-parameter-layer .table>tbody>tr>th{
	    border-top: 1px solid #f6f6f6;
	}
	.item-parameter-layer .table>tbody>tr:first-child>td, .item-parameter-layer .table>tbody>tr:first-child>th{
	    border-top: none;
	}
	.item-parameter-layer .parameter-table th{
	    width: 20%;
	    font-size: 1rem;
	    font-weight: 100;
	    line-height: 2rem;
	    color: #777;
	}
	.item-parameter-layer .parameter-table td{
	    font-size: 1rem;
	    line-height: 2rem;
	    padding-left: 10px;
	}
	.item-precent{
	    padding: 5px 0;
	}
	.item-precent h4{
	    text-align: center;
	    font-size: 1.2rem;
	}
	.item-precent img{
	    width: 100%;
	}
</style>
