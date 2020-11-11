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
        <div class="wallet">
          <div class="qianbao"><h1>我的钱包</h1></div>
          <div class="balance">
            <h1>1789.12</h1>
            <h2>余额</h2>
          </div>
          <div class="coupon">
            <h1>4</h1>
            <h2>优惠券

              
            </h2>
          </div>
          <div class="bankcard">
            <h1>2</h1>
            <h2>银行卡</h2>
          </div>
        </div>
        <div class="follow">
          <div class="myfollow"><h1>我的关注</h1></div>
          <div class="commodityconcerns">
            <h1>12</h1>
            <h2>商品关注</h2>
          </div>
          <div class="storeattention">
            <h1>3</h1>
            <h2>店铺关注</h2>
          </div>
          <div class="collection">
            <h1>2</h1>
            <h2>收藏</h2>
          </div>
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
body {
  background-color: #f4f4f4;
}
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
  font-weight: lighter;
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
  width: 1250px;
}
.user {
  position: relative;
  width: 340px;
  height: 340px;
  //   border: 1px solid red;
  left: 320px;
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
  left: 310px;
  background-color: #ffffff;
  float: left;
}
.qianbao {
  position: absolute;
  left: 10px;
  width: 420px;
  height: 70px;
  border-bottom: 1px solid #999999;
}
.qianbao h1 {
  margin-left: 50px;
  font-size: 25px;
  color: #999999;
  font-weight: lighter;
}
.balance {
  width: 140px;
  height: 140px;
  // border: 1px solid black;
  position: absolute;
  top: 90px;
  left: 60px;
  overflow: hidden;
}
.balance h1 {
  font-size: 25px;
}
.balance h2 {
  font-weight: normal;
  margin-top: 30px;
}
.coupon {
  width: 110px;
  height: 140px;
  // border: 1px solid blue;
  position: absolute;
  top: 90px;
  left: 210px;
  overflow: hidden;
}
.coupon h1 {
  font-size: 25px;
}
.coupon h2 {
  font-weight: normal;
  margin-top: 30px;
}
.bankcard {
  width: 100px;
  height: 140px;
  // border: 1px solid red;
  position: absolute;
  top: 90px;
  left: 330px;
  overflow: hidden;
}
.bankcard h1 {
  font-size: 25px;
}
.bankcard h2 {
  font-weight: normal;
  margin-top: 30px;
}
.follow {
  position: relative;
  width: 450px;
  height: 280px;
  top: 30px;
  left: 320px;
  background-color: #ffffff;
  float: right;
}
.myfollow {
  position: absolute;
  left: 10px;
  width: 420px;
  height: 70px;
  border-bottom: 1px solid #999999;
}
.myfollow h1 {
  margin-left: 50px;
  font-size: 25px;
  color: #999999;
  font-weight: lighter;
}
.commodityconcerns {
  width: 140px;
  height: 140px;
  // border: 1px solid black;
  position: absolute;
  top: 90px;
  left: 60px;
  overflow: hidden;
}
.commodityconcerns h1 {
  font-size: 25px;
}
.commodityconcerns h2 {
  font-weight: lighter;
  margin-top: 30px;
}
.storeattention {
  width: 110px;
  height: 140px;
  // border: 1px solid blue;
  position: absolute;
  top: 90px;
  left: 210px;
  overflow: hidden;
}
.storeattention h1 {
  font-size: 25px;
}
.storeattention h2 {
  font-weight: lighter;
  margin-top: 30px;
}
.collection {
  width: 90px;
  height: 140px;
  // border: 1px solid red;
  position: absolute;
  top: 90px;
  left: 340px;
  overflow: hidden;
}
.collection h1 {
  font-size: 25px;
}
.collection h2 {
  font-weight: lighter;
  margin-top: 30px;
}
</style>