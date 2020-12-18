<template>
  <div class="cent">
    <!-- <div class="top">
      <div class="top_left">
        <div class="tu">
          <a href=""><img src="../assets/images/ing1.png" alt="" /></a>
        </div>
        <div class="de">
          <span>广东</span>
          <a>返回首页</a>
          <span @click="pc()">欢迎来到35书城</span>
        </div>
      </div>
      <div class="top_right">
        <a href="javascript:void(0)" @click="pc()">个人中心</a>
        <a href="javascript:void(0)" @click="shopCar()">购物车</a>
        <a href="javascript:void(0)" @click="shou()">收藏夹</a>
        <a href="javascript:void(0)" @click="ding()">我的订单</a>
      </div>
    </div> -->
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
        <a href="">购物车</a>
      </div>
    </div>
    <div class="xian"></div>
    <div class="zheng_top">
      <div class="zheng_top_left">
        <img :src="bookInfo.imagesUrl" alt="" />
      </div>
      <div class="zheng_top_right">
        <div class="right_top">
          <p>{{ bookInfo.bookName }}</p>
          <span>{{ bookInfo.author }}</span>
          <span class="qing">{{ bookInfo.publisher }}</span>
        </div>
        <div class="right_top1">
          <span class="ge">价格：</span>
          <span class="jia"> <em>￥</em>{{ bookInfo.price }}</span>
        </div>
        <div class="right_top2">
          <span class="ge"> 发货地址</span>
          <span class="de">{{ bookInfo.region }}</span>
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
        <!-- <div class="right_top4">
          <span class="ge1">选择版本</span>
          <div class="yi">
            <span>第一版</span>
          </div>
          <div class="er">
            <span>第二版</span>
          </div>
          <div class="yi">
            <span>第三版</span>
          </div>
          <div class="er1">
            <span>第四版</span>
          </div>
          <div class="er">
            <span>第五版</span>
          </div>
        </div> -->
        <div class="right_top5">
          <div class="right_top5_left">
            <a href="">加入购物车</a>
          </div>
          <div class="right_top5_right">
            <a href="">立即购买</a>
          </div>
        </div>
      </div>
    </div>
    <div class="last">
      <div class="last_left">
        <div class="last_left1">
          <div class="left1_top">
            <img src="../assets/images/ing21.png" alt="" />
          </div>
          <div class="left1">
            <span>￥49.9</span>
            <p>数据工程师五天地修炼</p>
          </div>
        </div>
        <div class="last_left1">
          <div class="left1_top">
            <img src="../assets/images/ing20.png" alt="" />
          </div>
          <div class="left1">
            <span>￥44.9</span>
            <p>世家新人游戏开发</p>
          </div>
        </div>
        <div class="last_left1">
          <div class="left1_top">
            <img src="../assets/images/ing20.png" alt="" />
          </div>
          <div class="left1">
            <span>￥34.9</span>
            <p>世家新人卡发培训教材</p>
          </div>
        </div>
      </div>
      <div class="last_right">
        <div class="right">
          <div class="right_left">
            <h1>4.7</h1>
            <p>综合评价</p>
            <span>1.6w</span>
          </div>
          <div class="right_right">
            <div class="right_right1">
              <span>好评如潮 1.3w</span>
              <span>物流很快 0.9w</span>
              <span>客服很赞 1.6w</span>
              <div class="right_right2">
                <span>美物价廉 0.7w</span>
                <span>美物价廉 0.9w</span>
                <span class="pin">商品确实 21</span>
              </div>
            </div>
          </div>
          <div class="right_right_2">
            <div class="right_tu">
              <img src="../assets/images/ing25.png" alt="" />
            </div>
            <div class="tu_right">
              <div class="hao">
                <span>35-threefive1022568</span>
              </div>
              <div class="ju">
                <img src="../assets/images/ing24.png" alt="" />
                <span>举报</span>
              </div>
              <p>这是评价这是评价这是评价这是评价这是评价这是评价</p>
              <div class="men">
                <span>java从入门到入土</span>
              </div>
              <div class="ri">
                <span>2020-9-29</span>
              </div>
              <div class="right_png">
                <div class="ri_right">
                  <img src="../assets/images/ing26.png" alt="" />
                  <span>评价</span>
                </div>
                <div class="ri_right2">
                  <img src="../assets/images/ing22.png" alt="" />
                  <span>106</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Top from '../components/top.vue'
