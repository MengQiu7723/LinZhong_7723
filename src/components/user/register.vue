<template>
  <el-container>
    <el-header>
        <div class="header_left">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="header_left_1">
          <span class="img1"><img src="../../assets/images/logo1.png" alt=""></span>
          <span class="img2"><img src="../../assets/images/logo2.png" alt=""></span>
        </div>
        <div class="header_left_2">
          <h1>欢迎注册</h1>
        </div>
        <div class="header_right">
          <h2>已有账号？</h2>
          <a href="#">请登录</a>
        </div>
    </el-header>
    <!-- <el-main></el-main> -->
  </el-container>
</template>

<script>
export default {
    name:"registerHeader"
}
</script>

<style lang="less" scoped>
 .el-container{
  height: 100%;
 }
 .el-header{
    background-color: #ffffff;
    // text-align: center;
    height: 148px !important;
    box-shadow: 0px 10px 0px 0px #F8F8F8;
 }
  // .el-main {
  //   background-color: #F8F8F8;
  //   box-shadow: 0px -10px 0px 0px inset #F7F7F7;
  // }
  .header_left {
  width: 800 px;
  height: 150px;
}
.header_left_1{
  width: 200px;
  height: 80px;
  position: absolute;
  left: 400px;
  top: 30px;
}
.header_left img{
  position:absolute;
  top:30px;
  left: 300px;
  width: 80px;
  height: 80px;
}
.header_left_1 .img1 img{
  position:absolute;
  top: 10px;
}
.header_left_1 .img2 img{
  position: absolute;
  bottom: 10px;
}
.header_left_2{
  width: 200px;
  height: 80px;
  position: absolute;
  left: 500px;
  top: 30px;
}
.header_left_2 h1{
  position:absolute;
  left: 50px;
  font-family: "微软雅黑";
  font-weight: normal;
}
.header_right{
  width: 300px;
  height: 80px;
  position: absolute;
  right: 300px;
  top: 30px;
}
.header_right h2{
  position:absolute;
  left: 40px;
  bottom: 0px;
  font-family: "微软雅黑";
  font-weight: normal;
  font-size: 20px;
}
.header_right a{
  position:absolute;
  right: 100px;
  bottom: 16px;
  font-weight: normal;
  font-size: 20px;
  color: #14a5ff;
  text-decoration: none;
}
</style>