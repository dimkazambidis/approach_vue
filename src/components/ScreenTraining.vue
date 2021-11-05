<template>
  <div id="screen-main" class="contents">
    <div class="content-top">
      <!-- Status -->
      <div class="content-status">
        <span v-if="statusFlag" class="content-status__val text-job">
          {{ translation[lng].statusJob }}
        </span>

        <span v-else class="content-status__val text-relax">
          {{ translation[lng].statusRelax }}
        </span>
      </div>
    </div>

    <div class="content-center">
      <!-- Reset Button -->
      <div class="content-reset">
        <span id="btn-reset" class="btn btn_reset"
          v-on:click="reset"
        >
          {{ translation[lng].resetBtn }}
        </span>
      </div>

      <!-- Timer -->
      <div v-bind:class="['content-timer', statusFlag ? 'text-job' : 'text-relax']">
        <span class="content-timer__min">{{ min }}</span> : 
        <span class="content-timer__sec">{{ sec }}</span> : 
        <span class="content-timer__splitsec">{{ splitSec }}</span>
      </div>

      <!-- Job/Relax Button -->
      <div class="content-btn">
        <span class="btn btn_relax"
          v-if="statusFlag"
          v-on:click="relax"
        >
          {{ translation[lng].relaxBtn }}
        </span>

        <span class="btn btn_job"
          v-else
          v-on:click="toReady"
        >
          {{ translation[lng].jobBtn }}
        </span>
      </div>
    </div>

    <div class="content-bottom">
      <!-- Approach Counter -->
      <div class="content-bottom__statistic">
        {{ translation[lng].approach }}: 
        <span v-bind:class="['content-bottom__approach', statusFlag ? 'text-job' : 'text-relax']">
          {{ approachVal }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {config} from '../config.js'

export default {
  name: 'ScreenTraining',
  data() {
    return config;
  },
  methods: {
    job() {
      config.approachVal++;
      config.statusFlag = true;
      this.timerOff();
      this.timerOn();
    },
    relax() {
      config.statusFlag = false;
      this.timerOff();
      this.timerOn();
    },
    reset() {
      config.screen = 'ScreenStart';
      this.timerOff();
      config.approachVal = 0;
    },
    toReady() {
      config.statusFlag = true;
      this.timerOff();
      config.screen = 'ScreenReady';
    },
    timerOn() {
      config.timer = setInterval( ()=> {
        let splitSec = Number(config.splitSec);
        let sec = Number(config.sec);
        let min = Number(config.min);
        splitSec++;

        splitSec = ( splitSec < 100 ) ? String(splitSec) : '00';
        config.splitSec = ( splitSec.length < 2 ) ? ( '0' + splitSec ) : splitSec;

        if ( splitSec == 0 ) {
          sec++;
          sec = ( sec < 60 ) ? String(sec) : '00';
          config.sec = ( sec.length < 2 ) ? ( '0' + sec ) : sec;
        }
                  
        if ( sec == 0 && splitSec == 0 ) {
          min++;
          min = ( min < 60 ) ? String(min) : '00';
          config.min = ( min.length < 2 ) ? ( '0' + min ) : min;
        }
      }, 10);
    },
    timerOff() {
      config.splitSec = config.sec = config.min = '00';
      clearInterval(config.timer);
      config.timer = null;
    }
  },
  mounted() {
    this.job();
  }
}
</script>

<style scoped>

</style>
