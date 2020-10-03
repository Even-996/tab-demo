<template>
	<div class="tabbar-bottom">
		<router-link to="/home" class="tabbar-list">
			<i class="iconfont icon-shouye"></i>
			<span>首页</span>
		</router-link>
		<router-link to="/sort" class="tabbar-list">
			<i class="iconfont icon-zonghechaxun"></i>
			<span>分类</span>
		</router-link>
		<router-link to="/cart" class="tabbar-list">
			<i class="iconfont icon-cuxiaoguanli"></i>
			<span>购物车</span>
		</router-link>
		<router-link to="/my" class="tabbar-list">
			<i class="iconfont icon-zhanghao"></i>
			<span>我的</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Tabbar'
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.tabbar-bottom {
		display: flex;
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 60px;
		border-top: 1px #eee solid;
	}

	.tabbar-list {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #333;
		font-size: 18px;

	}
	.iconfont{
		font-size: 28px;
	}
	.router-link-active{
	        color:cornflowerblue;
	    }
</style>
