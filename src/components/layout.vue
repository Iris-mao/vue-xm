<template>
    <div class="management">
        <title-bar></title-bar>
        <div id="main">
            <side-bar></side-bar>
            <div id="content">
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import titleBar from "./wigdets/title_bar.vue";
import sideBar from "./wigdets/side_bar.vue";
export default {
  components: {
    titleBar,
    sideBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .management {
         width: 100%;
         height: 100%;
    }

    #main {
        position: relative;
        min-width: 1300px;
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        background-color: #f0f2f5;

        #content{
            width: 100%;

            .container {
                background-color: #f5f5f5;
                height: 100%;
                -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
                box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05) inset;
            }

            .bottom{
                text-align: center;
                color: rgba(0,0,0,.45);
                font-size: 14px;
                height: 40px;
                line-height: 40px;
            }
        }
    }
</style>
