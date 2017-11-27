<template>
    <div class="menu">
        <div class="menu-item" v-for="item in menu" :class="'iconfont icon-'+item"></div>
    </div>
</template>
<script>
    import Config from './config';
    export default {
        data () {
            return {
                menu: Config.menu,
            }
        },
        name: 'editorToolbar',
    }
</script>
<style lang="less" scoped>
    @import "./iconfont/iconfont.less";
    .menu-item{
        height: 30px;
        min-width: 30px;
        float: left;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        &::before{
            font-size: 18px;
            color: #666;
        }
    }
</style>