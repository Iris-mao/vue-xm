<template>
    <div class="mainwrap">
        <p class="page-header">Card list</p>
        <el-row :gutter="20" class="card-content">
            <el-col :span="6">
                <el-card class="card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-switch active-color="#13ce66" inactive-color="#f0f2f5" v-model="value1"></el-switch>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-edit" @click="addForm"></i>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-switch active-color="#13ce66" inactive-color="#f0f2f5" v-model="value1"></el-switch>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-edit" @click="addForm"></i>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog title="添加页面" center :visible.sync="dialogVisible" width="600px">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
        </el-dialog>
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

<script>
    export default {
        data() {
            return {
                value1: true,
                dialogVisible:false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods:{
            addForm(){
              this.dialogVisible = true
            }
        }
    };
</script>
