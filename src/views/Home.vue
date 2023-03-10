<template>
    <Search/>
    <div class="tab">
        <van-tabs animated :change="onChange">
        <van-tab title="推荐">
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :adImg="adImg"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="智能"><van-skeleton title row="4"/>
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :adImg="adImg"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="电视"><van-skeleton title row="3"/>
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :adImg="adImg"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="家电"><van-skeleton title row="5"/>
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :adImg="adImg"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="笔记本"><van-skeleton title row="4"/>
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :adImg="adImg"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import Search from '@/components/Search.vue'
import Recommend from '@/components/Recommend.vue'
import { onMounted, computed } from 'vue'
import { useHomeStore } from '@/store/home'

const homeStore = useHomeStore()
const swiperList = computed(() => homeStore.swiperList)
const moreList = computed(() => homeStore.moreList)
const productList = computed(() => homeStore.productList)
const noteList = computed(() => homeStore.noteList)

onMounted(async () => {
    await homeStore.getSwiperList()
    await homeStore.getMoreList()
    await homeStore.getProductList()
    await homeStore.getnoteList()
})
</script>

<style lang="stylus" scoped>
.pageScroll
    width 100%
    height 80vh
    overflow scroll
</style>