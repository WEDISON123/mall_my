import Mock from 'mockjs'
import swiperList from './data/swiperList'
import moreList from './data/moreList'
import productList from './data/productList'
import noteList from './data/noteList'

// Mock.setup({
//     timeout: '50-1000' // 随机的延迟时间，模拟请求耗时
// })

Mock.mock(/\/swiperList/, 'get', () => {
    return {
        code: 0,
        result: swiperList
    }
})

Mock.mock(/\/moreList/, 'get', () => {
    return {
        code: 0,
        result: moreList
    }
})

Mock.mock(/\/productList/, 'get', () => {
    return {
        code: 0,
        result: productList
    }
})
Mock.mock(/\/noteList/, 'get', () => {
    return {
        code: 0,
        result: noteList
    }
})
