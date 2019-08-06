<template>
    <div class="update">
        <el-form label-position="left" label-width="0px" class="login-container" :rules="rules" :model="ruleForm" ref="ruleForm">
            <img src="../../assets/微信图片_20190806105701.jpg" width="100%"/>
            <el-form-item >
                <el-input type="password" auto-complete="off" prefix-icon="el-icon-lock"  placeholder="请输入密码" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 25px">
                <el-input type="password" auto-complete="off" prefix-icon="el-icon-lock" placeholder="请确认密码" v-model="ruleForm.checkPass"></el-input>
            </el-form-item>
            <el-form-item style="width:100%">
                <el-button type="primary" style="margin-left: 20%" @click="back" :loading="logining">回到上一页</el-button>
                <el-button type="primary" @click="update('ruleForm')" :loading="logining">修改密码</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {updatePwd } from '../../api'
    export default {
        name: 'update',
        data () {
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                logining: false,
                ruleForm : {
                    checkPass: '',
                    pwd: '',
                    openid : 8888
                },
                rules: {
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请确认密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods :{
            async update () {
                let bool = false;
                this.$refs.ruleForm.validate((valid) => {
                    bool = valid;
                });

                if(!bool){
                    return;
                }
                this.logining = true;
                try{
                    let result = await updatePwd(this.ruleForm, "GET");
                    if(result.code == "0"){
                        this.$router.replace("/home");
                        this.$message({
                            message: '修改密码成功',
                            type: 'success'
                        });
                    } else {
                        this.$message.error('登录失败，请核对账号和密码');
                        this.logining = false;

                    }
                } catch (e) {
                    alert(e.message);
                    this.$message.error('系统异常，请联系管理员');
                    this.logining = false;
                }
            },
            back (){
                this.$router.replace("/home");
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

    .update{
        height: 100vh;
    }

    .el-main {
        width: 100%;
        height: 100%;

    }

</style>
