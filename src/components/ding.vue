<template>
  <div class="center">
    <Top></Top>
    <div class="quan">
      <div class="logo">
        <span><img src="../assets/images/ing2.png" alt="" /></span>
      </div>
      <div class="three">
        <p>threefive</p>
        <span>.com</span>
      </div>
      <div class="ziti">
        <span>我的订单</span>
      </div>
      <div class="quan_right">
        <div class="sou">
          <form class="input_form" action="">
            <a href=""><img src="../assets/images/ing4.png" alt="" /></a>
            <input
              type="text"
              name=""
              placeholder="输入商品标题或订单号进行搜索"
            />
            <button @click="search_button">搜索</button>
          </form>
        </div>
      </div>
    </div>
    <div class="mibble">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">
            <div class="mibble_mibble">
              <div class="mibble_top">
                <div class="mibble_top_left">
                  <template
                    ><el-checkbox v-model="checked">2020-9-30</el-checkbox>
                  </template>
                  <span>订单号：1231231234567</span>
                  <a href="">火烧书店</a>
                </div>
                <div class="mibble_top_right">
                  <img src="../assets/images/ing05.png" alt="" />
                  <a href="">与我联系</a>
                  <div class="tubiao">
                    <i class="el-icon-delete-solid"></i>
                  </div>
                </div>
              </div>
              <div class="zheng">
                <div class="zheng_left">
                  <div class="pian">
                    <a href=""
                      ><img src="../assets/images/ing04.png" alt=""
                    /></a>
                  </div>
                  <div class="pian1">
                    <span>梓川笑太教你说话限定本[交易快照]</span>
                    <p>款式:大师单本</p>
                    <p>发货时间24小时内</p>
                  </div>
                  <div class="pian2"><span>￥42.9</span></div>
                  <div class="pian3"><span>1</span></div>
                  <div class="pian4">
                    <a href=""><p>申请售后</p> </a>
                    <a href=""><p>投诉卖家</p></a>
                  </div>
                </div>
                <div class="zheng_left_buttom">
                  <div class="bao">保险服务</div>
                  <div class="bao1">￥0.00</div>
                </div>
                <div class="zheng_right">
                  <div class="zheng_right_left">
                    <div class="left">
                      <p>￥42.9</p>
                      <span>(含运费:￥0.00)</span>
                    </div>
                    <div class="right">
                      <a href=""
                        ><p>交易成功</p>
                        <p>订单详细</p>
                        <p>查看物流</p>
                      </a>
                    </div>
                  </div>
                  <div class="zheng_right_right">
                    <a href="" class="jia">评价</a>
                    <a href=""><p>再次购买</p></a>
                  </div>
                </div>
              </div>
              <div class="zheng_buttom">
                <div class="buttom_left">宝贝</div>
                <div class="buttom-right">
                  <div class="buttom-buttom">单价</div>
                  <div class="buttom-buttom">数量</div>
                  <div class="buttom-buttom">商品操作</div>
                  <div class="buttom-buttom">是付款</div>
                  <div class="buttom-buttom">交易状态</div>
                  <div class="buttom-buttom">交易操作</div>
                </div>
              </div>
              <div class="yeye">
                <div class="ye">
                  <span>上一页</span>
                  <a href="">下一页</a>
                </div>
              </div>
              <div class="shu">
                <div class="shu1">
                  <a href="">＜</a>
                  <span>1</span>
                  <a href="">＞</a>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second">
            <div class="fu">
              <div class="fu_mibble">
                <img src="../assets/images/ing06.png" alt="" />
                <div class="fu_mibble_button">
                  <p>您还没有相关的订单</p>
                  <span>可以去看看有哪些想买</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待发货" name="third">
            <div class="fu">
              <div class="fu_mibble">
                <img src="../assets/images/ing06.png" alt="" />
                <div class="fu_mibble_button">
                  <p>您还没有相关的订单</p>
                  <span>可以去看看有哪些想买</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待收货" name="fourth">
            <div class="fu">
              <div class="fu_mibble">
                <img src="../assets/images/ing06.png" alt="" />
                <div class="fu_mibble_button">
                  <p>您还没有相关的订单</p>
                  <span>可以去看看有哪些想买</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待评价" name="fifth">
            <div class="fu">
              <div class="fu_mibble">
                <img src="../assets/images/ing06.png" alt="" />
                <div class="fu_mibble_button">
                  <p>您还没有相关的订单</p>
                  <span>可以去看看有哪些想买</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
    
