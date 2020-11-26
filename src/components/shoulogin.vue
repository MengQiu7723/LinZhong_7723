<template>
  <div class="shousuo">
    <div class="shousuo_left">
      <a href=""
        ><img src="../assets/images/1.png" alt="" id="shousuo_left1"
      /></a>
      <div class="shousuo_left_logo">
        <a href=""
          ><img src="../assets/images/2.png" alt="" id="shousuo_left2"
        /></a>
        <a href=""
          ><img src="../assets/images/3.png" alt="" id="shousuo_left3"
        /></a>
      </div>
    </div>
    <!-- <div class="shousuo_middle"></div> -->
    <!-- <div class="shousuo_right">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable
        prefix-icon="el-icon-search"
      >
        <template slot="append">搜索</template>
      </el-input>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: "",
    };
  },
};
</script>

<style lang:"less" scoped>
.shousuo {
  width: 1180px;
  height: 200px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.shousuo_left {
  width: 200px;
  height: 190px;
  /* // border: 1px solid yellow; */
}
#shousuo_left1 {
  width: 70px;
  margin-top: 45px;
}
.shousuo_left_logo {
  width: 100px;
  height: 80px;
  margin-left: 70px;
  margin-top: -80px;
  /* // border: 1px solid red; */
}
#shousuo_left2 {
  margin-top: 10px;
}
#shousuo_left3 {
  margin-top: 20px;
}
#shousuo_middle {
  margin-left: 200px;
  margin-top: -110px;
}
.shousuo_right {
  width: 700px;
  height: 190px;
  margin-left: 440px;
  margin-top: -190px;
  /* // border: 1px solid green; */
}
.el-input {
  width: 600px;
  margin-top: 90px;
}
</style>
