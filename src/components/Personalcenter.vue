<template>
  <div>
    <Top></Top>
    <!-- 头部信息 -->
    <div class="header">
      <Logo class="logo"></Logo>
      <div class="register logo">
        <h2>个人中心</h2>
      </div>
      <div class="header_right">
        <el-input placeholder="请输入内容" v-model="input2">
          <template slot="append"
            ><el-button type="primary" icon="el-icon-search"
              >搜索</el-button
            ></template
          >
        </el-input>
      </div>
    </div>

    <!-- 个人信息主要区 -->
    <div class="content_bg">
      <div class="content clearfix">
        <!-- 用户部分 -->
        <div class="usercard">
          <div class="user">
            <div class="headportrait">
              <img src="../assets/images/头像1.jpg" alt="" />
            </div>
            <div class="username">
              <p>35_threefive1034879</p>
            </div>
            <p class="usercredit">
              <span>信用等级&nbsp;&nbsp;</span>
              <span><strong>&nbsp;&nbsp;极好</strong></span>
            </p>
          </div>
          <div class="wallet">
            <div class="qianbao">
              <span>我的钱包</span>
              <span>
                <div class="walletIcon">
                  <i class="el-icon-view" v-if="value == false"></i>
                  <i class="el-icon-view walletIconColor" v-else></i>
                </div>
                <el-switch
                  v-model="value"
                  active-color="#14a5ff"
                  inactive-color="#ccc"
                >
                </el-switch>
              </span>
            </div>
            <div class="walletbottom clearfix">
              <div class="balance">
                <p v-if="value == false">***</p>
                <p v-else>1789.12</p>
                <p>余额</p>
              </div>
              <div class="coupon">
                <p v-if="value == false">***</p>
                <p v-else>4</p>
                <p>优惠券</p>
              </div>
              <div class="bankcard">
                <p v-if="value == false">***</p>
                <p v-else>2</p>
                <p>银行卡</p>
              </div>
            </div>
          </div>
          <div class="follow">
            <div class="myfollow"><span>我的关注</span></div>
            <div class="concern clearfix">
              <div class="commodityconcerns">
                <p>12</p>
                <p>商品关注</p>
              </div>
              <div class="storeattention">
                <p>3</p>
                <p>店铺关注</p>
              </div>
              <div class="collection">
                <p>2</p>
                <p>收藏</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 下半部竕 -->
        <div class="main clearfix">
          <div class="main_left">
            <div class="center">
              <p>订单中心</p>
              <ul>
                <li>我的订单</li>
                <li>我的评价</li>
                <li>我的地址</li>
              </ul>
            </div>
            <div class="center">
              <p>我的钵包</p>
              <ul>
                <li>优惠券</li>
                <li>银行卡</li>
                <li>信誉等级</li>
              </ul>
            </div>
            <div class="center">
              <p>客户服务</p>
              <ul>
                <li>价格保护</li>
                <li>售后服务</li>
                <li>意风反馈</li>
              </ul>
            </div>
          </div>
          <div class="main_right">
            <div class="main_right_header">
              <span>我的订单</span>
            </div>
            <div class="main_right_content clearfix">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
            <div class="main_right_bottom">
              <div class="main_right_bottom_post">
                <div>
                  <img src="" alt="图片加载区" />
                </div>
                <div>
                  <p>
                    <span>[发货地]&nbsp;</span>
                    <span>[物流信息]</span>
                  </p>
                  <p>
                    <span>[快递公司]</span>
                    <span>&nbsp;|&nbsp;</span>
                    <span>[yyyy-mm-dd : hh:mm:ss]</span>
                  </p>
                </div>
                <div>></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 个人信息主要区 -->
  </div>
</template>

<script>
import Top from '../components/top.vue'
import Logo from '../components/Logo.vue'
export default {
  data() {
    return {
      value: false,
      input2: '',
    }
  },
  components: {
    Top,
    Logo,
  },
  methods: {
    search_button() {
      this.$router.push('/search')
    },
  },
}
</script>


