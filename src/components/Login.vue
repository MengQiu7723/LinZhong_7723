<template>
  <el-container>
    <el-header height="180px">
      <div class="loginbox_left">
        <img src="../assets/images/1.png" alt="" id="loginbox_left1" />
        <div class="loginbox_left_1">
          <img src="../assets/images/2.png" alt="" id="loginbox_left2" />
          <img src="../assets/images/3.png" alt="" id="loginbox_left3" />
        </div>
        <div class="loginbox_right">
          <a href=""><h4>返回首页浏览</h4></a>
        </div>
      </div>
      <div class="fengexian"></div>
    </el-header>
    <el-container>
      <el-aside width="1200px">
        <a href=""><img src="../assets/images/4.png" alt="" /></a>
      </el-aside>
      <el-main>
        <div class="denglu">
          <div class="mimadenglu">
            <h1>密码登录</h1>
          </div>
          <div class="yonghuming">
            <el-input
              placeholder="手机号/邮箱"
              prefix-icon="el-icon-user"
              v-model="input2"
            >
            </el-input>
          </div>
          <div class="mima">
            <el-input
              placeholder="输入长度6-15位的密码"
              prefix-icon="el-icon-unlock"
              v-model="input2"
            >
            </el-input>
          </div>
          <div class="dengluanniu">
            <el-button type="primary" @click="login()">登录</el-button>
          </div>
          <div class="yangzhengma">
            <a href=""><h4>切换至验证码登录</h4></a>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456",
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    //登录按钮事件
    login() {
      this.$router.push("/home");
    },
    /** 
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return

        if (
          this.loginForm.username == 'admin' &&
          this.loginForm.password == 123456
        ) {
          this.$message.success('登录成功')
          this.$router.push('/home')
        } else {
          //get请求
          const res = await this.$http.get('/api/user/login', {
            params: this.loginForm,
          })
          var result = res.data
          if (result.code == 0) {
            //登录成功状态码，这个是后端定义的
            // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
            //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
            //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
            // window.sessionStorage.setItem("token", res.data.token);
            // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
            // this.$router.push("/home");
            this.$message.success('登录成功')
            this.$router.push('/home')
          } else if (result.code == 1) {
            this.$message.error(result.msg + '，登录失败！')
          }
          console.log(res)
          //get请求
        }
      })
    },
    */
    register() {
      this.$router.replace("/register1");
    },
  },
};
</script>

<style lang="less" scoped>
.loginbox_left {
  width: 800px;
  height: 150px;
  // border:1px solid red;
}
.loginbox_left_1 {
  width: 200px;
  height: 100px;
  position: absolute;
  left: 360px;
  top: 50px;
  // border: 1px solid yellow;
}
#loginbox_left1 {
  position: absolute;
  top: 30px;
  left: 300px;
}
#loginbox_left2 {
  position: absolute;
  top: -20px;
}
#loginbox_left3 {
  position: absolute;
  top: 10px;
}
.loginbox_right {
  width: 200px;
  height: 100px;
  // border:1px solid green;
}
.loginbox_right > a > h4 {
  position: absolute;
  right: 300px;
  top: 20px;
  color: #14a5ff;
}
.fengexian {
  width: 2000px;
  height: 5px;
  margin-left: -100px;
  border: 1px solid #14a5ff;
  background-color: #14a5ff;
}
.el-aside > a > img {
  margin-top: 20px;
}
.denglu {
  width: 500px;
  height: 567px;
  border: 1px solid #dddddd;
}
.mimadenglu {
  width: 350px;
  height: 50px;
  margin: 50px;
  //  border: 1px solid red;
}
.mimadenglu > h1 {
  font-weight: bold;
  margin-top: 10px;
  margin-left: -220px;
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
  color: #14c7ff;
  margin-left: 200px;
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
