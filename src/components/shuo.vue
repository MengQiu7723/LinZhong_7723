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
    <div class="zheng1_top">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部宝贝" name="first">
            <div class="tutu">
              <img src="../assets/images/ing02.png" alt="" />
              <div class="ka">
                <template>
                  <el-tabs v-model="subActiveName" @tab-click="handleClick">
                    <el-tab-pane label="童书23" name="first">
                      <div class="big">
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>

                    <el-tab-pane label="教育47" name="elevent">
                      <div class="big">
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥57</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥79</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥32</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥76</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="文艺8" name="third">
                      <div class="big">
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="人文社科7" name="fourth">
                      <div class="big">
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="励志1" name="fifth">
                      <div class="big">
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="生活0" name="sixth">
                      <div class="big1">
                        <div class="big1_mibble">
                          <img src="../assets/images/ing03.png" alt="" />
                          <p>这里没有你收藏的宝贝</p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="经管0" name="seventh">
                      <div class="big1">
                        <div class="big1_mibble">
                          <img src="../assets/images/ing03.png" alt="" />
                          <p>这里没有你收藏的宝贝</p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="科技2" name="eighth">
                      <div class="big">
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                        <div class="hezi">
                          <div class="hezi1"></div>
                          <div class="ti">
                            <p>宝贝名称</p>
                            <span>￥88</span>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="其它" name="niinth">
                      <div class="big"></div>
                    </el-tab-pane>
                  </el-tabs>
                </template>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="失效宝贝" name="second">
            <div class="shi">
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
              <div class="shi_he">
                <div class="he_top"></div>
                <div class="he_button">
                  <p>宝贝名称</p>
                  <span
                    ><img
                      src="../assets/images/ing03.png"
                      alt=""
                    />宝贝失效了</span
                  >
                </div>
              </div>
            </div>
          </el-tab-pane>
          <div class="ye">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<script>
import Top from "../components/common/top.vue";
export default {
  data() {
    return {
      activeName: "first",
      subActiveName: "first",
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
  // border: 1px solid #000;
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
.zheng1_top {
  width: 1180px;
  height: 50px;
  // background: pink;
}
.tutu {
  width: 1180px;
  height: 520px;
  // background: #ff0;
}
.tutu img {
  width: 20px;
  height: 20px;
  margin-top: 10px;
  // background: green;
}
.ka {
  width: 1150px;
  height: 20px;
  // background: #a1d4a1;
  float: right;
  // display: flex;
}
.big {
  width: 1180px;
  height: 470px;
  // background: red;
  float: left;
}
.hezi {
  width: 180px;
  height: 230px;
  // background: pink;
  float: left;
  margin-left: 10px;
}
.hezi1 {
  width: 180px;
  height: 180px;
  background: #7c7370;
}
.ti {
  width: 180px;
  height: 50px;
  // background: purple;
}
.ti p {
  text-align: center;
}
.ti span {
  color: red;
  margin-left: 60px;
}
.ye {
  width: 1180px;
  height: 50px;
  // background: chartreuse;
  text-align: center;
  margin-top: 30px;
}
.big1 {
  width: 1180px;
  height: 470px;
  // background: chartreuse;
}
.big1_mibble {
  width: 300px;
  height: 300px;
  // background: chocolate;
  margin-top: 100px;
}
.big1_mibble img {
  width: 200px;
  height: 200px;
  margin-left: 40px;
}
.big1_mibble p {
  font-size: 30px;
  color: #7c7370;
  text-align: center;
}
.shi {
  width: 1180px;
  height: 470px;
  // background: coral;
}
.shi_he {
  width: 180px;
  height: 210px;
  // background: cornflowerblue;
  float: left;
  margin-right: 15px;
  margin-top: 10px;
}
.he_top {
  width: 180px;
  height: 160px;
  background: #7c7370;
}
.he_button {
  width: 180px;
  height: 50px;
  // background: darkgoldenrod;
}
.he_button p {
  text-align: center;
  color: #7c7370;
}

.he_button span {
  // width: 80px;
  color: #7c7370;
  font-size: 15px;
  margin-left: 30px;
}
</style>