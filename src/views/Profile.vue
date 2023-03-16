<template>
    <div class="nav">
        <div class="nav_avatar" :class="{active: state.navShow}"></div>
        <div class="nav_userName" :style="state.nameStyle">未登入</div>
        <div class="nav_action">
            <div class="action-text">会员码</div>
            <div class="action-icon">
                <van-icon class="icon" name="qr"></van-icon>
                <van-icon class="icon" name="setting-o"></van-icon>
                <van-icon class="icon" name="chat-o"></van-icon>
            </div>
        </div>
    </div>
    <div class="profile">
        <div class="user">
            <van-sticky :offset-top="2">
                <div class="user_avatar" :style="state.avaStyle"><img src="@/assets/profile.svg" alt=""></div>
            </van-sticky>
            <div class="user_info">
                <div class="info-name">未登入</div>
                <div class="info-id">
                    <div class="id">小米ID:1313513543</div>
                    <div class="medal">勋章<van-icon name="arrow"/></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'

const state = reactive({
    navShow: true,
    nameStyle: 'opacity: 0',
    avaStyle: 'height:calc(40px + 10px*(30/30));width:calc(40px + 10px*(30/30))'
})

onMounted(() => {
    window.addEventListener('scroll', () => {
        const top = Math.floor(document.documentElement.scrollTop || document.body.scrollTop)
        if(top < 30) {
            state.nameStyle = `opacity:calc(${top}/30)`
            state.avaStyle = `height:calc(50px - ${top}px);width:calc(50px - ${top}px)`
        }else if(top > 60) {
            state.navShow = false
        }else if(top < 60) {
            state.navShow = true
        }
    })
})

</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
.nav
    height 6vh
    width 100vw
    display flex
    align-items center
    position sticky
    top 0
    .nav_avatar
        flex 1
        height 6vh
        background #fff
        &.active
            opacity 0
    .nav_userName
        background #fff
        flex 2
        height 5vh
        padding-top 1vh
        text-align left
        justify-content center
    .nav_action
        text-align center
        background #fff
        flex 7
        display flex
        align-items center
        height 100%
        .action-text
            flex 2
            text-align right
            font-size 10pt
        .action-icon
            flex 1
            width 12vh
            font-size 15pt
            display flex
            .icon
                display block
                flex 1

.profile
    background #abcdef
    height 150vh
    width 100%
    .user
        // background #fedaeb
        background #fff
        width 100%
        height 10vh
        display flex
        align-items center
        .user_avatar
            margin 1vh
            z-index 999
            img
                max-width 100%
        .user_info
            margin-left 1vh
            .info-name
                font-size 13pt
                margin 0.8vh 0
            .info-id
                height 3vh
                font-size 10pt
                color #7f7f7f
                display flex
                .id
                    background #eeeeee
                    padding 0 0.5em
                    margin-right 1em
                    border-radius 1.5vh
                .medal
                    background #eeeeee
                    padding 0 0.5em
                    border-radius 1.5vh
</style>