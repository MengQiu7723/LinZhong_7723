<template>
  <div>
    <Top></Top>
    <div class="header">
      <div class="header_left">
        <img src="../assets/images/logo.png" alt="" />
      </div>
      <div class="header_left_1">
        <span class="img1"
          ><img src="../assets/images/logo1.png" alt=""
        /></span>
        <span class="img2"
          ><img src="../assets/images/logo2.png" alt=""
        /></span>
      </div>
      <div class="header_left_2">
        <h1>个人中心</h1>
      </div>
      <div class="header_right">
        <el-input placeholder="请输入内容" v-model="input2">
          <template slot="append"
            ><el-button type="primary" icon="el-icon-search"
              >搜索</el-button
            ></template
          >
        </el-input>
      </div>
    </div>
    <el-main>
      <div class="user">
        <div class="headportrait">
          <img src="../assets/images/头像.png" alt="" />
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import Top from "../components/top.vue";
export default {
  data() {
    return {
      input2: "",
    };
  },
  components: {
    Top,
  },
  methods: {
    search_button() {
      this.$router.push("/search");
    },
  },
};
</script>


<style lang="less" scoped>
.header {
  width: 100%;
  height: 150px;
  //   background: pink;
}
.header_left {
  width: 800px;
  height: 150px;
  //   border: 1px solid red;
  margin-left: 50px;
}
.header_left_1 {
  width: 200px;
  height: 80px;
  position: absolute;
  left: 460px;
  top: 70px;
  //   border: 1px solid blue;
}
.header_left img {
  position: absolute;
  top: 70px;
  left: 360px;
  width: 80px;
  height: 80px;
}
.header_left_1 .img1 img {
  position: absolute;
  top: 10px;
}
.header_left_1 .img2 img {
  position: absolute;
  bottom: 10px;
}
.header_left_2 {
  width: 200px;
  height: 80px;
  position: absolute;
  left: 550px;
  top: 70px;
}
.header_left_2 h1 {
  position: absolute;
  left: 50px;
  font-family: "微软雅黑";
  font-weight: normal;
}
.header_right {
  position: absolute;
  right: 380px;
  top: 90px;
  width: 400px;
  height: 40px;
  //   border: 1px solid blue;
}
.header_right .el-input {
  border: 2px solid #14a5ff;
}
.header_right .el-input .el-button {
  background: #14a5ff !important;
  color: #ffffff !important;
}
.el-main {
  background: #f4f4f4;
}
.user {
  position: relative;
  width: 340px;
  height: 340px;
  //   border: 1px solid red;
  left: 340px;
  background: url(../assets/images/名片.png) no-repeat;
  background-size: cover;
}
.headportrait {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 1px solid red;
  top: 60px;
  left: 110px;
  overflow: hidden;
  border-radius: 50%;
}
.headportrait img {
  width: 100%;
  height: 100%;
}
</style>