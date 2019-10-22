
    <!-- <div>
     <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header"> -->
     <!-- <iframe v-show="ok" src="../../weather.html" frameborder="0" scrolling="auto" @click="handle1"></iframe
     > -->
     <!-- <span class="bussiness">施工/封道/交通管制</span>
     <span class="refreshPanel more">更多 ></span>
     <span class="iconfont iconshuaxin refreshPanel morerefreshPanel"></span>
    </div>
   
    <div class="newSecondContent">
                    <div class="secondCHead" >
                        <span class="activeNow" data-code="503">施工</span>
                        <span data-code="505">分流</span>
                        <span data-code="504">封道</span>
                        <span data-code="512">路损抢修</span>
                    </div>
                     <div class="secondCContent">
                        <ul>
                        </ul>
                    </div>
    </div>
     -->

    <!-- <div style="position:relative;">

      
      <div style="padding-top:10px;" class="progress-item">
      </div>
      
    </div> -->

  <!-- </el-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" >

.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
    
  .box-card-header {
    position: relative;
    height: 30px;
    line-height:30px;
    font-size: 14px;
    padding-left: 0px;
    .bussiness{
      font-size: 14px;
      margin-left:16px;
      padding-left:10px;
      position: relative; 
    }
   .bussiness::before{
      content: '';
      display: inline-block;
      width: 3px;
      height: 16px;
      background: #38a4ed;
      position: absolute;
      top:2px;
      left:0;
    }
   .refreshPanel{
      float:right;
      margin-right:16px;
      cursor: pointer;
      color: #666;
      font-size: 12px;
    }
    .refreshPanel::after{
       content: '';
        clear: both;
   }
  }
  .newSecondContent{
  .secondCHead{
    margin-top:15px;
    
    height: 30px;
    line-height: 30px;
 }
 .secondCHead span{
  height: 30px;
  display: inline-block;
  padding: 0 15px;
  cursor: pointer;
}
.secondCHead .activeNow{
  border-bottom: 3px solid #38a4ed;
}
.secondCContent{
  min-height: 190px;
  overflow: hidden;
  padding: 0;
  position: relative;
  margin: 5px 0 0;
}
.secondCContent ul{
  margin-bottom: 0;
  position: absolute;
  top:0px;
  left:0px;
  width: 100%;
  overflow: hidden;
}}

  
  .progress-item {
    margin-bottom: 30px;
    font-size: 14px;
  }
}
</style> -->

<template>
  <div>
     <el-card class="box-card-component" style="margin-left:8px;">
            <div slot="header" class="box-card-header"> 
            <!-- <iframe v-show="ok" src="../../weather.html" frameborder="0" scrolling="auto" @click="handle1"></iframe
            > -->
            <span class="bussiness">施工/封道/交通管制</span>
            <span class="refreshPanel more">更多 ></span>
            <span class="iconfont iconshuaxin refreshPanel morerefreshPanel"></span>
            </div>
            
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="施工" name="first">施工</el-tab-pane>
                <el-tab-pane label="封道" name="second">封道</el-tab-pane>
                <el-tab-pane label="交通管制" name="third">交通管制</el-tab-pane>
              </el-tabs>
            
     </el-card>
  </div>
</template>

<script>
  export default {
     data(){
        return {
        activeName: 'first'
      }
     }
  }
</script>

<style lang="scss" >

.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>

<style lang="scss" scoped>
.box-card-component {
    
  .box-card-header {
    padding: 0px !important;
    position: relative;
    height: 30px;
    line-height:30px;
    font-size: 14px;
    padding-left: 0px;
    .bussiness{
      font-size: 14px;
      margin-left:16px;
      padding-left:10px;
      position: relative; 
    }
   .bussiness::before{
      content: '';
      display: inline-block;
      width: 3px;
      height: 16px;
      background: #38a4ed;
      position: absolute;
      top:2px;
      left:0;
    }
   .refreshPanel{
      float:right;
      margin-right:16px;
      cursor: pointer;
      color: #666;
      font-size: 12px;
    }
    .refreshPanel::after{
       content: '';
        clear: both;
   }
  }
}
</style>