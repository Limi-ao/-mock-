<template>
    <div>
       <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header" @click="handlefor">
     消息中心
    </div>
   
    <div class="header-message" v-if="show">
    <div class="heade-messageTop">
        <span class="check-msg" v-bind:class="{'check-msg_checked':ok}" data-code="0"><span class="msg_cont msg_mywork" @click="handelX">提醒消息</span></span> 
        <span class="check-msg" v-bind:class="{'check-msg_checked':no}" data-code="1"><span class="msg_cont" @click="handleT">通知公告</span></span>
    </div>
    <div class="heade-messageCont">
        <div class="contMore myworkMsg" v-show="ok">
            <ul>
                <li>
                    <div class="titles noread dangerBg">新闻</div>
                    <div class="infoCont">
                        <div class="infoContTop"><span>交流会</span><span>2019-05-27 14:00</span><div class="clearBoth"></div></div>
                        <div class="timer">5月9日下午，我院在滨江大楼5楼多功能厅召开2019年创新团队交流会。公司各创新团队的负责人参加</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="contMore infoMsg" v-show="no">
            <ul>
                <li>
                    <div class="titles noread dangerBg">新闻</div>
                    <div class="infoCont">
                        <div class="infoContTop"><span>我院召开2019年创新团队交流会</span><span>2019-05-27 14:00</span><div class="clearBoth"></div></div>
                        <div>5月9日下午，我院在滨江大楼5楼多功能厅召开2019年创新团队交流会。公司各创新团队的负责人参加</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="heade-messageFoot">
        <span>查看更多</span>
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

  </el-card>
  
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show:false,
                ok:true,
                no:false
            }
        },
        methods:{
            handlefor(){
                this.show=!this.show
            },
            handleT(){
              this.no=true
              this.ok=false
            },
            handelX(){
                this.ok=true
                this.no=false
            }
       
        }
    }
</script>

<style lang="scss">
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
  }
  
  .progress-item {
    margin-bottom: 30px;
    font-size: 14px;
  
  }
  .check-msg_checked {
    border-bottom: 1px solid #38a4ed;
}
}
</style>