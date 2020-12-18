<template>
  <div class="center">
    <Top v-if="update"></Top>
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
            <button @click="search_button()">搜索</button>
          </form>
        </div>
        <div class="kai_button">
          <a href="" class="b1">UI设计理论</a>
          <a href="" class="b2">java从入门到入土</a>
          <a href="" class="b2">变秃就能变强</a>
        </div>
      </div>
      <div class="kai_right">
        <!-- <a href="javascript:void(0)" @click="shopCar">购物车</a> -->
        <router-link :to="{ path: '/shopping' }">购物车</router-link>
      </div>
    </div>
    <div class="xian"></div>
    <div class="zheng">
      <div class="zheng_left">
        <div class="fen">
          <span>图书分类</span>
        </div>
        <!-- 分类 START -->
        <div
          class="dian"
          v-for="index in indexInfo.booksClassList"
          :key="index.id"
        >
          <!-- 一级分类 -->
          <h3>
            <a href="">{{ index.name }}</a>
          </h3>
          <p>
            <span
              class="er"
              v-for="subIndex in index.children"
              :key="subIndex.id"
            >
              <!-- 二级分类 -->
              {{ subIndex.name }}
              <!-- <span class="er1">{{ subIndex.name }}</span> -->
              <!--        <div>
              <span
                class="wen"
                v-for="subSubIndex in subIndex.children"
                :key="subSubIndex.id"
              >
               三级分类 
                <a href="" class="heng">{{ subSubIndex.name }}</a>
              </span>
            </div> -->
            </span>
          </p>
        </div>
        <!-- 分类 END -->
      </div>

      <div class="bigzheng">
        <div class="zheng_middle">
          <div class="block">
            <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
            <el-carousel height="340px">
              <el-carousel-item v-for="item in mainBannerUrl" :key="item.id">
                <!-- <img class="small">{{ item.path }}</h3> -->
                <img class="mainBannerImg" :src="item.path" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="zheng_right">
          <!-- 未登录 -->
          <div class="deng" v-if="(isLogin == 0) & update">
            <!-- 登录表单区域 -->
            <el-form
              ref="loginFormRef"
              :model="loginForm"
              :rules="loginFormRules"
              label-width="0px"
              class="login_form"
            >
              <el-form-item prop="username">
                <el-input
                  placeholder="用户名"
                  prefix-icon="el-icon-user"
                  v-model="loginForm.username"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  placeholder="密码"
                  prefix-icon="el-icon-unlock"
                  v-model="loginForm.password"
                >
                </el-input>
              </el-form-item>
            </el-form>
            <div class="last">
              <div class="last_last">
                <!-- <a class="last_left">注册</a> -->
                <router-link class="last_left" :to="{ path: '/register' }"
                  >注册</router-link
                >
                <router-link class="last_right" :to="{ path: '/register' }"
                  >找回密码</router-link
                >
              </div>
            </div>
            <div class="lu" @click="login()">
              <a href="javascript:void(0)">登录</a>
            </div>
            <div class="wei">
              <a href="" class="qq"
                ><img src="../assets/images/ing8.png" alt=""
              /></a>
              <a href="" class="ww"
                ><img src="../assets/images/ing7.png" alt=""
              /></a>
            </div>
          </div>
          <!-- 已登录 -->
          <div class="deng" v-if="(isLogin == 1) & update">
            <span>欢迎来到35书城</span>
            <button @click="logout()">退出登录</button>
          </div>
          <div class="zheng_right_buttom">
            <div class="block1">
              <el-carousel height="140px" width="180px">
                <el-carousel-item v-for="item in smallBannerUrl" :key="item.id">
                  <!-- <h3 class="small">{{ item.path }}</h3> -->
                  <img class="smallBannerImg" :src="item.path" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="zheng_middle_middle">
          <img src="../assets/images/ing13.png" alt="" />
          <div class="ji">
            <span>热门书籍</span>
          </div>
        </div>

        <div class="zheng_buttom">
          <div class="hotBookList">
            <!-- 热门书藉 START-->
            <div
              class="mei"
              v-for="index in indexInfo.bookList"
              :key="index.id"
              @click="getBookById(index.id)"
            >
              <div class="niao">
                <a href="javascript:void(0)"
                  ><img :src="index.imagesUrl" alt=""
                /></a>
              </div>
              <div class="zi">
                <a href="">{{ index.bookName }}</a>
              </div>
              <div class="jia">
                <a href=""> ￥{{ index.price }}</a>
              </div>
            </div>
            <!-- 热门书藉 END-->
          </div>
        </div>
      </div>
    </div>
    <div class="mod_copyright">
      <div class="grid_c1 mod_copyright_inner">
        <p class="mod_copyright_links">
          <a href="javascript:void(0)">关于我们</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">联系我们</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">联系客服</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">合作招商</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">商家帮助</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">营销中心</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">手机京东</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">友情链接</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">销售联盟</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">京东社区</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">风险监测</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">隐私政策</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">京东公益</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">English Site</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:void(0)">Media &amp; IR</a>
          <!-- <img src="../assets/images/2020年12月8日22时17分57秒.webp" alt=""> -->
        </p>

        <div class="mod_copyright_info">
          <div class="mod_copyright_cert">
            <p>
              <a href="javascript:void(0)">京公网安备 11000002000088号</a>
              <span class="mod_copyright_split">|</span>
              <span>京ICP证070359号</span>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:void(0)"
                >互联网药品信息服务资格证编号(京)-经营性-2014-0008</a
              >
              <span class="mod_copyright_split">|</span>
              <span>新出发京零&nbsp;字第大120007号</span>
            </p>
            <p>
              <span>互联网出版许可证编号新出网证(京)字150号</span>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:void(0)">出版物经营许可证</a>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:void(0)"
                >网络文化经营许可证京网文[2014]2148-348号</a
              >
              <span class="mod_copyright_split">|</span>
              <span>违法和不良信息举报电话：4006561155</span>
            </p>
            <p>
              <span
                >Copyright&nbsp;©&nbsp;2004&nbsp;-&nbsp;2020&nbsp;&nbsp;京东JD.com&nbsp;版权所有</span
              >
              <span class="mod_copyright_split">|</span>
              <span>消费者维权热线：4006067733</span>
              <a href="javascript:void(0)" class="mod_copyright_license"
                >经营证照</a
              >
              <span class="mod_copyright_split">|</span>
              <span>(京)网械平台备字(2018)第00003号</span>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:void(0)" class="mod_business_license"
                >营业执照</a
              >
            </p>
          </div>
        </div>
        <p class="mod_copyright_auth">
          <a
            class="mod_copyright_auth_ico mod_copyright_auth_ico_2"
            href="javascript:void(0)"
            >可信网站信用评估</a
          >
          <a
            class="mod_copyright_auth_ico mod_copyright_auth_ico_3"
            href="javascript:void(0)"
            >网络警察提醒你</a
          >
          <a
            class="mod_copyright_auth_ico mod_copyright_auth_ico_4"
            href="javascript:void(0)"
            >诚信网站</a
          >
          <a
            class="mod_copyright_auth_ico mod_copyright_auth_ico_5"
            href="javascript:void(0)"
            >中国互联网举报中心</a
          >
          <a
            class="mod_copyright_auth_ico mod_copyright_auth_ico_6"
            href="javascript:void(0)"
            >网络举报APP下载</a
          >
          <a
            class="mod_copyright_auth_ico mod_copyright_auth_ico_7"
            href="javascript:void(0)"
            >扫黄打非网举报专区</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/top.vue'
