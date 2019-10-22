<template>
  <div>
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          忘记密码
        </h3>
      </div>
      <!---->
      <el-form-item label="手机号" prop="phoneV">
        <el-input v-model="ruleForm.phoneV" type="text" placeholder="请输入手机号" /><br>
      </el-form-item>

      <el-form-item label="验证码" prop="phoneC">
        <el-input v-model="ruleForm.phoneC" placeholder="请输入验证码">
          <el-button slot="append" :disabled="disabled" @click="getVerifyCode">获取验证码</el-button>
        </el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { yzlogin } from '@/api/user.js'
export default {
  name: 'ForgetPassword',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      disabled: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        phoneV: '',
        phoneC: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phoneV: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        phoneC: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getVerifyCode() {
      yzlogin({
        phoneV: this.ruleForm.pnoneV
      }).then(response => {
        console.log(response)
        if (response.code == 0) {
          this.$message.success('发送成功！')
        } else {
          this.$message.error(response.data.msg)
        }
      })
    }
    // submitForm(){
    //   const {phoneV,phoneC,pass,checkPass}
    //   tjlogin({phoneV:pnoneV,phoneC:phoneC,pass:pass,checkPass:checkPass}).then(response=>{
    //     if(response.code==0){

    //     }else{

    //     }
    //   })
    // }
  }
}
</script>

<style scoped>

</style>
