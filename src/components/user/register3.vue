<template>
  <div>
    <div class="step">
      <span class="img1"
        ><img src="../../assets/images/蓝色成功.png" alt=""
      /></span>
      <span class="img2"
        ><img src="../../assets/images/圆形虚线1.png" alt=""
      /></span>
      <span class="img3"
        ><img src="../../assets/images/蓝色成功.png" alt=""
      /></span>
      <span class="img4"
        ><img src="../../assets/images/圆形虚线1.png" alt=""
      /></span>
      <span class="img5"
        ><img src="../../assets/images/3(蓝色).png" alt=""
      /></span>
    </div>
    <div class="User_information">
      <div class="zhuce">
        <img src="../../assets/images/注册成功.png" alt="" />
      </div>
      <div class="zhuce_1">
        <h1>注册成功！</h1>
      </div>
    </div>
    <div class="next">
      <el-button type="primary">完成并登录</el-button>
    </div>
  </div>
</template>

<script>
import register from "./register";

export default {
  name: "register3",
  components: register,
};
</script>

<style lang="less" scoped>
.step {
  width: 600px;
  height: 100px;
  top: 50px;
  margin: 0 auto;
  position: relative;
  // border: 1px solid red;
}
.step .img1 img {
  position: absolute;
  top: 30px;
  left: 80px;
}
.step .img2 img {
  position: absolute;
  top: 48px;
  left: 150px;
}
.step .img3 img {
  position: absolute;
  top: 30px;
  left: 280px;
}
.step .img4 img {
  position: absolute;
  top: 48px;
  right: 150px;
}
.step .img5 img {
  position: absolute;
  top: 30px;
  right: 80px;
}
.User_information {
  width: 800px;
  height: 300px;
  top: 80px;
  margin: 0 auto;
  position: relative;
  //   border: 1px solid blue;
}
.zhuce {
  width: 140px;
  height: 140px;
  position: relative;
  left: 330px;
  top: 50px;
  //   border: 1px solid red;
}
.zhuce img {
  width: 100%;
  height: 100%;
}
.zhuce_1 {
  width: 200px;
  height: 50px;
  position: relative;
  left: 300px;
  top: 70px;
  //   border: 1px solid purple;
}
.zhuce_1 h1 {
  font-size: 30px;
  position: relative;
  margin-top: 5px;
  left: 35px;
}
.next {
  width: 455px;
  height: 80px;
  top: 130px;
  margin: 0 auto;
  position: relative;
  // border: 1px solid purple;
}
.next .el-button {
  width: 450px;
  height: 70px;
}
</style>