export default {
  data() {
    return {
      bookName_Val: '',
      isLogin: '',
      // bookId_Val: '',
      loginForm: {
        username: 'user',
        password: '123456',
      },
      loginFormRules: {},
      /* 首页信息 */
      indexInfo: {
        bookList: [],
        booksClassList: [],
        advertiseList: [],
      },
      update: true,
      /* 轮播图区域 */
      mainBannerUrl: [
        { path: require('../assets/images/20201208221757.webp') },
        { path: require('../assets/images/2020年12月8日22时31分27秒.webp') },
        { path: require('../assets/images/2020年12月8日22时32分35秒.webp') },
        { path: require('../assets/images/2020年12月8日22时32分39秒.webp') },
      ],
      smallBannerUrl: [
        { path: require('../assets/images/2020年12月8日22时35分51秒.webp') },
        { path: require('../assets/images/2020年12月8日22时35分55秒.webp') },
      ],
    }
  },
  components: {
    Top,
  },
  methods: {
    getBookById(id) {
      // this.bookId_Val = id
      console.log(id)
      this.$router.push({
        name: 'shang',
        params: { bookId_Val: id },
      })
    },
    shopCar() {
      this.$router.push('/shopping')
    },
    /* 判断登录 */
    isToken() {
      if (window.sessionStorage.getItem('token')) {
        return (this.isLogin = 1)
      } else {
        return (this.isLogin = 0)
      }
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        //get请求
        const { data: res } = await this.$http.get('user/login', {
          params: this.loginForm,
        })
        if (res.code == 0) {
          window.sessionStorage.setItem('token', res.data.token)
          window.localStorage.setItem('role', 0)
          this.$message.success('登录成功')
          /* 更新VueX store的userInfo */
          this.$store.commit('userUpdate', res.data)
          this.isLogin = 1
          // 移除组件
          this.update = false
          // 在组件移除后，重新渲染组件
          // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
          this.$nextTick(() => {
            this.update = true
          })
        } else if (res.code == 1) {
          this.$message.error(res.msg + '，登录失败！')
        }
      })
    },
    logout() {
      window.sessionStorage.clear()
      this.isLogin = 0
      // 移除组件
      this.update = false
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.update = true
      })
    },
    search_button() {
      this.$router.push({
        name: 'search',
        params: { bookName_Val: this.bookName_Val },
      })
    },
    async getIndexInfo() {
      const { data: res } = await this.$http.get('book/index')
      this.indexInfo.bookList = res.data.bookList.content
      this.indexInfo.booksClassList = res.data.booksClassList
      this.indexInfo.advertiseList = res.data.advertiseList
    },
  },
  created() {
    this.getIndexInfo()
    this.isToken()
    // console.log(this.indexInfo)
  },
}
</script>

