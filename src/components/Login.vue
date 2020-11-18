<template>
  <div class="conter">
    <div class="top">
      <div class="logo">
        <span><img src="../assets/images/ing2.png" alt="" /></span>
      </div>
      <div class="three">
        <p>threefive</p>
        <span>.com</span>
      </div>
      <div class="top_right">
        <span>返回浏览首页</span>
      </div>
    </div>
    <div class="xian"></div>
    <div class="mibble">
      <div class="mibble_left">
        <img src="../assets/images/4.png" alt="" />
      </div>
      <div class="mibble_right">
        <div class="denglu">
          <div class="mimadenglu">
            <p>密码登录</p>
          </div>
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginFormRules"
            label-width="0px"
            class="login_form"
          >
            <div class="yonghuming">
              <el-form-item prop="username">
                <el-input
                  placeholder="手机号/邮箱"
                  prefix-icon="el-icon-user"
                  v-model="loginForm.username"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mima">
              <el-form-item prop="password">
                <el-input
                  placeholder="输入长度6-15位的密码"
                  prefix-icon="el-icon-unlock"
                  v-model="loginForm.password"
                >
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="dengluanniu">
            <el-button type="primary" @click="login()">登录</el-button>
          </div>
          <div class="yangzhengma">
            <a href=""><h4>切换至验证码登录</h4></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          {
            min: 3,
            max: 15,
            message: '长度在 3 到 15 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        //get请求
        const { data: res } = await this.$http.get('user/login', {
          params: this.loginForm,
        })
        if (res.code == 0) {
          window.sessionStorage.setItem('token', res.data)
          this.$message.success('登录成功')
          this.$router.push('/home')
        } else if (res.code == 1) {
          this.$message.error(res.msg + '，登录失败！')
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0px auto;
  padding: 0px;
}
.clear {
  clear: both;
}
.conter {
  width: 100%;
}
.top {
  width: 1180px;
  height: 120px;
  // background: chocolate;
}
.logo {
  width: 120px;
  height: 120px;
  // background: chartreuse;
  float: left;
}
.logo img {
  width: 90px;
  height: 90px;
  margin-top: 10px;
}
.three {
  width: 150px;
  height: 100px;
  // border: 1px solid yellow;
  float: left;
}
.three p {
  font-size: 25px;
  margin-top: 10px;
  color: #14c9ff;
}
.three span {
  font-size: 35px;
  color: #14c9ff;
}
.top_right {
  width: 200px;
  height: 120px;
  // border: 1px solid green;
  float: right;
}
.top_right span {
  color: #14a5ff;
  font-weight: 600;
  text-align: center;
  line-height: 120px;
  font-size: 20px;
}
.xian {
  height: 20px;
  width: 100%;
  border-top: 3px solid #14aaff;
}
.mibble {
  width: 1180px;
  height: 500px;
  // background: chartreuse;
}
.mibble_left {
  width: 700px;
  height: 500px;
  // background: chocolate;
  float: left;
}
.mibble_left img {
  width: 700px;
  height: 500px;
}
.mibble_right {
  width: 450px;
  height: 500px;
  float: right;
  border: 1px solid #dddddd;
}

.denglu {
  width: 450px;
  height: 500px;
}
.mimadenglu {
  width: 250px;
  height: 50px;
  margin: 50px;
  //  border: 1px solid red;
}
.mimadenglu p {
  font-weight: 1000;
  font-size: 30px;
  // margin-top: 10px;
  // margin-left: -220px;
}
.yonghuming {
  width: 350px;
  height: 50px;
  margin: 50px;
  //  border: 1px solid red
}
//  input{
//    width: 350px;
//    height: 50px;
//    background: url(../assets/images/5.png);background-repeat:no-repeat;
//  }
//  .yonghuming>img{

//  }
.mima {
  width: 350px;
  height: 50px;
  margin: 50px;
  //  border: 1px solid red
}
.dengluanniu {
  width: 350px;
  height: 50px;
  margin: 50px;
  //  border: 1px solid red
}
.yangzhengma {
  width: 350px;
  height: 50px;
  margin: 50px;
  //  border: 1px solid red
}
.yangzhengma > a > h4 {
  height: 30px;
  color: #14c7ff;
  margin-left: 200px;
}
.yangzhengma > a {
  text-decoration: none;
}
.el-input {
  width: 350px;
  margin-right: 55px;
}
.el-button {
  width: 350px;
}
.el-header,
.el-footer {
  background-color: #ffff;
  color: #14c7ff;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #ffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside > a > img {
  width: 800px;
  height: 567px;
  margin-left: 100px;
}
.el-main {
  background-color: #ffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
