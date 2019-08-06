<template>
  <div class="index">
    <el-form label-position="left" label-width="0px" class="login-container"  ref="ruleForm">
      <img src="../../assets/6389ce435db933065befdc698ac99c8 (1).jpg" width="100%"/>
      <el-row class="departure">
        <el-col :span="12">
          <img src="../index/image/微信图片_20190806105621.png" @click="collection" >
          <p>开始采集</p>
        </el-col>
        <el-col :span="12">
          <img src="../index/image/微信图片_20190806105638.png" @click="messageSubmit">
          <p>去提交</p>
        </el-col>
      </el-row>
      <el-row class="departure">
        <el-col :span="12">
          <img src="../index/image/微信图片_20190806105610.png" @click="update" >
          <p>修改密码</p>
        </el-col>
        <el-col :span="12">
          bb
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return{

      }
    },
    methods:{
      collection () {
        this.$router.replace("/home/colleciton");
      },
      update(){
        this.$router.replace("/home/updatepassword");
      },
      messageSubmit () {
        this.$router.replace("/home/messagesubmit");
      }
    },
    mounted() {


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .departure {
    margin: 20px;
  }
  .el-col img {
    width: 80%;
  }
  .el-col p {
    margin-left:25%
  }

</style>
