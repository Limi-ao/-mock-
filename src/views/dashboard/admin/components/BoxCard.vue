
  <!-- <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header"> -->
     <!-- <iframe v-show="ok" src="../../weather.html" frameborder="0" scrolling="auto" @click="handle1"></iframe
     > -->
     
    <!-- </div> -->
   
     

    <!-- <div style="position:relative;">

      
      <div style="padding-top:10px;" class="progress-item"> -->
      <!-- </div>
      
    </div>

  </el-card>
</template>

<script> -->


<!--export default {
  data() {
    return {
      //ok:false,
    }
  },
  methods:{
     
  },
}
 </script>

 <!--<style lang="scss" >
// .box-card-component{
//   .el-card__header {
//     padding: 0px!important;
//   }
// }
// </style>
// <style lang="scss" scoped>
// .box-card-component {
//   .box-card-header {
//     position: relative;
//     height: 30px;
//     line-height:30px;
//     font-size: 14px;
//     padding-left: 0px;
//   }
  
//   .progress-item {
//     margin-bottom: 30px;
//     font-size: 14px;
//   }
// }
// </style>
---------------------------------------------------------------------------------------- -->
<template>
<div>
  <div>
      <span >消息中心</span>
     <span class="svg-container">
          <svg-icon icon-class="tree" />
        </span>
  </div>

  <div class="hh">
  <el-tabs v-model="activeName" @tab-click="handleClick" :data="tableData">
    <el-tab-pane label="用户管理" name="first" prop="neirong">
       用户管理
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
  </el-tabs>
  </div>

  <div class="pages" ref="page-box">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5,10,20]"
        :page-size="size" 
        layout="total,sizes,prev,pager,next,jumper"
        :total="total"
      ></el-pagination>
    </div>
</div> 
</template>

<script>
import {fenye} from '@/api/user.js'
 export default {
    data() {
      return {
        activeName: 'first',
        page:1,
        size:5,
        total:0,
        tableData:[]
      };
    },
    methods: {
      handleClick(){
          fenye({page:this.page,size:this.size}).then(response=>{
            console.log(response)
            this.tableData=response.list
        if (response.code == 0) {
          this.$message.success('发送成功！')
        } else {
          this.$message.error(response.data.msg)
        }
          })
      },
      handleSizeChange(){},
      handleCurrentChange(){}
    }
  };
</script>

<style>

</style>

<style lang="scss" scoped>
 .hh{
   width:300px;
   height: 300px;
   border: 1px solid #09f;
 }
</style>


