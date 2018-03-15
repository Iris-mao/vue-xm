<template>
    <div id="navBar">
        <el-menu :default-active="activeMenuIndex"  class="el-menu-vertical-demo" text-color="#fff" unique-opened router>
            <el-menu-item index="/user">
                <i class="iconfont icon-user"></i>
                <span slot="title">User</span>
            </el-menu-item>
            <el-menu-item index="/service">
                <i class="iconfont icon-API"></i>
                <span slot="title">Service</span>
            </el-menu-item>
            <el-menu-item index="/source">
                <i class="iconfont icon-product"></i>
                <span slot="title">Source</span>
            </el-menu-item>
            <el-menu-item index="/app">
                <i class="iconfont icon-app"></i>
                <span slot="title">App</span>
            </el-menu-item>
            <el-menu-item index="/key">
                <i class="iconfont icon-key"></i>
                <span slot="title">Key</span>
            </el-menu-item>
        </el-menu>
      </div>
</template>

<script>
    export default {
        computed: {
            activeMenuIndex () {
                return this.$route.path
            }
        }
    }
</script>

<style lang="scss" scoped>
    $sideWidth: 260px;

    #navBar {
        z-index: 2;
        width: $sideWidth;
        height: 100%;
        background: #3E3E3E;
        flex-shrink: 0;
        color:#B8B8B8;

        span{
            color:#B8B8B8;
        }

        i {
            font-size: 20px !important;
            padding: 0 10px 0 40px;
            display: inline-block;
            width: 75px;
            color:#B8B8B8;
        }
    }

    $menuHeight:70px;

    .el-menu{
      border-right: 0;
      background: #3E3E3E;
    }

    .el-menu-item{
      height: $menuHeight;
      line-height: $menuHeight;
      font-size: 16px;
      border-bottom: 1px solid rgba(107, 108, 109, 0.19);
      padding: 0 10px;
    }

    #navBar .el-menu-item:hover{
        background: #575757 !important;
        cursor: pointer;

        span{
            color: #F36A5A;
        }
    }

    #navBar .el-menu-item.is-active{
        background: #f5f5f5 !important;

        span{
            color: #F36A5A;
        }

        i{
            color: #F36A5A;
        }
    }
</style>

