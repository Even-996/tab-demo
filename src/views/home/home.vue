<template>
	<div>
		<header>
			<div class="el-icon-loading"></div>
			<span>我的首页</span>
		</header>
		<div class="block" style="margin-top:3rem;">
		    <el-carousel trigger="click" height="250px">
		      <el-carousel-item v-for="item in 4" :key="item">
		        <h3 class="small">{{ item }}</h3>
		      </el-carousel-item>
		    </el-carousel>
		  </div>
	</div>
</template>

<script>
	export default{
		name:'Home'
	}
</script>

<style scoped>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	
	  .el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #d3dce6;
	  }
	  header{
		  height: 3rem;
		  width: 100%;
		  text-align: center;
		  position: fixed;
		  top: 0;
	  }
	  header span{
		  line-height: 3rem;
		  font-size: 1rem;
	  }
</style>
