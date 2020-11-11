<template>
  <div class="center">
    <Top></Top>
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
            <input type="text" name="" placeholder="数据库管理" />
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
        <a href="">购物车3</a>
      </div>
    </div>
    <div class="xian"></div>
    <div class="zheng">
      <div class="zheng_left">
        <div class="fen">
          <span>图书分类</span>
        </div>
        <div class="dian">
          <a href="">电子书籍</a>
        </div>
        <div class="er">
          <p class="er1">儿童书籍</p>
          <div class="wen">
            <a href="" class="heng">文学</a>
            <a href="" class="heng">教育</a>
            <a href="" class="heng">启蒙</a>
            <a href="" class="heng">绘本</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">经济管理</p>
          <div class="wen">
            <a href="" class="heng">经济</a>
            <a href="" class="heng">管理</a>
            <a href="" class="heng">投资管理</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">科学科普</p>
          <div class="wen">
            <a href="" class="heng">计算机</a>
            <a href="" class="heng">科普</a>
            <a href="" class="heng">医学</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">生活</p>
          <div class="wen">
            <a href="" class="heng">美食</a>
            <a href="" class="heng">育儿</a>
            <a href="" class="heng">旅游</a>
            <a href="" class="heng">家居</a>
            <a href="" class="heng">宠物</a>
            <a href="" class="heng">美妆</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">人文社科</p>
          <div class="wen">
            <a href="" class="heng">历史</a>
            <a href="" class="heng">宗教</a>
            <a href="" class="heng">哲学</a>
            <a href="" class="heng">军事</a>
            <a href="" class="heng">政治</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">轻小说/小说</p>
        </div>
      </div>
      <div class="bigzheng">
        <div class="zheng_middle">
          <div class="block">
            <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
            <el-carousel height="340px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="zheng_right">
          <div class="deng">
            <el-input
              placeholder=""
              prefix-icon="el-icon-user"
              v-model="input2"
            >
            </el-input>
            <el-input
              placeholder=""
              prefix-icon="el-icon-unlock"
              v-model="input2"
            >
            </el-input>
            <div class="last">
              <div class="last_last">
                <a class="last_left">注册</a>
                <a class="last_right">找回密码</a>
              </div>
            </div>
            <div class="lu">
              <a href="">登录</a>
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
          <div class="zheng_right_buttom">
            <div class="block1">
              <el-carousel height="140px" width="180px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
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
          <div class="java">
            <div class="mei">
              <div class="niao">
                <a href=""><img src="../assets/images/ing9.png" alt="" /></a>
              </div>
              <div class="zi">
                <a href="">中国鸟类图鉴</a>
              </div>
              <div class="jia">
                <a href=""> ￥39.9</a>
              </div>
            </div>
            <div class="mei">
              <div class="niao">
                <a href=""><img src="../assets/images/ing10.png" alt="" /></a>
              </div>
              <div class="zi">
                <a href="">java从入门到精通</a>
              </div>
              <div class="jia">
                <a href=""> ￥29.9</a>
              </div>
            </div>
            <div class="mei">
              <div class="niao">
                <a href=""><img src="../assets/images/ing11.png" alt="" /></a>
              </div>
              <div class="zi">
                <a href="">游戏开发</a>
              </div>
              <div class="jia">
                <a href=""> ￥25.9</a>
              </div>
            </div>
            <div class="mei">
              <div class="niao">
                <a href=""><img src="../assets/images/ing12.png" alt="" /></a>
              </div>
              <div class="zi">
                <a href="">投资管理从入门到精通</a>
              </div>
              <div class="jia">
                <a href=""> ￥59.9</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/top.vue";
export default {
  data() {
    return {};
  },
  components: {
    Top,
  },
  methods: {
    search_button() {
      this.$router.push("/search");
    },
  },
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
  width: 230px;
  height: 50px;
  text-align: center;
  line-height: 45px;
  // background: #6C6C6C;
}
.dian a {
  text-decoration: none;
  font-size: 15px;
  color: #14aaff;
  font-weight: 600;
}
.er {
  width: 230px;
  height: 84px;
  // background: pink;
  text-align: center;
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
  height: 50px;
  text-align: center;
  width: 230px;
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
}
.last_right {
  float: right;
  color: #6c6c6c;
}
.lu {
  width: 200px;
  height: 32px;
  text-align: center;
  background: #14aaff;
}
.lu a {
  width: 100px;
  height: 32px;
  line-height: 35px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
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
  width: 20px;
  height: 20px;
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
.java {
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
</style>