<template>
    <div class="mainwrap">
        <p class="page-header">Card list</p>
        <el-row :gutter="20" class="card-content">
            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
  .el-row {
    margin-top: 10px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .el-card{
    .username{
      font-size: 18px;
      font-weight: bold;
      margin-left: 10px;
    }

  }

  .el-checkbox+.el-checkbox {
    margin-left: 0;
  }
  .el-checkbox {
    margin-right: 30px;
  }
</style>
