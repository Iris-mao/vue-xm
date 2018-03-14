<template>
  <div id="app">
    <!-- 转到路由配置文件 -->
    <router-view/>
  </div>
</template>

<style>
    @import url('./assets/style/base.scss');

    #app {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>