<style lang="less" scoped>
/* 小登录 */
.el-form-item {
  margin-bottom: 0px;
}
/deep/ .el-input__inner {
  height: 30px;
}

.login_form {
  width: 210px;
  margin-top: 10px;
}
/* 小登录 */

* {
  margin: 0px auto;
  padding: 0px;
}
.clear {
  clear: both;
}

.center {
  width: 100%;
}
.kai {
  width: 1180px;
  height: 120px;
  // background: pink;
  margin-top: 20px;
}
.logo {
  width: 120px;
  height: 120px;
  // background: chartreuse;
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
  height: 50px;
  // border: 2px solid cornflowerblue;
  float: left;
}
.sou {
  width: 700px;
  height: 50px;
  margin-top: 10p;
  // border: 3px solid #14A5FF;
}
.input_form {
  width: 700px;
  height: 50px;
  border: 3px solid #14c9ff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 3px;
}
.input_form > input {
  width: 700px;
  height: 50px;
  outline: none;
  border: none;
  margin-left: 10px;
  font-size: 16px;
  color: #14c9ff;
}
.input_form > a > img {
  width: 30px;
  height: 30px;
  float: left;
}
.input_form > button {
  width: 140px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  background-image: linear-gradient(to right, #13d2fe, #16a6fc);
  border: none;
  color: #ffffff;
  font-size: 20px;
  border-radius: 2px;
}
.kai_right a {
  width: 120px;
  // height: 64px;
  float: right;
  margin-top: 3px;
  margin-right: 30px;
  background: linear-gradient(to right, #13d2fe, #16a6fc);
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  border-radius: 5px;
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
.zheng {
  width: 1180px;
  height: 600px;
  // background: grey;
}
.zheng_left {
  width: 230px;
  height: 595px;
  border: 2px solid #14aaff;
  float: left;
  overflow: hidden;
  border-radius: 5px;
}
.fen {
  width: 230px;
  height: 40px;
  background: #14aaff;
  text-align: center;
  line-height: 40px;
}
.fen span {
  width: 230px;
  height: 43px;
  color: #fff;
  font-size: 15px;
}
.dian {
  // width: 230px;
  // height: 50px;
  line-height: 40px;
  padding: 0 0 0 10px
  // background: #6C6C6C;
}
.dian a {
  text-decoration: none;
  font-size: 16px;
  color: #14aaff;
  font-weight: 600;
}
.dian > h3:first-child {
  background-color: #fff;
}
.er {
  font-size: 14px;
  margin-right: 5px;
  text-align: center;
}
.er:hover{
  cursor:pointer;
}
.er1 {
  width: 230px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  color: #14aaff;
  font-weight: 600;
}
.wen {
  // width: 230px;
  // height: 50px;
  text-align: center;
}
.wen a {
  color: #7d7d7d;
  text-decoration: none;
  font-size: 15px;
}
.wen a:hover {
  color: red;
  // font-weight: 600;
}
.wen > a.heng {
  justify-content: space-around;
  margin-left: 18px;
  height: 40px;
  margin-top: 5px;
  margin-right: 5px;
}
.bigzheng {
  width: 940px;
  float: right;
  height: 600px;

  // background: #1DB69A;
}
.zheng_middle {
  width: 650px;
  height: 350px;
  // background: #3FB3FE;
  overflow: hidden;
  float: left;
}
.block {
  width: 650px;
  height: 340px;
  // border: 1px solid blue;
  margin-top: 10px;
  margin-left: 10px;
}
.block {
  &/deep/.el-carousel__button {
    width: 5px;
    height: 5px;
    border-radius: 30%;
  }
}
.mainBannerImg{
  width: 650px;
}
.smallBannerImg{
width: 250px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  // line-height: 340px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.zheng_right {
  width: 280px;
  height: 350px;
  // background: red;
  float: left;
  margin-left: 10px;
  //  overflow: hidden;
}
.deng {
  width: 260px;
  height: 190px;
  border: 2px solid #14aaff;
  // margin-top: 10px;
  justify-content: space-around;
  float: right;
  background: #fff;
}
.last_last {
  width: 200px;
  height: 32px;
  font-size: 15px;
  margin-top: 10px;
}
.last_last a:hover {
  color: red;
  // font-weight: 600px;
}
.last_left {
  float: left;
  color: #14aaff;
  height: 30px;
  // text-decoration: none; //对照（正常）
  // text-decoration：none; //为什么我会报错？？？
}
.last_right {
  float: right;
  color: #6c6c6c;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.lu {
  width: 200px;
  height: 32px;
  text-align: center;
  background: #14d2ff;
  border-radius: 3px;
}
.lu a {
  line-height: 32px;
  text-decoration: none;
  font-size: 16px;
  color: #fff;
}
.lu:hover{
  cursor:pointer;
  color: red;
}
.wei {
  width: 230px;
  height: 35px;
}
.qq {
  width: 115px;
  margin-left: 60px;
}
.ww {
  width: 115px;
  margin-left: 60px;
}
.wei img {
  /*   width: 20px;
  height: 20px; */
  margin-top: 5px;
}
.zheng_right_buttom {
  width: 260px;
  height: 140px;
  float: right;
  // background: chartreuse;
  overflow: hidden;
  border: 1px solid #14aaff;
  margin-top: 10px;
}
.block1 {
  width: 258px;
  height: 130px;
}
.block1 {
  &/deep/.el-carousel__button {
    width: 5px;
    height: 5px;
    border-radius: 30%;
  }
}
.zheng_middle_middle {
  width: 920px;
  height: 45px;
  // background: green;
  float: right;
}
.zheng_middle_middle img {
  margin-left: 20px;
  margin-top: 10px;
  width: 40px;
  height: 28px;
  // border: 1px solid #fff;
}
.ji {
  width: 200px;
  // border: 1px solid red;
  margin-left: 80px;
  font-size: 20px;
  color: #14aaff;
  margin-top: -33px;
}

.zheng_buttom {
  width: 945px;
  height: 200px;
  // background: yellow;
  float: left;
}
.hotBookList {
  width: 930px;
  height: 190px;
  border: 1px solid #14aaff;
  margin-top: 5px;
}
.mei {
  width: 232px;
  height: 190px;
  float: left;
}
.mei img:hover {
  opacity: 0.5;
  transition: all 0.2s ease;
}
.niao {
  width: 100px;
  height: 130px;
  margin-top: 10px;
}
.niao img {
  width: 100px;
  height: 130px;
}
.zi {
  width: 232px;
  height: 25px;
  text-align: center;
  line-height: 25px;
}
.zi a {
  text-decoration: none;
  color: #000;
  font-size: 15px;
}
.jia {
  width: 232px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.jia a {
  text-decoration: none;
  color: red;
  font-size: 20px;
}
.mod_copyright_inner {
  padding: 15px 0;
  border-top: 1px solid #e1e1e1;
  text-align: center;
}
.mod_copyright_split {
  margin: 0 10px;
  color: #ccc;
}
.mod_copyright_links a {
  color: #666666;
  font-size: 12px;
}

.mod_copyright_info {
  padding: 10px 0;
  line-height: 22px;
  color: #999;
}
.mod_copyright_info a {
  color: #337ab7;
  font-size: 14px;
}
.mod_copyright_info span {
  color: #999999;
  font-size: 14px;
}
.mod_copyright_auth {
  margin: 25px 0;
}
.mod_copyright_auth_ico_2 {
  background-position: -205px -111px;
}
.mod_copyright_auth_ico_3 {
  background-position: -205px -74px;
}
.mod_copyright_auth_ico_4 {
  background-position: -205px -37px;
}
.mod_copyright_auth_ico_5 {
  background-repeat: no-repeat;
  background-position: -205px 0;
  background-image: url(../assets/images/floor_sprite.png);
}
.mod_copyright_auth_ico_6 {
  background-repeat: no-repeat;
  background-position: 0 -155px;
  background-image: url(../assets/images/floor_sprite.png);
}
.mod_copyright_auth_ico_7 {
  background-repeat: no-repeat;
  background-position: -205px -148px;
  background-image: url(../assets/images/floor_sprite.png);
}
.mod_copyright_auth_ico_1,
.mod_copyright_auth_ico_2,
.mod_copyright_auth_ico_3,
.mod_copyright_auth_ico_4 {
  background-repeat: no-repeat;
  background-image: url(../assets/images/floor_sprite.png);
}
.mod_copyright_auth_ico {
  overflow: hidden;
  display: inline-block;
  margin: 0 3px;
  width: 103px;
  height: 32px;
  line-height: 1000px;
}
</style>