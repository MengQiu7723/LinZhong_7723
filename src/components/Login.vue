<template>
    <el-container>
      <el-header height="180px">
        <div class="loginbox_left">
          <img src="../assets/images/1.png" alt="" id="loginbox_left1">
          <div class="loginbox_left_1">
            <img src="../assets/images/2.png" alt="" id="loginbox_left2">
            <img src="../assets/images/3.png" alt="">
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">图片</el-aside>
        <el-main>登录</el-main>
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
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;

        if (
          this.loginForm.username == "admin" &&
          this.loginForm.password == 123456
        ) {
          this.$message.success("登录成功");
          this.$router.push("/home");
        } else {
          //get请求
          const res = await this.$http.get("/api/user/login", {
            params: this.loginForm,
          });
          var result = res.data;
          if (result.code == 0) {
            //登录成功状态码，这个是后端定义的
            // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
            //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
            //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
            // window.sessionStorage.setItem("token", res.data.token);
            // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
            // this.$router.push("/home");
            this.$message.success("登录成功");
            this.$router.push("/home");
          } else if (result.code == 1) {
            this.$message.error(result.msg + "，登录失败！");
          }
          console.log(res);
          //get请求
        }
      });
    },
    register() {
          this.$router.replace('/register')
        }
  },
};
</script>

<style lang="less" scoped>
.loginbox_left {
  width: 800 px;
  height: 150px;
  border:1px solid red;
}
.loginbox_left_1{
  width: 200px;
  height: 100px;
  position: absolute;
  left: 400px;
  top: 50px;
  border: 1px solid yellow;
}
#loginbox_left1{
  position:absolute;
  top:30px;
  left: 300px;
}
// #loginbox_left2{
//   position:absolute;
//   top: 10px;
// }
.el-header, .el-footer {
    background-color:#ffff;
    color:  #14C7FF;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  } 
</style>