export default {
  data() {
    return {
      /* 头部 */
      update: true,
      bookName_Val: '',
      bookId_Val: '',
      bookInfo: {
        id: '',
        cid: '',
        sid: '',
        bookName: '',
        publisher: '',
        author: '',
        price: '',
        introduce: '',
        ISBN: '',
        imagesUrl: '',
        modifyCategory: '',
        ggct: '',
        returnGoods: '',
        invoice: '',
        promise: '',
        region: '',
        specialOffer: '',
        imagesDetails: [
          {
            id: '',
            bid: '',
            url: '',
            judge: '',
          },
        ],
        imagesThumbnails: [
          {
            id: '',
            bid: '',
            url: '',
            judge: '',
          },
        ],
      },
    }
  },
  components: {
    Top,
  },
  methods: {
    async getBookById() {
      const { data: res } = await this.$http.get('/book/getById', {
        params: {
          id: this.bookId_Val,
        },
      })
      if (res.code == 0) {
        this.bookInfo = res.data
      }
      // console.log(res.data.bookName)
    },
    search_val() {
      if (this.$route.params.bookName_Val) {
        this.bookName_Val = this.$route.params.bookName_Val
        window.sessionStorage.setItem('search', this.bookName_Val)
      }
      this.bookName_Val = sessionStorage.getItem('search')
    },
    bookId_val() {
      if (this.$route.params.bookId_Val) {
        this.bookId_Val = this.$route.params.bookId_Val
        window.sessionStorage.setItem('bookId', this.bookId_Val)
      }
      this.bookId_Val = sessionStorage.getItem('bookId')
    },
    search_button() {
      this.$router.push({
        name: 'search',
        params: { bookName_Val: this.bookName_Val },
      })
    },

    isToken() {
      if (window.sessionStorage.getItem('token')) {
        return (this.isLogin = 1)
      } else {
        return (this.isLogin = 0)
      }
      console.log(typeof this.isLogin)
    },
  },
  created() {
    this.bookId_val()
    this.search_val()
    this.getBookById()
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
.cent {
  width: 100%;
  //   background: #f4f4f4;
}

.top {
  width: 1180px;
  height: 40px;
  margin: 0 auto;
  // background: yellow;
}

.top_left {
  width: 350px;
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
  width: 810px;
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
  // background: pink;
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
  // background: chartreuse;
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
  width: 500px;
  height: 150px;
  // background: cornflowerblue;
  margin-top: 10px;
  float: left;
}
.ge1 {
  color: #dddddd;
  font-size: 17px;
  float: left;
  margin-top: 30px;
}
.yi {
  width: 100px;
  height: 40px;
  border: 1px dashed #ccc;
  // border-width: 1px ;
  float: left;
  margin-left: 30px;
  text-align: center;
  margin-top: 20px;
}
.yi span {
  height: 40px;
  line-height: 40px;

  font-size: 18px;
  color: #ccc;
}
.er {
  width: 100px;
  height: 40px;
  border: 1px solid #000;
  float: left;
  margin-left: 30px;
  text-align: center;
  margin-top: 20px;
}
.er span {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #000;
}
.er1 {
  width: 100px;
  height: 40px;
  border: 1px solid #000;
  float: left;
  margin-left: 100px;
  text-align: center;
  margin-top: 20px;
}
.er1 span {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #000;
}
.right_top5 {
  width: 650px;
  height: 70px;
  // background: chocolate;
  margin-top: 260px;
}
.right_top5_left {
  width: 190px;
  height: 57px;
  border: 3px solid #14aaff;
  float: left;
  margin-left: 30px;
  text-align: center;
  line-height: 57px;
}
.right_top5_left a {
  text-decoration: none;
  color: #14aaff;
  font-size: 20px;
}
.right_top5_right {
  width: 190px;
  height: 60px;
  background: #14aaff;
  float: left;
  margin-left: 30px;
  text-align: center;
  line-height: 60px;
}
.right_top5_right a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}
.last {
  width: 1180px;
  height: 800px;
  // background: chocolate;
  margin-top: 20px;
}
.last_left {
  width: 270px;
  height: 800px;
  // background: cornflowerblue;
  float: left;
}
.last_left1 {
  width: 265px;
  height: 260px;
  border: 1px solid #ccc;
}
.left1_top {
  width: 270px;
  height: 210px;
  float: left;
  text-align: center;
}
.left1_top img {
  width: 180px;
  height: 190px;
  margin-top: 20px;
}
.left1 {
  width: 270px;
  height: 50px;
  text-align: center;
}
.left1 span {
  color: red;
  font-size: 20px;
}
.last_right {
  width: 900px;
  height: 800px;
  // border: 1px solid red;
  float: right;
}
.right {
  width: 900px;
  height: 160px;
  // background: green;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.right_left {
  width: 170px;
  height: 160px;
  float: left;
  border-right: 1px solid #ccc;
  text-align: center;
}
.right_left h1 {
  color: #14aaff;
  margin-top: 30px;
}
.right_left span {
  color: #14aaff;
}
.right_left p {
  color: #14aaff;
}
.right_right {
  width: 600px;
  height: 160px;
  // background: #666;
  float: right;
  margin-right: 100px;
}
.right_right1 {
  width: 600px;
  height: 70px;
  // text-align: center;
  // line-height: 70px;
  // background: #1db69a;
  float: left;
  margin-top: 35px;
}
.right_right span {
  border: 1px solid #14aaff;
  color: #14aaff;
  margin-left: 30px;
}
.right_right2 {
  width: 600px;
  height: 30px;
  // border: 1px solid red;
  margin-top: 10px;
}
.right_right_2 {
  width: 900px;
  height: 160px;
  // background: #dddddd;
  border-top: 1px solid #ccc;
  margin-top: 160px;
}
.right_tu {
  width: 100px;
  height: 160px;
  float: left;
}
.right_tu img {
  width: 60px;
  height: 60px;
}
.tu_right {
  width: 800px;
  height: 160px;
  // background: yellow;
  float: right;
}
.hao {
  width: 200px;
  height: 20px;
  // border: 1px solid red;
  float: left;
  margin-top: 10px;
}
.hao span {
  color: #14aaff;
}
.ju {
  width: 600px;
  height: 20px;
  margin-top: 10px;
}
.ju img {
  width: 15px;
  height: 15px;
}
.ju span {
  color: red;
}
.tu_right p {
  margin-top: 10px;
  font-size: 18px;
}
.men {
  width: 200px;
  height: 20px;
  float: left;
  margin-top: 20px;
}
.men span {
  color: #ccc;
}
.ri {
  width: 100px;
  height: 20;
  margin-top: 20px;
  float: left;
}
.ri span {
  color: #ccc;
}
.right_png {
  width: 200px;
  height: 20px;
  margin-top: 20px;
  float: right;
  // border: 1px solid pink;
}
.ri_right {
  width: 100px;
  height: 20px;
  float: left;
  // background: #666;

  // margin-right: 100px;
}
.ri_right img {
  width: 15px;
  height: 12px;
}
.ri_right span {
  color: #ccc;
  font-size: 15px;
}
.ri_right2 {
  width: 90px;
  height: 20px;
  // margin-top: 20px;
  float: right;
}
.ri_right2 img {
  width: 15px;
  height: 12px;
}
.ri_right2 span {
  color: red;
  font-size: 15px;
}
</style>




