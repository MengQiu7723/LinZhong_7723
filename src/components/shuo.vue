<template>
  <div class="center">
    <Top></Top>
    <div class="cang">
      <div class="jia">
        <img src="../assets/images/ing01.png" alt="" />
        <div class="jia1">
          <span>收藏夹</span>
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
  border: 1px solid red;
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
</style>