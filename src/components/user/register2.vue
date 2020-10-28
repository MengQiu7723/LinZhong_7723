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
        ><img src="../../assets/images/圆形虚线.png" alt=""
      /></span>
      <span class="img5"
        ><img src="../../assets/images/3(灰).png" alt=""
      /></span>
    </div>
    <div class="User_information">
      <div class="password">
        <el-input placeholder="请输入6-15位的密码" v-model="input1">
          <template slot="prepend">密码</template>
        </el-input>
      </div>
      <div class="confirm_password">
        <el-input placeholder="二次确认您的密码" v-model="input2">
          <template slot="prepend">确认密码</template>
        </el-input>
      </div>
    </div>
    <div class="next">
      <el-button type="primary">下一步</el-button>
    </div>
  </div>
</template>

<script>
import register from "./register";

export default {
  data() {
    return {
      input1: "",
      input2: "",
    };
  },
  name: "register2",
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
.password {
  width: 455px;
  position: relative;
  left: 170px;
  top: 50px;
}
.confirm_password {
  width: 455px;
  position: relative;
  left: 170px;
  top: 150px;
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