<template>
  <div>
    <el-row style="height:calc(100vh-120px)">
      <el-col :span="3" class="left">
        <el-menu
          ref="leftMenu"
          style="margin-right:-1px;"
          unique-opened
          :default-active="selectedKey"
          background-color="#3d4749"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="selectMap"
          @close="returnMap"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location" />
              <span>炮台山隧道</span>
            </template>
            <el-menu-item-group title="隧道外">
              <el-menu-item index="dev_GDSXJ_C0_YK4_300">摄像头一</el-menu-item>
              <el-menu-item index="dev_XBSQBB_S01_YK4_350">情报板一</el-menu-item>
              <el-menu-item index="dev_XBSQBB_S02_ZK5_70">情报板二</el-menu-item>
              <el-menu-item index="dev_SKBXHD_SL01_K4_000">四可变信号灯</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="左侧隧道">
              <el-menu-item index="dev_GDSXJ_C5_ZK4_430">摄像头一</el-menu-item>
              <el-menu-item index="dev_GDSXJ_C6_ZK4_580">摄像头二</el-menu-item>
              <el-menu-item index="dev_GDSXJ_C7_ZK4_730">摄像头三</el-menu-item>
              <el-menu-item index="dev_GDSXJ_C8_ZK4_880">摄像头四</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="右侧隧道">
              <el-menu-item index="dev_GDSXJ_C1_YK4_468">摄像头一</el-menu-item>
              <el-menu-item index="dev_GDSXJ_C2_YK4_618">摄像头二</el-menu-item>
              <el-menu-item index="dev_GDSXJ_C3_YK4_768">摄像头三</el-menu-item>
              <el-menu-item index="dev_GDSXJ_C4_YK4_918">摄像头四</el-menu-item>
              <el-menu-item index="dev_CDZSD_L1_YK4_415">车道指示灯一</el-menu-item>
              <el-menu-item index="dev_CDZSD_L2_YK4_415">车道指示灯二</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu" />
              <span slot="title">官山大桥</span>
            </template>
            <el-menu-item-group>
              <template slot="title">大桥</template>
              <el-menu-item index="dev_YKSXJ_QTTV01_K3_100">摄像头一</el-menu-item>
              <el-menu-item index="dev_YKSXJ_QTTV02_K3_680">摄像头二</el-menu-item>
              <el-menu-item index="dev_YKSXJ_CCTVF02_K3_011">摄像头三</el-menu-item>
              <el-menu-item index="dev_YKSXJ_CCTVF03_K3_504">摄像头四</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">大桥延展线</template>
              <el-menu-item index="dev_YKSXJ_CCTVF01_K2_258">摄像头一</el-menu-item>
              <el-menu-item index="dev_GDSXJ_CCTV01_K2_790">摄像头二</el-menu-item>
              <el-menu-item index="dev_GDSXJ_CCTV02_K3_750">摄像头三</el-menu-item>
              <el-menu-item index="dev_GDSXJ_CCTV02_K4_300">摄像头四</el-menu-item>
              <el-menu-item index="dev_MJSQBB_CMS01_K2_750">门架式情报板</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document" />
              <span slot="title">秀山大桥</span>
            </template>
            <el-menu-item-group>
              <template slot="title">大桥</template>
              <el-menu-item index="dev_YKSXJ_CCTVHR01_K5_380">遥控摄像头一</el-menu-item>
              <el-menu-item index="dev_YKSXJ_CCTVHR02_K5_380">遥控摄像头二</el-menu-item>
              <el-menu-item index="dev_YKSXJ_CCTVHR03_K6_306">遥控摄像头三</el-menu-item>
              <el-menu-item index="dev_YKSXJ_CCTVHR04_K6_306">遥控摄像头四</el-menu-item>
              <el-menu-item index="dev_QXG_WD01_K5_712">气象仪</el-menu-item>

            </el-menu-item-group>
            <el-menu-item-group title="大桥延展线">
              <el-menu-item index="dev_WBJCY_VD02_K8_071">微波车辆检视器</el-menu-item>
              <el-menu-item index="dev_MJSQBB_CMS02_K8_150">门架式情报板</el-menu-item>
              <el-menu-item index="dev_GDSXJ_CCTVF18_K8_101">固定摄像头一</el-menu-item>
              <el-menu-item index="dev_GDSXJ_CCTVF17_K7_951">固定摄像头二</el-menu-item>
              <el-menu-item index="dev_GDSXJ_CCTVF16_K7_771">固定摄像头三</el-menu-item>
              <el-menu-item index="dev_GDSXJ_CCTVF15_K7_591">固定摄像头四</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <el-row style="margin:10px 0">
          <el-button type="primary" @click="controlClick">控制设备</el-button>
          <el-button type="primary" @click="handleEdit">修改设备</el-button>
          <el-button type="primary" @click="handleAdd">添加设备</el-button>
          <el-button type="primary" @click="handleDel">删除设备</el-button>
          <el-button type="primary" @click="handleBack">返回首页</el-button>
        </el-row>
        <el-row span="24">
          <iframe id="3dFrame" width="100%" style="min-height:780px" name="myFrame" :src="iframeUrl" frameborder="0" />
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="控制设备" width="30%" :visible.sync="xhdControlVisible" center>
      <el-form label-position="right" label-width="120px">
        <el-form-item label="设备名称:">
          <el-input v-model="selectedKey" style="width:210px;" />
        </el-form-item>
        <el-form-item label="设备状态">
          <el-radio-group v-model="devState">
            <el-radio-button label="1">正常</el-radio-button>
            <el-radio-button label="0">离线</el-radio-button>
            <el-radio-button label="-1">故障</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="设备左行状态:">
          <el-switch
            v-model="sxxhdLeft"
            active-color="#009900"
            inactive-color="#ff4949"
            active-text="可以左转"
            inactive-text="禁止左转"
          />
        </el-form-item>
        <el-form-item label="设备红绿灯:">
          <el-radio-group v-model="sxxhdLight">
            <el-radio-button label="100">绿灯</el-radio-button>
            <el-radio-button label="010">黄灯</el-radio-button>
            <el-radio-button label="001">红灯</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmEditXHDState">改变状态</el-button>
      </span>
    </el-dialog>
    <el-dialog title="控制设备" width="30%" :visible.sync="cameraControlVisible" center>
      <el-form label-position="right" label-width="120px">
        <el-form-item label="设备名称:">
          <el-input v-model="selectedKey" style="width:210px;" />
        </el-form-item>
        <el-form-item label="设备状态">
          <el-radio-group v-model="devState">
            <el-radio-button label="1">正常</el-radio-button>
            <el-radio-button label="0">离线</el-radio-button>
            <el-radio-button label="-1">故障</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmEditSXJState">改变状态</el-button>
      </span>
    </el-dialog>
    <el-dialog title="控制设备" width="30%" :visible.sync="cdzsdControlVisible" center>
      <el-form label-position="right" label-width="120px">
        <el-form-item label="设备名称:">
          <el-input v-model="selectedKey" style="width:210px;" />
        </el-form-item>
        <el-form-item label="设备状态">
          <el-radio-group v-model="dev_CDZSD_state">
            <el-radio-button label="1">正常</el-radio-button>
            <el-radio-button label="0">离线</el-radio-button>
            <el-radio-button label="-1">故障</el-radio-button>
            <el-radio-button label="2">通行</el-radio-button>
            <el-radio-button label="3">禁行</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmEditCDZSDState">改变状态</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改设备" width="40%" center style="top:0px;" :visible.sync="editVisible">
      <el-form label-position="right" label-width="80px" :model="editItemInfo">
        <el-form-item label="设备坐标">
          x : <el-input-number v-model="editItemInfo.position.x" :precision="3" :step="100" />
          y : <el-input-number v-model="editItemInfo.position.y" :precision="3" :step="10" />
          z : <el-input-number v-model="editItemInfo.position.z" :precision="3" :step="1" />
        </el-form-item>
        <el-form-item label="设备缩放">
          x : <el-input-number v-model="editItemInfo.scale.x" :precision="3" :step="1" />
          y : <el-input-number v-model="editItemInfo.scale.y" :precision="3" :step="1" />
          z : <el-input-number v-model="editItemInfo.scale.z" :precision="3" :step="1" />
        </el-form-item>
        <el-form-item label="设备角度">
          x : <el-input-number v-model="editItemInfo.rotation.x" :precision="3" :step="1" />
          y : <el-input-number v-model="editItemInfo.rotation.y" :precision="3" :step="1" />
          z : <el-input-number v-model="editItemInfo.rotation.z" :precision="3" :step="1" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="resetItem">重置位置</el-button>
        <el-button type="primary" @click="confirmEdit">确认修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data() {
    return {
      key: '',
      iframeUrl: '/pages/index.html',
      xhdControlVisible: false,
      cameraControlVisible: false,
      cdzsdControlVisible: false,
      editVisible: false,
      sxxhdLeft: false,
      sxxhdLight: '100',
      devState: '1',
      dev_CDZSD_state: '1',
      editItemInfo: {
        position: {},
        scale: {},
        rotation: {}
      },
      editItemInfoBackUp: {},
      selectedKey: '',
      selectedKeyFlag: false,
      num: 0
    }
  },
  mounted() {
    window.selectAreaInfo = this.selectAreaInfo
    window.handleSelect = this.handleSelect
  },
  methods: {
    // 添加设备
    handleAdd() {

    },
    // 删除设备
    handleDel() {
      if (this.selectedKey) {
        this.$confirm('确认删除吗', '警告', {
          type: 'warning'
        }).then(() => {
          window.Object3D.WT3DObj.destoryObj(this.selectedKey)
          if (window.Object3D.modelBussiness.LocationObjTwo(this.selectedKey)) {
            this.$message({
              message: '删除失败',
              type: 'error'
            })
          } else {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
          }
        }).catch(() => {
          this.$message('已取消')
        })
      } else {
        this.$message('您还没有选择设备')
      }
    },
    // 后退
    handleBack() {
      this.$refs.leftMenu.close(this.key)
      this.key = ''
      this.iframeUrl = '/pages/index.html'
    },
    // 控制设备
    controlClick() {
      if (this.selectedKey) {
        if (this.selectedKey === 'dev_SKBXHD_SL01_K4_000') {
          this.xhdControlVisible = true
        } else if (this.selectedKey.indexOf('dev_GDSXJ_') >= 0) {
          this.cameraControlVisible = true
        } else if (this.selectedKey.indexOf('dev_CDZSD_') >= 0) {
          this.cdzsdControlVisible = true
        } else {
          this.$message({
            type: 'info',
            message: '当前设备功能暂时没有完成，请等待...'
          })
        }
      } else {
        this.$message('您还没有选择设备')
      }
    },
    // 信号灯点击时间
    confirmEditXHDState() {
      if (this.devState === '0' || this.devState === '-1') {
        window.Object3D.modelBussiness.changeDevState(this.selectedKey, '1')
        const _this = this
        setTimeout(() => {
          window.Object3D.modelBussiness.changeDevState(_this.selectedKey, _this.devState)
        }, 1000)
        // this.$nextTick(()=>{
        //     Object3D.modelBussiness.changeDevState(_this.selectedKey,_this.devState);
        // })
      } else {
        window.Object3D.modelBussiness.changeDevState(this.selectedKey, '1')
        let state
        const _this = this
        if (this.sxxhdLeft) {
          state = '11'
        } else {
          state = '10'
        }
        state += this.sxxhdLight
        this.$nextTick(() => {
          window.Object3D.modelBussiness.changeDevState(_this.selectedKey, state)
        })
      }
      this.xhdControlVisible = false
    },
    // 摄像机点击事件
    confirmEditSXJState() {
      if (this.devState === '1') {
        window.Object3D.modelBussiness.changeDevState(this.selectedKey, this.devState)
      } else {
        window.Object3D.modelBussiness.changeDevState(this.selectedKey, '1')
        const _this = this
        this.$nextTick(() => {
          window.Object3D.modelBussiness.changeDevState(_this.selectedKey, _this.devState)
        })
      }
      this.cameraControlVisible = false
    },
    // 车道指示灯点击事件
    confirmEditCDZSDState() {
      if (this.dev_CDZSD_state === '1') {
        window.Object3D.modelBussiness.changeDevState(this.selectedKey, this.dev_CDZSD_state)
      } else {
        window.Object3D.modelBussiness.changeDevState(this.selectedKey, '1')
        const _this = this
        this.$nextTick(() => {
          window.Object3D.modelBussiness.changeDevState(_this.selectedKey, _this.dev_CDZSD_state)
        })
      }
      this.cdzsdControlVisible = false
    },
    // 修改设备
    handleEdit() {
      if (this.selectedKey) {
        this.editVisible = true
        this.editItemInfo = window.Object3D.modelBussiness.getObjParam(this.selectedKey)
        if (!this.selectedKeyFlag) {
          this.editItemInfoBackUp = window.Object3D.modelBussiness.getObjParam(this.selectedKey)
          this.selectedKeyFlag = true
        }
      } else {
        this.$message({
          type: 'warning',
          message: '您还没有选择设备'
        })
      }
    },
    selectAreaInfo(name) {
      if (name.indexOf('light_ptssd') >= 0) {
        this.key = '1'
        this.$refs.leftMenu.open(this.key)
        this.iframeUrl = '/pages/shuidao.html'
      } else if (name.indexOf('light_gsdq') >= 0) {
        this.key = '2'
        this.$refs.leftMenu.open(this.key)
        this.iframeUrl = '/pages/gsdq.html'
      } else if (name.indexOf('light_xsdq') >= 0) {
        this.key = '3'
        this.$refs.leftMenu.open(this.key)
        this.iframeUrl = '/pages/xsdq.html'
      }
    },
    // 重置设备位置
    resetItem() {
      window.Object3D.modelBussiness.changeObjParam(this.selectedKey, this.editItemInfoBackUp.position, this.editItemInfoBackUp.scale, this.editItemInfoBackUp.rotation)
    },
    confirmEdit() {
      window.Object3D.modelBussiness.changeObjParam(this.selectedKey, this.editItemInfo.position, this.editItemInfo.scale, this.editItemInfo.rotation)
    },
    // 点击父菜单选择区域
    selectMap(key) {
      if (key === this.key) {
        return
      } else {
        this.key = key
      }
      switch (key) {
        case '1':
          this.iframeUrl = '/pages/shuidao.html'
          break
        case '2':
          this.iframeUrl = '/pages/gsdq.html'
          break
        default:
          this.iframeUrl = '/pages/xsdq.html'
      }
    },
    returnMap() {
      this.selectedKey = ''
    },
    handleSelect(key) {
      this.selectedKey = key
      this.selectedKeyFlag = false
      if (window.Object3D.modelBussiness.LocationObj(key)) {
        window.Object3D.modelBussiness.LocationObj(key)
      } else {
        this.$notify({
          title: '警告',
          message: '找不到设备'
        })
      }
    }
  }
}
</script>

<style scoped>
.left{
    height:calc(100vh - 85px);
    background-color:#3d4749;
    overflow:scroll;

}
.left::-webkit-scrollbar {
    display: none;
}
</style>
