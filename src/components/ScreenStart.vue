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
    .btn.btn_start {
        font-size: 3em;
        height: 56px;
        -webkit-border-radius: 28px;
                border-radius: 28px;
        color: #22e86b;
        background-color: transparent;
        border: 2px solid #22e86b;
    }
</style>