<style lang="less" scoped>
ul,
li {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.header {
  // position: relative;
  margin: 0 auto;
  width: 1180px;
  height: 150px;
  // background: pink;
}
.logo {
  margin-top: 38px;
}
.register {
  float: left;
  margin-left: 20px;
}

.header_right {
  float: right;
  width: 400px;
  height: 40px;
  margin-top: 55px;
  //   border: 1px solid blue;
}
.header_right .el-input {
  border: 2px solid #14a5ff;
}
.header_right .el-input .el-button {
  background-image: linear-gradient(to right, #14a5ff, #14d2ff) !important;
  // 14a5ff 14d2ff
  color: #ffffff !important;
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

/* 个人信息卡片区 */
.content_bg {
  background-color: #f8f8f8;
  padding: 20px 0 20px 0;
}

.content {
  margin: 0 auto;
  width: 1180px;
  // background-color: pink;
}
.usercard {
  width: 1180px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
/* 头像与信用 */
.user {
  width: 300px;
  height: 300px;
  background: url(../assets/images/名片.png) no-repeat;
  background-size: 100% 100%;
  float: left;
  filter: drop-shadow(0 0 5px #14a5ff);
}
.headportrait {
  margin: 40px auto;
  width: 100px;
  height: 100px;
  border: 5px solid #ffffff;
  overflow: hidden;
  border-radius: 50%;
}
.headportrait img {
  position: relative;
  width: 100%;
  bottom: 30px;
}
.username {
  margin: 0 auto;
}
.username p {
  text-align: center;
  font-size: larger;
  color: #ffffff;
}
.usercredit {
  color: #fff;
  text-align: center;
}

/* 钱包 */
.wallet {
  width: 420px;
  height: 300px;
  background-color: #ffffff;
  float: left;

  border-radius: 5px;
  // background: linear-gradient(145deg, #5bc6ff, #4da7db);
  box-shadow: 5px 5px 5px #f8f8f8;
}
.qianbao {
  width: 375px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
/* 我的钱包字体 */
.qianbao span:first-child {
  line-height: 60px;
  margin-left: 20px;
  font-size: 22px;
  color: #999999;
  font-weight: lighter;
}
.walletIcon {
  float: left;
  margin-top: 7px;
}
.walletIcon i {
  font-size: 28px;
}
.walletIconColor {
  color: #14a5ff;
}
/* 我的钱包：右侧开关 */
.qianbao span:nth-child(2) {
  height: 60px;
  line-height: 60px;
  margin-right: 20px;
  color: #cccccc;
}
.qianbao span:nth-child(2):hover {
  color: #14a5ff;
  transition: color 0.15s linear;
}
.qianbao span:nth-child(2) i {
  padding-top: 10px;
  margin-right: 15px;
}
.walletbottom {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.balance {
  float: left;
  width: 150px;
  padding-left: 10px;
  overflow: hidden;
}
.balance p {
  font-size: 26px;
  font-weight: 700;
}
.balance p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.coupon {
  float: left;
  width: 100px;
  // height: 140px;
  overflow: hidden;
}
.coupon p {
  font-size: 26px;
  font-weight: 700;
}
.coupon p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.bankcard {
  float: left;
  width: 100px;
  overflow: hidden;
}
.bankcard p {
  font-size: 26px;
  font-weight: 700;
}
.bankcard p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}

/* 我的关注 */
.follow {
  width: 420px;
  height: 300px;
  background-color: #ffffff;
  float: right;

  border-radius: 5px;
}
.myfollow {
  width: 375px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.myfollow span {
  line-height: 60px;
  margin-left: 25px;
  font-size: 22px;
  color: #999999;
  font-weight: lighter;
}
.concern {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.commodityconcerns {
  float: left;
  width: 150px;
  height: 140px;
  padding-left: 10px;
  overflow: hidden;
}
.commodityconcerns p {
  font-size: 26px;
  font-weight: 700;
}
.commodityconcerns p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.storeattention {
  float: left;
  width: 110px;
  height: 140px;
  overflow: hidden;
}
.storeattention p {
  font-size: 26px;
  font-weight: 700;
}
.storeattention p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.collection {
  float: left;
  width: 90px;
  height: 140px;
  overflow: hidden;
}
.collection p {
  font-size: 26px;
  font-weight: 700;
}
.collection p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}

/* main */
.main {
  width: 1180px;
}
/* main-left */
.main_left {
  width: 300px;
  float: left;
  // background-color: pink;
  background-color: #fff;
}
.main_left div:nth-child(1),
.main_left div:nth-child(2) {
  border-bottom: 1px solid #ccc;
}
.center {
  text-align: center;
  line-height: 28px;
  margin: 0 28px 0 28px;
  padding-bottom: 28px;
}
.center p:first-child {
  font-size: 22px;
}
/* main-right */
.main_right {
  width: 840px;
  float: right;
  // background-color: #00bfff;
  background-color: #fff;
}
.main_right_header {
  width: 750px;
  height: 72px;
  margin: auto;
  border-bottom: 2px solid #ccc;
}
.main_right_header span:first-child {
  line-height: 72px;
  margin-left: 30px;
  font-size: 22px;
}
.main_right_content {
  height: 160px;
  border-bottom: 1px solid #ccc;
}
.main_right_content ul li {
  float: left;
}
.main_right_bottom {
  width: 100%;
}
.main_right_bottom_post {
  height: 130px;
  border-bottom: 1px solid #ccc;
}

.main_right_bottom_post div:nth-child(1) {
  float: left;
  margin-left: 20px;
  line-height: 130px;
}
.main_right_bottom_post div:nth-child(2) {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
}
.main_right_bottom_post div:nth-child(3) {
  float: right;
  margin-right: 20px;
  line-height: 130px;
}
</style>