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
      <div class="text">
        <div class="user">
          <div class="headportrait">
            <img src="../assets/images/头像1.jpg" alt="" />
          </div>
          <div class="username">
            <h1>35_threefive1034879</h1>
          </div>
          <div class="credit">
            <h1>信用等级</h1>
          </div>
          <div class="grade">
            <h1>极好</h1>
          </div>
        </div>
        <div class="wallet"></div>
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
// .body {
//   background-color: #f4f4f4;
// }
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
  background-image: linear-gradient(to right, #14a5ff, #14d2ff) !important;
  // 14a5ff 14d2ff
  color: #ffffff !important;
}
.el-main {
  background: #f4f4f4;
}
.text {
  width: 1190px;
}
.user {
  position: relative;
  width: 340px;
  height: 340px;
  //   border: 1px solid red;
  left: 340px;
  background: url(../assets/images/名片.png) no-repeat;
  background-size: cover;
  float: left;
  z-index: 1;
}
.headportrait {
  position: absolute;
  width: 110px;
  height: 110px;
  border: 10px solid #ffffff;
  top: 60px;
  left: 100px;
  overflow: hidden;
  border-radius: 50%;
}
.headportrait img {
  width: 100%;
  height: 100%;
}
.username {
  position: absolute;
  // width: 210px;
  // height: 30px;
  // border: 1px solid red;
  top: 200px;
  left: 60px;
}
.username h1 {
  font-size: larger;
  color: #ffffff;
}
.credit {
  // width: 210px;
  // height: 30px;
  position: absolute;
  // border: 1px solid black;
  top: 250px;
  left: 90px;
}
.credit h1 {
  font-size: medium;
  color: #ffffff;
}
.grade {
  position: absolute;
  // border: 1px solid green;
  top: 245px;
  right: 110px;
}
.grade h1 {
  font-size: larger;
  color: #ffffff;
}
.wallet {
  position: relative;
  width: 450px;
  height: 280px;
  top: 30px;
  left: 330px;
  background-color: #ffffff;
  float: left;
}
</style>