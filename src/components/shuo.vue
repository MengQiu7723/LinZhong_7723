<template>
  <div class="center">
    <Top></Top>
    <div class="cang">
      <div class="jia">
        <img src="../assets/images/ing01.png" alt="" />
        <div class="jia1">
          <span>收藏夹</span>
        </div>
        <div class="suo">
          <input type="text" name="" placeholder="" />
          <button>搜索</button>
        </div>
      </div>
    </div>
    <div class="zheng1">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部宝贝" name="first">
          <div class="zheng_top">
            <img src="../assets/images/ing02.png" alt="" />
            <div class="zi">
              <a href="">童书23</a>
              <a href="">教育47</a>
              <a href="">文艺8</a>
              <a href="">人文社科7</a>
              <a href="">励志1</a>
              <a href="">生活0</a>
              <a href="">经管0</a>
              <a href="">科技2</a>
              <a href="">其他</a>
            </div>
          </div>
          <div class="zheng_mibble">
            <div class="zheng_mibble_mibble">
              <div class="zheng_mibble_mibble_top"></div>
              <div class="zheng_mibble_mibble_buttom">
                <p>宝贝名称</p>
                <img src="../assets/images/ing03.png" alt="" />
                <span>宝贝失效了</span>
              </div>
            </div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
          </div>
          <div class="zheng_mibble">
            <div class="zheng_mibble_mibble">
              <div class="zheng_mibble_mibble_top"></div>
              <div class="zheng_mibble_mibble_buttom">
                <p>宝贝名称</p>
                <img src="../assets/images/ing03.png" alt="" />
                <span>宝贝失效了</span>
              </div>
            </div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
          </div>

          <div class="ye">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="失效宝贝" name="second">
          <div class="zheng_mibble">
            <div class="zheng_mibble_mibble">
              <div class="zheng_mibble_mibble_top"></div>
              <div class="zheng_mibble_mibble_buttom">
                <p>宝贝名称</p>
                <img src="../assets/images/ing03.png" alt="" />
                <span>宝贝失效了</span>
              </div>
            </div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
          </div>
          <div class="zheng_mibble">
            <div class="zheng_mibble_mibble">
              <div class="zheng_mibble_mibble_top"></div>
              <div class="zheng_mibble_mibble_buttom">
                <p>宝贝名称</p>
                <img src="../assets/images/ing03.png" alt="" />
                <span>宝贝失效了</span>
              </div>
            </div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
            <div class="zheng_mibble_mibble_top"></div>
          </div>

          <div class="ye">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Top from "../components/top.vue";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    Top,
  },
  methods: {
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
  border: 1px solid #000;
}
.cang {
  width: 100%;
  height: 50px;
  background: #14aaff;
}
.jia {
  width: 1180px;
  height: 50px;
  // border: 1px solid red;
}
.jia img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.jia1 {
  width: 100px;
  height: 30px;
  // border: 1px solid green;
  // float: left;
  margin-left: 40px;
  margin-top: -30px;
}
.jia1 span {
  font-size: 20px;
  color: #fff;
}
.suo {
  width: 400px;
  height: 35px;
  float: right;
  // background: crimson;
  margin-top: -36px;
}
.suo input {
  width: 330px;
  height: 25px;
}
.suo button {
  width: 65px;
  height: 29px;
}
.zheng1 {
  width: 1180px;
  height: 600px;
  // background: red;
}
.zheng_top {
  width: 1180px;
  height: 35px;
  background: #f8f8f8;
}
.zheng_top img {
  width: 25px;
  height: 25px;
  margin-top: 4px;
}
.zi {
  width: 1120px;
  height: 35px;
  // margin-top: -35px;
  float: right;
}
.zi a {
  text-decoration: none;
  width: 100px;
  height: 35px;
  line-height: 35px;
  color: #505050;
  // margin-top: -20px;
  // border: 1px solid green;
  display: inline-block;
}
.zi a:hover {
  color: #14aaff;
}
.zheng_mibble {
  width: 1180px;
  height: 230px;
  // background: yellow;
  display: flex;
  margin-top: 10px;
}
.zheng_mibble_mibble {
  width: 185px;
  height: 230px;
  // background: turquoise;
  float: left;
}
.zheng_mibble_mibble_top {
  width: 185px;
  height: 180px;
  float: left;
  background: #7c7370;
}
.zheng_mibble_mibble_buttom {
  width: 185px;
  height: 50px;
  background: #fff;
}
.zheng_mibble_mibble_buttom p {
  text-align: center;
}
.zheng_mibble_mibble_buttom img {
  // margin-top: 5px;
  // background: chartreuse;
  margin-left: 35px;
  width: 20px;
  height: 15px;
}
.ye {
  width: 1180px;
  height: 40px;
  text-align: center;
}
</style>