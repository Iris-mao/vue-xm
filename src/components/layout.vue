<template>
    <div class="management">
        <title-bar></title-bar>
        <div id="main">
            <side-bar></side-bar>
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
  }
</style>
