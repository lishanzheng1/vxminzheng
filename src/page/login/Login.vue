<template>
  <div class="login">
    <el-form label-position="left" label-width="0px" class="login-container" :rules="rules" :model="ruleForm" ref="ruleForm">
      <img src="../../assets/6389ce435db933065befdc698ac99c8 (1).jpg" width="100%"/>
      <p>民政信息采集系统</p>
      <el-form-item prop="loginName">
        <el-input type="text" auto-complete="off" prefix-icon="el-icon-user"  placeholder="账号" v-model="ruleForm.name"></i></el-input>
      </el-form-item>
      <el-form-item prop="loginPwd" style="margin-top: 25px">
        <el-input type="password" auto-complete="off" prefix-icon="el-icon-lock" placeholder="密码" v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="login" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {userLogin } from '../../api'
  export default {
    name: 'login',
    data () {
      return {
        logining: false,
        ruleForm : {
          name: '',
          pwd: '',
          openid : 8888
        },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods :{
      async login () {
        let bool = false;
        this.$refs.ruleForm.validate((valid) => {
          bool = valid;
        });

        if(!bool){
          return;
        }
        this.logining = true;
        try{
          let result = await userLogin(this.ruleForm, "GET");
          console.log(result);
          if(result.status !== "ERROR"){
            this.$router.replace("/home");
          } else {
            this.$message.error('登录失败，请核对账号和密码');
            this.logining = false;
          }
        } catch (e) {
          alert(e.message);
          this.$message.error('系统异常，请联系管理员');
          this.logining = false;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }

  .login{
    height: 100vh;
  }

  .el-main {
    width: 100%;
    height: 100%;

  }
  p {
    text-align: center;
    margin: 30px 0 30px 0;
  }
</style>
