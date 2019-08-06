<template>
  <div class="login">
    <el-main>
      <el-table
              :data="tableData"
              style="width: 100%">
        <el-table-column
                type="selection"
                width="40">
        </el-table-column>
        <el-table-column
                label="日期"
                width="120">
          <!-- <template slot-scope="scope">{{ scope.row.date }}</template>-->
        </el-table-column>
        <el-table-column
                prop="time"
                label="保存时间"
                width="140"
                sortable>
        </el-table-column>
        <el-table-column
                prop="status"
                label="状态"
                width="140"
                sortable>
        </el-table-column>
      </el-table>
    </el-main>

    <el-footer>
      <el-button type="primary" style="margin-left: 20%" @click="back" :loading="logining">回到上一页</el-button>
      <el-button type="danger" @click="deleteMessage" :loading="logining">删除</el-button>
    </el-footer>
  </div>
</template>

<script>
  import {dataList,dataDelete } from '../../api'
  export default {
    name: 'submit',
    data () {
      return {
        logining:false,
        tableData:[],
      }
    },
    methods :{
      //初始化
      async loadDataList () {
        this.listLoading = true;
        try {
          const result = await dataList({openid:8888}, "GET");
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
      //删除  通过id
      deleteMessage(){
        this.dataDelete1();
      },
      async dataDelete1 () {
        this.listLoading = true;
        try {
          const result = await dataDelete({}, "GET");
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
      //返回上一页
      back(){
        this.$router.replace("/home");
      }
    },
    mounted() {
      this.loadDataList();
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-main{
    height: 650px;
  }
</style>
