<template>
    <div class="search">
        <div class="logo">
            <img src="@/assets/mi.svg" alt="">
        </div>
        <van-search
            class="search-input"
            value="{{ value }}"
            shape="round"
            background=""
            placeholder="搜索商品名称"
        />
        <div class="admin-icon">
            <img src="@/assets/profile.svg" alt="">
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="stylus" scoped>
.search
    display flex
    height 8vh
    background #ffffff
    .logo
        height 100%
        width 8vh
        display flex
        justify-content center
        align-items center
        img
            max-width 60%
            max-height 60% 
    .admin-icon
        height 100%
        width 8vh
        display flex
        justify-content center
        align-items center
        img
            max-width 60%
            max-height 60%
    .search-input
        width 75%
</style>