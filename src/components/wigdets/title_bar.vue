<template>
  <div id="titleBar">
    <div class="title-part">
      <img class="icon" src="../../assets/img/logo.png" alt="logo"/>
      <span>Management System</span>
    </div>
    <div class="userInfo">
    </div>
  </div>
</template>

<style lang="scss" scoped>

  $sideWidth: 300px;
  $titleHeight : 70px;

  #titleBar{
    height: $titleHeight;
    min-width: 1300px;
    background: linear-gradient(to right, #2E2E2E , #545454); /* 标准的语法 */

    .title-part{
      float: left;
      height: $titleHeight;
      line-height: $titleHeight;
      text-align: center;
      padding-left: 20px;

      .icon {
        line-height: $titleHeight;
        vertical-align: middle;
        margin:0 10px 15px 0;
        width: 36px;
      }

      span{
        color: #fff;
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
</style>