<script>
import Top from "../components/top.vue";
export default {
  data() {
    return {
      activeName: "first",
      checked: true,
    };
  },
  components: {
    Top,
  },
  methods: {
    search_button() {},
    handleClick(tab, event) {
      console.log(tab, event);
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
  // border: 1px solid #000;
}
.quan {
  width: 1180px;
  height: 120px;
  //   background: chocolate;
  margin-top: 30px;
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
  height: 100px;
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
.ziti {
  width: 200px;
  //   background: cornflowerblue;
  height: 100px;
  float: left;
}
.ziti span {
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}
.quan_right {
  width: 710px;
  height: 100px;
  //   background: chartreuse;
  float: left;
}
.sou {
  width: 700px;
  height: 45px;
  //   margin-top: 40p;
  // border: 3px solid #14A5FF;
}
.input_form {
  width: 700px;
  height: 45px;
  border: 3px solid #14c9ff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
}
.input_form > input {
  width: 700px;
  height: 45px;
  outline: none;
  border: none;
  margin-left: 10px;
  font-size: 15px;
  color: #14c9ff;
}
.input_form > a > img {
  width: 20px;
  height: 20px;
  float: left;
}
.input_form > button {
  width: 140px;
  height: 45px;
  padding-left: 10px;
  background: #1db69a;
  border: none;
  color: #ffffff;
  font-size: 20px;
}
.mibble {
  width: 1180px;
  //   height: 400px;
  //   background: coral;
}
.mibble_mibble {
  width: 1180px;
  //   height: 250px;
  //   background: crimson;
  margin-top: 30px;
}
.mibble_top {
  width: 1180px;
  height: 50px;
  background: #e0e7eb;
}
.mibble_top_left {
  width: 590px;
  height: 50px;
  line-height: 50px;
  //   background: purple;
  float: left;
  margin-left: 20px;
}
.mibble_top_left span {
  margin-left: 20px;
  font-size: 13px;
  color: #999da1;
}
.mibble_top_left a {
  text-decoration: none;
  color: #000;
  float: right;
  margin-right: 50px;
  font-size: 15px;
}
.mibble_top_right {
  width: 570px;
  height: 50px;
  //   background: red;
  float: right;
}
.mibble_top_right img {
  margin-top: 15px;
}
.mibble_top_right a {
  text-decoration: none;
  background: #14d2ff;
  margin-left: 5px;
  font-size: 14px;
  color: #ffffff;
}
.tubiao {
  float: right;
  width: 50px;
  height: 30px;
  line-height: 50px;
}
.zheng {
  width: 1175px;
  height: 195px;
  border: 1px solid #e8eaeb;
}
.zheng_left {
  width: 720px;
  height: 160px;
  float: left;
  border-bottom: 1px solid #e8eaeb;
  border-left: 1px solid #e8eaeb;
  border-right: 1px solid #e8eaeb;
  display: flex;
}
.pian {
  width: 140px;
  height: 160px;
  //   background: yellow;
}
.pian img {
  widows: 100px;
  height: 140px;
  margin-top: 10px;
}
.pian1 {
  width: 180px;
  height: 160px;
  //   background: #ffff;
  padding: 10px;
}
.pian1 span {
  font-size: 16px;
  font-weight: 1000;
  margin-top: 20px;
}
.pian1 p {
  margin-top: 20px;
  font-size: 17px;
  color: #696969;
}
.pian2 {
  width: 100px;
  height: 130px;
  padding-top: 30px;
  //   background: red;
}
.pian2 span {
  margin-left: 20px;
  font-size: 17px;
  color: #696969;
}
.pian3 {
  width: 100px;
  height: 130px;

  padding-top: 30px;
}
.pian3 span {
  margin-left: 40px;
  font-size: 17px;
  color: #696969;
}
.pian4 {
  width: 140px;
  height: 130px;
  //   background: gray;
  padding-top: 30px;
  padding-left: 20px;
}
.pian4 a {
  text-decoration: none;
  color: #000;
  height: 160px;
  text-align: center;
}
.zheng_left_buttom {
  width: 720px;
  height: 30px;
  //   background: yellowgreen;
  border-right: 1px solid #e8eaeb;
  float: left;
}
.bao {
  width: 350px;
  height: 30px;
  float: left;
  margin-left: 10px;
  color: #696969;
  margin-top: 5px;
}
.bao1 {
  width: 350px;
  height: 30px;
  float: left;
  color: #696969;
  margin-top: 5px;
}
.zheng_right {
  width: 455px;
  height: 190px;
  //   background: turquoise;
  float: right;
  margin-top: -160px;
}
.zheng_right_left {
  width: 290px;
  height: 190px;
  //   background: chartreuse;
  float: left;
  border-right: 1px solid #e8eaeb;
  margin-top: -30px;
}
.left {
  width: 150px;
  height: 160px;
  float: left;
  text-align: center;
}
.left p {
  text-align: center;
  padding-top: 30px;
}
.left span {
  color: rgb(163, 137, 137);
}
.right {
  padding-top: 30px;
}
.right a {
  text-decoration: none;
}
.right p {
  color: #000;
  text-align: center;
  margin-top: 5px;
}
.zheng_right_right {
  width: 150px;
  height: 160px;
  //   background: red;
  float: right;
  padding-top: 30px;
}
.zheng_right_right a {
  text-decoration: none;
  color: #000;
  font-size: 17px;
  //   margin-top: 10px;
}
.zheng_right_right p {
  text-align: center;
  margin-top: 10px;
}
.jia {
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 25px;
  border: 1px solid #d4d7d9;
  margin-left: 40px;
}
.zheng_buttom {
  width: 1180px;
  height: 50px;
  background: #e0e7eb;
  margin-top: 30px;
}
.buttom_left {
  width: 450px;
  height: 50px;
  //   background: chocolate;
  float: left;
  text-align: center;
  line-height: 50px;
}
.buttom-right {
  width: 730px;
  height: 50px;
  //   background: chartreuse;
  float: right;
  display: flex;
}
.buttom-buttom {
  width: 110px;
  height: 50px;
  //   border: 1px solid red;
  margin-left: 10px;
  text-align: center;
  line-height: 50px;
}
.yeye {
  width: 1180px;
  height: 30px;
}
.ye {
  width: 150px;
  height: 30px;
  //   background: chocolate;
  float: right;
}
.ye span {
  width: 70px;
  border: 1px solid #acacac;
  line-height: 30px;
  height: 30px;
  color: #acacac;
}
.ye a {
  text-decoration: none;
  color: #000;
  border: 1px solid #000;
  margin-left: 20px;
}
.shu {
  width: 1180px;
  height: 50px;
  //   background: red;
}
.shu1 {
  width: 150px;
  //   background: coral;
  height: 50px;
  //   margin-right: 300px;
  text-align: center;
  line-height: 40px;
}
.shu1 a {
  text-decoration: none;
  color: #000;
  width: 40px;
  height: 40px;
  border: 1px solid #acacac;
  font-size: 20px;
  display: inline-block;
}
.shu1 span {
  width: 40px;
  color: #000;
  height: 40px;
  font-size: 20px;
  border: 1px solid #acacac;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
}
.fu {
  width: 1180px;
  height: 400px;
  // background: #14c9ff;
}
.fu_mibble {
  width: 300px;
  height: 400px;
  margin-top: 50px;
  // background: #696969;
  text-align: center;
}
.fu_mibble img {
  width: 200px;
  height: 200px;
}
.fu_mibble_button {
  text-align: center;
}
.fu_mibble_button p {
  color: #000;
  font-size: 20px;
}
.fu_mibble_button span {
  color: #999da1;
  font-size: 18px;
}
</style>