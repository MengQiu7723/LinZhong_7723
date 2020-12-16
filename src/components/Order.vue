<template>
  <div>
    <Top></Top>
    <!-- 头部信息 -->
    <div class="header">
      <Logo class="logo"></Logo>
      <div class="register logo">
        <h2>下单中心</h2>
      </div>
      <div class="header_right">
        <el-input placeholder="请输入内容" v-model="bookName_Val">
          <template slot="append"
            ><el-button type="primary" icon="el-icon-search" @click="search_button()"
              >搜索</el-button
            ></template
          >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/common/top.vue'
import Logo from '../components/common/Logo.vue'
export default {
  data() {
    return {
      bookName_Val: '',
    }
  },
  created() {
    this.search_val()
  },
  components: {
    Top,
    Logo,
  },
  methods: {
    search_val() {
      if (this.$route.params.bookName_Val) {
        this.bookName_Val = this.$route.params.bookName_Val
        window.sessionStorage.setItem('search', this.bookName_Val)
      }
      this.bookName_Val = sessionStorage.getItem('search')
    },
    search_button() {
      this.$router.push({
        name: 'search',
        params: { bookName_Val: this.bookName_Val },
      })
    },
  },
}
</script>

<style lang="less" scoped>
/* 声明清除浮动的样式 */
.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
/* ie6 7 专门清除浮动的样式*/
.clearfix {
  *zoom: 1;
}

.header {
  margin: 0 auto;
  width: 1180px;
  height: 150px;
}
.logo {
  margin-top: 38px;
}
.register {
  float: left;
  margin-left: 20px;
}
.header_right {
  float: right;
  width: 400px;
  height: 40px;
  margin-top: 55px;
  //   border: 1px solid blue;
}
.header_right .el-input {
  border: 2px solid #14a5ff;
}
.header_right .el-input .el-button {
  background-image: linear-gradient(to right, #14a5ff, #14d2ff) !important;
  // 14a5ff 14d2ff
  color: #ffffff !important;
}
</style>