<template>
  <div class="cent">
    <div class="top">
      <div class="top_left">
        <div class="tu">
          <a href=""><img src="../assets/images/ing1.png" alt="" /></a>
        </div>
        <div class="de">
          <span>广东</span>
          <a>返回首页</a>
          <span @click="pc()" v-if="isLogin == 1">欢迎来到35书城</span>
        </div>
      </div>
      <div class="top_right">
        <a href="javascript:void(0)" @click="pc()">个人中心</a>
        <a href="javascript:void(0)" @click="shopCar()">购物车</a>
        <a href="javascript:void(0)" @click="shou()">收藏夹</a>
        <a href="javascript:void(0)" @click="ding()">我的订单</a>
      </div>
    </div>
    <div class="kai">
      <div class="logo">
        <span><img src="../assets/images/ing2.png" alt="" /></span>
      </div>
      <div class="three">
        <p>threefive</p>
        <span>.com</span>
      </div>
      <div class="kai_middle">
        <div class="sou">
          <form class="input_form" action="">
            <a href=""><img src="../assets/images/ing4.png" alt="" /></a>
            <input
              type="text"
              name=""
              v-model="bookName_Val"
              placeholder="数据库管理"
            />
            <button @click="search_button">搜索</button>
          </form>
        </div>
        <div class="kai_button">
          <a href="" class="b1">UI设计理论</a>
          <a href="" class="b2">java从入门到入土</a>
          <a href="" class="b2">变秃就能变强</a>
        </div>
      </div>
      <div class="kai_right">
        <a href="">购物车</a>
      </div>
    </div>
    <div class="xian"></div>
    <div class="zheng_top">
      <div class="zheng_top_left">
        <img src="../assets/images/ing10.png" alt="" />
      </div>
      <div class="zheng_top_right">
        <div class="right_top">
          <p>Java从入门到精通（第五版）十年锤炼打造经典</p>
          <span>中国齐著</span>
          <span class="qing"> 清华大学出版社</span>
        </div>
        <div class="right_top1">
          <span class="ge">价格</span>
          <span class="jia"> ￥49.9</span>
        </div>
        <div class="right_top2">
          <span class="ge"> 发货地址</span>
          <span class="de">广东&nbsp;深圳</span>
        </div>
        <div class="right_top3">
          <div class="right_top3_left">
            <span class="ge">配送至</span>
            <a href=""> 阳江</a>
          </div>
          <div class="right_top3_right">
            <span class="ge"> 在线配送费</span>
            <span class="de">免运费</span>
          </div>
        </div>
        <div class="right_top4">
          <span class="ge">选择版本</span>
          <el-row>
            <el-button disabled style="size: 200px">第一版</el-button>
          </el-row>
        </div>
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
* {
  margin: 0px auto;
  padding: 0px;
}
.clear {
  clear: both;
}
.cent {
  width: 100%;
  //   background: #f4f4f4;
}

.top {
  width: 1180px;
  height: 40px;
  margin: 0 auto;
  background: yellow;
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
  color: #3fb3fe;
  margin-left: 15px;
}

.de span {
  color: #6c6c6c;
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
.kai {
  width: 1180px;
  height: 120px;
  background: pink;
  margin-top: 20px;
}
.logo {
  width: 120px;
  height: 120px;
  //   background: chartreuse;
  float: left;
}
.logo img {
  width: 90px;
  height: 100px;
}
.three {
  width: 150px;
  height: 120px;
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
.kai_middle {
  width: 700px;
  height: 60px;
  // border: 2px solid cornflowerblue;
  float: left;
}
.sou {
  width: 700px;
  height: 60px;
  margin-top: 10p;
  // border: 3px solid #14A5FF;
}
.input_form {
  width: 700px;
  height: 60px;
  border: 3px solid #14c9ff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.input_form > input {
  width: 700px;
  height: 60px;
  outline: none;
  border: none;
  margin-left: 10px;
  font-size: 20px;
  color: #14c9ff;
}
.input_form > a > img {
  width: 30px;
  height: 30px;
  float: left;
}
.input_form > button {
  width: 140px;
  height: 60px;
  padding-left: 10px;
  background: #1db69a;
  border: none;
  color: #ffffff;
  font-size: 20px;
}
.kai_right a {
  width: 120px;
  height: 62px;
  float: right;
  margin-right: 30px;
  background: #1db69a;
  line-height: 62px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
}
.kai_button {
  width: 700px;
  height: 40px;
  // background: #ccc;
  margin-top: 20px;
}
.kai_button > a {
  // width: 150px;
  font-size: 13px;
  text-decoration: none;
  color: #6c6c6c;
  float: left;
  text-align: center;
}
.kai_button > a:hover {
  color: red;
  // font-weight: 600;
}
.b1 {
  width: 100px;
  height: 40px;
}
.b2 {
  width: 130px;
  height: 40px;
}
.xian {
  height: 20px;
  width: 100%;
  border-top: 3px solid #14aaff;
}
.zheng_top {
  width: 1180px;
  height: 400px;
  //   background: #32c8ff;
}
.zheng_top_left {
  width: 350px;
  height: 400px;
  border: 1px solid #dddddd;
  float: left;
}
.zheng_top_left img {
  width: 230px;
  height: 330px;
  margin-left: 50px;
  margin-top: 30px;
}
.zheng_top_right {
  width: 650px;
  height: 400px;
  background: chartreuse;
  float: left;
  margin-left: 20px;
}
.right_top {
  width: 650px;
  height: 65px;
  border-bottom: 1px solid #ddd;
}
.right_top p {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.right_top span {
  font-size: 18px;
  color: #666666;
}
.qing {
  margin-left: 20px;
}
.right_top1 {
  width: 600px;
  height: 40px;
  float: left;
  //   background: pink;
  line-height: 40px;
}
.ge {
  color: #dddddd;
  font-size: 17px;
  float: left;
}
.jia {
  color: red;
  font-size: 20px;
  margin-left: 30px;
}
.right_top2 {
  width: 600px;
  height: 30px;
  float: left;
  //   background: pink;
  line-height: 40px;
}
.de {
  margin-left: 20px;
  color: #666;
}
.right_top3 {
  width: 600px;
  height: 30px;
  float: left;
  //   background: pink;
  line-height: 40px;
}
.right_top3_left {
  width: 300px;
  height: 30px;
  //   background: chocolate;
  float: left;
}
.right_top3_left a {
  text-decoration: none;

  color: #6666;
  margin-left: 20px;
  font-size: 18px;
}

.right_top3_right {
  width: 300px;
  height: 30px;
  //   background: cornflowerblue;
  float: left;
}
.right_top4 {
  width: 650px;
  height: 150px;
  background: cornflowerblue;
  margin-top: 10px;
  float: left;
}
</style>




