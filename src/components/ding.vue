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
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿</el-tab-pane
          >
        </el-tabs>
      </template>
    </div>
  </div>
</template>
    </div>
  </div>
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
  height: 400px;
  background: coral;
}
</style>