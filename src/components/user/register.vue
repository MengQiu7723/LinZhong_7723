<template>
  <div>
    <!-- 注册头部栏 -->
    <div class="head">
      <div class="head_main clearfix">
        <div class="logo clearfix">
          <div class="logo_left">
            <img src="../../assets/images/logo.png" alt="" />
          </div>
          <div class="logo_right">
            <div class="logo_right_top">
              <img src="../../assets/images/logo1.png" alt="" />
            </div>
            <div class="logo_right_bottom">
              <img src="../../assets/images/logo2.png" alt="" />
            </div>
          </div>
        </div>
        <div class="register">
          <h3>欢迎注册</h3>
        </div>
        <div class="login">
          <h4>已有账号？ <span @click="login()">请登录</span></h4>
        </div>
      </div>
    </div>
    <!-- 注册表单主体 -->

    <!-- 步骤条 -->
    <div class="reg_form">
      <div class="steps">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
      <div style="margin: 20px"></div>
      <!-- 表单区 -->
      <el-form :label-position="labelPosition" :model="addForm">
        <div v-if="active == 0" style="width: 500px; margin: 0 auto">
          <el-form-item>
            <el-tooltip
              class="item"
              effect="dark"
              content="用于找回密码、修改密码等操作"
              placement="bottom"
            >
              <el-input
                placeholder="建议使用常用手机号注册"
                v-model="addForm.mobile"
              >
                <template slot="prepend">手机号</template>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input placeholder="验证码" v-model="captcha"></el-input>
              </el-col>
              <el-col :span="8">
                <img class="code-img" alt="图片验证码" :src="codeSrc" />
              </el-col>
              <el-col :span="4">
                <span @click="getImg()">换一个</span>
              </el-col>
            </el-row>
          </el-form-item>
        </div>

        <div v-if="active == 1" style="width: 500px; margin: 0 auto">
          <el-form-item>
            <el-input
              placeholder="请输入6-15位的密码"
              v-model="addForm.password"
            >
              <template slot="prepend">密码</template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="第二次输入以确认您的密码"
              v-model="addForm.password"
            >
              <template slot="prepend">确认密码</template>
            </el-input>
          </el-form-item>
        </div>
        <div v-if="active == 2" style="width: 500px; margin: 0 auto">
          <div style="width: 78px; height: 102px; margin: 0 auto">
            <img src="../../assets/images/注册成功.png" alt="" />
          </div>
        </div>
      </el-form>
      <!-- 按扭区 -->
      <div class="btn">
        <el-button @click="next" v-if="active <= 2">{{ messageTip }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* 验证码图片 */
      codeSrc: '',
      captcha: '',
      /* 步骤表单 */
      active: 0,
      messageTip: '下一步',
      labelPosition: 'right',
      /* 注册信息 */
      addForm: {
        username: '',
        password: '',
        mobile: '',
      },
    }
  },
  methods: {
    /* 跳转登录 */
    login() {
      this.$router.push('/login')
    },
    /* 步骤表单 */
    next() {
      console.log(this.active)
      if (this.active > 3) {
        this.active = 0
      } else {
        this.active = this.active + 1
      }
      if (this.active == 1) {
        this.messageTip = '注册'
      }
      if (this.active == 2) {
        this.addUser()
        this.messageTip = '注册成功，去登录'
      }
      if (this.active == 3) {
        this.login()
      }
    },
    /* 验证码 */
    async getImg() {
      this.$http
        .get('captcha/getcaptcha', { responseType: 'arraybuffer' })
        .then((res) => {
          let path =
            'data:image/png;base64,' +
            btoa(
              new Uint8Array(res.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
              )
            )
          this.codeSrc = path
        })
    },
    async addUser() {
      const { data: res } = await this.$http.post('user/regist', {
        addForm: this.addForm,
        captcha: this.captcha,
      })
      if (res.code == 0) {
        return res.msg
      }
    },
  },
  created() {
    this.getImg()
  },
}
</script>

<style lang="less" scoped>
.head {
  width: 100%;
}
.head_main {
  width: 1200px;
  margin: 0 auto;
  background-color: pink;
}
.logo {
  width: 170px;
  float: left;
}
/* 声明清除浮动的样式 */
.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
/* ie6 7 专门清除浮动的样式*/
.clearfix {
  *zoom: 1;
}
.logo_left {
  float: left;
}
.logo_right {
  float: right;
  margin-top: 5px;
}
.logo_right_top {
  margin-bottom: 10px;
}
.logo_right_bottom {
  margin-top: 15px;
}
.register {
  float: left;
  margin-left: 20px;
}
.login {
  float: right;
}
span {
  color: #15a4ff;
}
span:hover {
  color: #32c8ff;
  cursor: pointer;
  cursor: hand;
}

/* 注册表单 */
.reg_form {
  position: relative;
  width: 800px;
  height: 600px;
  margin: 20px auto 0 auto;
  padding-top: 50px;
  background-color: #7cdcf0;
}
.steps {
  width: 400px;
  margin: 0 auto;
}
/* 验证码 */
.code-img {
  width: 110px;
  height: 40px;
}
.btn {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
// button {
//   background-image: url("../../assets/images/登录按钮.png");
// }
</style>