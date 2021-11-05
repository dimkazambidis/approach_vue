<template>
	<div id="app" class="contents">
		<component v-bind:is="screen"></component>
	</div>
</template>

<script>
	import {config} from './config.js'
	import ScreenStart from './components/ScreenStart.vue'
	import ScreenReady from './components/ScreenReady.vue'
	import ScreenTraining from './components/ScreenTraining.vue'

	export default {
			name: 'App',
			data() {
					return config;
			},
			components: {
					ScreenStart,
					ScreenReady,
					ScreenTraining
			}
	}
</script>

<style lang="sass">
	@import './assets/sass/style.sass'	
</style>
