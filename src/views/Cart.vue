<template>
    <div class="nav">
        <div class="title">购物车</div>
        <div class="edit">编辑</div>
    </div>
    <div class="container">
        <div class="cart"></div>
        <div class="waterfall">
            <div class="title">- 猜你喜欢 -</div>
            <div class="waterfallBox">
                <div class="waterfall a"><Waterfall :list="waterfallL"/></div>
                <div class="waterfall b"><Waterfall :list="waterfallR"/></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Waterfall from '../components/Waterfall.vue'
import { onMounted, computed } from 'vue'
import { useHomeStore } from '@/store/home'

const cartStore = useHomeStore()
const waterfallL = computed(() => cartStore.waterfallL)
const waterfallR = computed(() => cartStore.waterfallR)
onMounted(async () => {
    await cartStore.getwaterfallL()
    await cartStore.getwaterfallR()
})
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
.nav
    background #fff
    height 7vh
    width 100vw
    display flex
    position sticky
    top 0
    z-index 99
    .title
        text-align center
        font-size 14pt
        padding-top 1.5vh
        position relative
        left 42vw
    .edit
        text-align center
        font-size 12pt
        padding-top 2vh
        position relative
        left 70vw
.container
    background #eee
    .cart
        // background #fedcba
        height 30vh
    .waterfall
        .title
            margin 5vh 0
            text-align center
        .waterfallBox
            width 100vw
            display flex
            .a
                flex 1
                text-align center
            .b
                flex 1
                text-align center
</style>