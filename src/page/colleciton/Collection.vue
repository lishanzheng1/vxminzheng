<template>
  <div class="collection">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="<"></el-tab-pane>
        <el-tab-pane label="老年人信息">
          <el-card class="box-card" @blur="submit">
            <div slot="header" >
              <span>&nbsp;{{oldName}}</span>
              <el-button style="float: right; padding: 3px 0;width: 20px;height: 25px ;border-color: black" @click="add">+</el-button>
            </div>
            <el-form label-position="left" label-width="0px" class="login-container" :model="ruleForm" ref="ruleForm" >
              <p style="margin-top: 0">姓名</p>
              <el-form-item >
                <el-input type="text" auto-complete="off"  v-model="ruleForm.name"></el-input>
              </el-form-item>
              <hr>
              <p>性别</p>
              <el-form-item >
                <el-radio v-model="sex" label="1">男</el-radio>
                <el-radio v-model="sex" label="2">女</el-radio>
              </el-form-item>
              <hr>
              <p>身份证号</p>
              <el-form-item >
                <el-input type="text" auto-complete="off"  v-model="ruleForm.IDCard"></el-input>
              </el-form-item>
              <hr>
              <p>民族</p>
              <el-form-item >
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <hr>
              <p>文化程度</p>
              <el-form-item >
                <el-radio v-model="culture" label="1">文盲</el-radio>
                <el-radio v-model="culture" label="2">小学</el-radio>
                <el-radio v-model="culture" label="3">初中</el-radio>
                <el-radio v-model="culture" label="4">高中及以上</el-radio>
              </el-form-item>
              <hr>
              <p>是否登记户口</p>
              <el-form-item >
                <el-radio v-model="isRegister" label="1">是</el-radio>
                <el-radio v-model="isRegister" label="2">否</el-radio>
              </el-form-item>
              <hr>
              <p>婚姻及配偶情况</p>
              <el-form-item >
                <el-radio v-model="marry" label="1">未婚</el-radio>
                <el-radio v-model="marry" label="2">已婚且双方健在</el-radio>
                <el-radio v-model="marry" label="3">已婚且一方健在</el-radio>
              </el-form-item>
              <hr>
              <p>生活状况</p>
              <el-form-item >
                <el-radio v-model="life" label="1">良好</el-radio>
                <el-radio v-model="life" label="2">一般</el-radio>
                <el-radio v-model="life" label="3">贫困</el-radio>
              </el-form-item>
              <hr>
              <p>家庭经济来源(可多选)</p>
              <el-form-item >
                <el-checkbox v-for="home in homes" >{{home}}</el-checkbox>
              </el-form-item>
              <hr>
              <p>平均年收入(元)</p>
              <el-form-item >
                <el-input type="text" auto-complete="off"  v-model="ruleForm.totalSum"></el-input>
              </el-form-item>
              <hr>
              <p>家庭救助帮扶情况(可多选)</p>
              <el-form-item >
                <el-checkbox v-for="homeHelp in homeHelps" >{{homeHelp}}</el-checkbox>
              </el-form-item>
              <hr>
              <p>老人常用联系方式</p>
              <el-form-item >
                <el-input type="text" auto-complete="off"  v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <hr>
              <p>陪伴居住情况</p>
              <el-form-item >
                <el-radio v-model="live" label="1">配偶</el-radio>
                <el-radio v-model="live" label="2">近亲属</el-radio>
                <el-radio v-model="live" label="3">独居</el-radio>
                <el-radio v-model="live" label="4">空巢</el-radio>
              </el-form-item>
              <hr>
              <p>日常生活照料人(可多选)</p>
              <el-form-item >
                <el-checkbox v-for="helper in helpers" >{{helper}}</el-checkbox>
              </el-form-item>
              <hr>
              <p>关爱服务需求(可多选)</p>
              <el-form-item >
                <el-checkbox v-for="heart in hearts" >{{heart}}</el-checkbox>
              </el-form-item>
              <hr>
              <p>老年人类别</p>
              <el-form-item >
                <el-checkbox v-for="kind in kinds" >{{kind}}</el-checkbox>
              </el-form-item>
            </el-form>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="子女信息"></el-tab-pane>
      </el-tabs>
      <el-dialog :title="title" :visible.sync="dialogVisible" :close-on-click-modal="false" width="350px">
        <el-form label-width="80px" :rules="rules" :model="formData" ref="formData">
          <el-input auto-complete="off" v-model="formData.id" style="display: none"></el-input>
          <el-form-item label="请输入姓名" prop="name">
            <el-input auto-complete="off" v-model="formData.name"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="dialogVisible = false">取消</el-button>
          <el-button size="mini" type="primary" @click="formSubmit" :loading="submitLoading">确定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
  import {dataAdd } from '../../api'
  export default {
    name: 'login',
    data () {
      return {
        title: '老年人信息',   //弹出框标题
        submitLoading:false,
        dialogVisible:false,
        tabPosition: 'left',
        oldName:"",
        sex: '',//性别单选框
        culture:'',//文化单选框
        isRegister:'',//是否登记户口单选框
        marry:'',//结婚单选框
        life:'',//生活单选框
        live:'',//陪伴独居单选框
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        homes:[
          "打工","种养殖业","政府救助","亲朋救助","农村居民养老保险","其他"
        ],
        homeHelps:[
           "低保",  "建档立卡贫困户","医疗救助","临时救助","老年人福利津贴","残疾人两项补贴","其他救助"
        ],
        helpers:[
          "配偶","近亲属","花钱雇人","社区居家养老","自己","无人照顾","邻里照顾"
        ],
        hearts:[
          "生活照料","生产帮助","精神安慰","医疗保健","法律援助","安全服务","文化娱乐","紧急救助"
        ],
        kinds:[
          "农村留守老年人","分散供养特困老年人","失独老人","空巢老人","低保人","自理","半自理","失能","残疾人","精神病"
        ],

        formData : {
          id: 0,
          name: '',
        },
        ruleForm :{
          name:'',
          IDCard:'',
          totalSum:'',
          phone:''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]
        }
      }
    },
    methods :{
      add () {
        this.formData.name ="";
        this.dialogVisible = true;
      },
      formSubmit () {
        this.dialogVisible = false;
        this.oldName = this.formData.name;
        this.ruleForm.name = this.formData.name;
      },
      //onblur 事件提交
      submit(){
        this.dataAdd1();
      },
      //提交数据的接口
      async dataAdd1 () {
        this.listLoading = true;
        try {
          const result = await dataAdd({
            openid:8888,
            datakey:"olds",
            dataValue:this.oldName,
            data:{
              key:name,
              value:this.oldName
            }
          }, "GET");
          if(result.code == "0"){
            console.log(result,"47");
            /* this.tableData = result.data.list;
             this.total = result.data.count;*/
          } else {
            this.$message.error('字典信息加载失败，请联系管理员');
          }
          this.listLoading = false;
        } catch (e) {
          this.$message.error('系统异常，请联系管理员');
          this.listLoading = false;
        }
      },




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
  }
  p{
    margin-bottom: 10px;
    margin-top: 10px;

  }
</style>
