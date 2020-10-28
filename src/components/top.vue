<template>
  <div>
    <div class="top">
      <div class="top_left">
        <div class="tu">
          <a href=""><img src="../assets/images/ing1.png" alt="" /></a>
        </div>
        <div class="de">
          <a href="">广东</a>
          <span>您好,请登录</span>
        </div>
      </div>
      <div class="top_right">
        <a href="">个人中心</a>
        <a href="">购物车</a>
        <a href="">收藏夹</a>
        <a href="">我的订单</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>


<style lang="less" scoped>
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
  width: 250px;
  margin-top: 5px;
  font-size: 20px;
  width: 200px;
}
.de a {
  text-decoration: none;
  color: #6c6c6c;
}
.de span {
  color: #3fb3fe;
  margin-left: 15px;
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
  font-size: 20px;
}
</style>