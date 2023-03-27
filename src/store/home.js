import { defineStore } from "pinia";
import { 
    getSwiperList, 
    getMoreList, 
    getProductList, 
    getnoteList, 
    getcommentList, 
    getwaterfallL,
    getwaterfallR,
} from '@/service/home.js'

export const useHomeStore = defineStore('home', {
    state: () => { // 中央状态
        return {
            swiperList: [],
            moreList: [],
            productList: [],
            noteList: [],
            commentList: [],
            waterfallL: [],
            waterfallR: []
        }
    },
    actions: { // 接管了数据请求
        // 走接口
        async getSwiperList() {
            const { result } = await getSwiperList()
            this.swiperList = result
        },
        async getMoreList() {
            const { result } = await getMoreList()
            this.moreList = result
        },
        async getProductList() {
            const { result } = await getProductList()
            this.productList = result
        },
        async getnoteList() {
            const { result } = await getnoteList()
            this.noteList = result
        },
        async getcommentList() {
            const { result } = await getcommentList()
            this.commentList = result
        },
        async getwaterfallL() {
            const { result } = await getwaterfallL()
            this.waterfallL = result
        },
        async getwaterfallR() {
            const { result } = await getwaterfallR()
            this.waterfallR = result
        }
    }
})