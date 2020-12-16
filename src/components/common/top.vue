<template>
  <div class="cent">
    <div class="top">
      <div class="top_left">
        <div class="tu">
          <a href=""><img src="../../assets/images/ing1.png" alt="" /></a>
        </div>
        <div class="de">
          <a href="">广东</a>
          <span @click="login()" v-if="isLogin == 0">您好,请登录</span>
          <span @click="pc()" v-if="isLogin == 1"
            >{{ userName }}，欢迎来到35书城</span
          >
        </div>
      </div>
      <div class="top_right">
        <a href="javascript:void(0)" @click="pc()">个人中心</a>
        <a href="javascript:void(0)" @click="shopCar()">购物车</a>
        <a href="javascript:void(0)" @click="shou()">收藏夹</a>
        <a href="javascript:void(0)" @click="ding()">我的订单</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: '',
      userName: '',
    }
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    pc() {
      this.$router.push('/Personalcenter')
    },
    shopCar() {
      this.$router.push('/shopping')
    },
    shou() {
      this.$router.push('/shou')
    },
    ding() {
      this.$router.push('/ding')
    },
    isToken() {
      if (window.sessionStorage.getItem('token')) {
        this.isLogin = 1
      } else {
        this.isLogin = 0
      }
      if (window.sessionStorage.getItem('username')) {
        this.userName = window.sessionStorage.getItem('username')
      } else {
        this.userName = this.$store.state.userInfo.username
      }
    },
  },
  created() {
    this.isToken()
  },
}
</script>


<style lang="less" scoped>
.cent {
  width: 100%;
  background: #f4f4f4;
}
.top {
  width: 1180px;

  height: 40px;
  margin: 0 auto;
  // background: yellow;
}
.top_left {
  width: 300px;
  height: 40px;
  // border: 1px solid red;
  float: left;
}
.tu {
  width: 30px;
  height: 40px;
  // background: grey;
  float: left;
}
.tu > a > img {
  width: 18px;
  height: 25px;
  margin-top: 5px;
  // background:  green;
}
.de {
  // width: 250px;
  margin-top: 5px;
  font-size: 18px;
  // width: 200px;
}
.de a {
  text-decoration: none;
  color: #6c6c6c;
}
.de span {
  color: #3fb3fe;
  margin-left: 15px;
}
/* span {
  color: #15a4ff;
} */
.de span:hover {
  color: #32c8ff;
  cursor: pointer;
  cursor: hand;
}
.top_right {
  width: 860px;
  height: 40px;
  // background: chocolate;
  float: right;
}
.top_right > a {
  text-decoration: none;
  color: #6c6c6c;
  float: right;
  width: 100px;
  // text-align: center;
  margin-top: 5px;
  font-size: 18px;
}
</style>