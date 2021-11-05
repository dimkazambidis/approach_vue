<template>
  <div id="content-start" class="content-center">
    <div class="content-btn">
      <span id="btn-start" class="btn btn_start"
        v-on:click="toReady"
      >
        {{ translation[lng].startBtn }}
      </span>
    </div>
  </div>
</template>

<script>
  import {config} from '../config.js'

  export default {
    name: 'ScreenStart',
    data: function() {
      return config;
    },
    methods: {
      toReady() {
        config.screen = 'ScreenReady';
      }
    }
  }
</script>

<style scoped>

</style>
