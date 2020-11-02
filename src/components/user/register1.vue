<template>
  <div>
    <div class="step">
      <span class="img1"
        ><img src="../../assets/images/1(亮).png" alt=""
      /></span>
      <span class="img2"
        ><img src="../../assets/images/圆形虚线.png" alt=""
      /></span>
      <span class="img3"
        ><img src="../../assets/images/2(灰).png" alt=""
      /></span>
      <span class="img4"
        ><img src="../../assets/images/圆形虚线.png" alt=""
      /></span>
      <span class="img5"
        ><img src="../../assets/images/3(灰).png" alt=""
      /></span>
    </div>
    <div class="User_information">
      <!-- <el-form>
    <el-input placeholder="建议使用常用手机号注册" v-model="input1">
    <template slot="prepend">手机号</template>
    </el-input>
    <a class="tips">用于找回密码、更改密码等操作</a>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-form> -->

      <!-- <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="名称">

    <el-row :gutter="20">
      <el-col :span="6"><el-input v-model="formLabelAlign.name"></el-input></el-col>
    </el-row>

  </el-form-item>
  <el-form-item label="活动区域">
    <el-row :gutter="20">
    <el-col :span="6"><el-input v-model="formLabelAlign.region"></el-input></el-col>
    <el-col :span="4"><img src="#" alt="YZM"></el-col>
    </el-row>
  </el-form-item>
</el-form> -->

      <div class="shoujihao">
        <el-input placeholder="建议使用常用手机号注册" v-model="phonenumber">
          <template slot="prepend">手机号</template>
        </el-input>
      </div>
      <a class="tips">用于找回密码、更改密码等操作</a>
      <div class="yanzhengma">
        <el-row :gutter="10">
          <el-col :span="4">
            <el-input
              v-model="verificationcode"
              placeholder="请输入验证码"
            ></el-input
          ></el-col>
          <el-col :span="4"
            ><img width="110px" height="40px" src="#" alt="YZM" />
          </el-col>
          <el-col :span="1"> <el-button type="text">换一张</el-button></el-col>
        </el-row>
      </div>
      <div class="error">
        <el-alert title="手机号不能为空" type="error" effect="dark"> </el-alert>
      </div>
    </div>
    <div class="next">
      <el-button type="primary" @click="next(phonenumber)">下一步</el-button>
    </div>
  </div>
</template>

<script>
import register from "./register";

export default {
  data() {
    return {
      phonenumber: "",
      verificationcode: "",
      //    labelPosition: 'right',
      // formLabelAlign: {
      //   name: '',
      //   region: '',
      //   type: ''
      // }
    };
  },
  name: "register1",
  methods: {
    // userRegister: function () {
    //   if (this.phonenumber == "") {
    //     this.uError = "手机号不能为空！";
    //   }
    // },
    next(phonenumber) {
      this.$router.push("/register2");
      this.$router.push({
        path: "/register2",
        name: "register2",
        params: {
          phonenumber: phonenumber,
        },
      });
    },
  },
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
  // border: 1px solid blue;
}
// .el-input{
//  width: 455px;
//  position:absolute;
//  left: 170px;
//  top: 50px;
// }
.tips {
  position: absolute;
  top: 120px;
  left: 170px;
}
.shoujihao {
  width: 455px;
  position: relative;
  left: 170px;
  top: 50px;
}
.yanzhengma {
  // width: 200px;
  position: relative;
  left: 170px;
  top: 150px;
}
.error {
  width: 455px;
  height: 35px;
  position: relative;
  left: 170px;
  top: 160px;
  // border: 1px solid red;
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
