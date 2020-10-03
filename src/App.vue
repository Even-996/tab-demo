<template>
	<div id="app">
		<router-view></router-view>
		<tabbar />
	</div>
</template>

<script>
	import Tabbar from './components/tabbar/tabbar.vue'

	export default {
		name: 'app',
		components: {
			Tabbar
		}
	}
</script>

<style>
	body {
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
