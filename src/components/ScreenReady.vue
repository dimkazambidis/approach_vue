<template>
  <div id="screen-ready" class="contents">
    <div class="content-center">
      <div id="counter-ready" class="content-ready">{{ readyNum }}</div>
    </div>
  </div>
</template>

<script>
  import {config} from '../config.js'

  export default {
    name: 'ScreenReady',
    data: function() {
      return config;
    },
    methods: {
      readyCounter: function() {
        let count = setInterval( function() {
          ++config.readyNum;
        }, 1000);

        count;

        setTimeout( function() {
          clearInterval( count );

          config.screen = 'ScreenTraining';
          config.readyNum = 0;
        }, 4000);
      }
    },
    mounted() {
      this.readyCounter();
    }
  }
</script>

<style scoped>

</style>
