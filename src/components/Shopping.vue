<template>
  <div>
    <Top></Top>;
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
      <h1 id="shousuo_middle">购物车</h1>
      <div class="shousuo_right">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable
          prefix-icon="el-icon-search"
        >
          <template slot="append">搜索</template>
        </el-input>
      </div>
    </div>
    <el-divider></el-divider>
    <el-breadcrumb separator="|">
      <el-breadcrumb-item :to="{ path: '|' }">全部商品</el-breadcrumb-item>
      <el-breadcrumb-item><a href="">降价商品</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="">失效商品</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href=""></a></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="shangping">
      <el-checkbox v-model="checked" @change="selectedAll">全选</el-checkbox>
      <h7 style="margin-left: 500px">单价</h7>
      <h7>数量</h7>
      <h7>总额</h7>
      <h7>操作</h7>
    </div>
    <el-checkbox v-model="checked" style="margin-left: 180px"
      >店铺: 魅力图书店</el-checkbox
    >
    <div class="mlshangping">
      <el-checkbox v-model="checked" id="mlsp"></el-checkbox>
      <div class="mlshangping_photo">图书</div>
      <h6 style="margin-left: 180px">商品标题所发生的事孤独感工行个人</h6>
      <div class="mltsd_right">
        <div class="mltsd_danjia">
          <span>￥35.98</span>
          <h6 style="margin-top: 50px">￥35.98</h6>
        </div>
        <div class="mltsd_jsq">
          <el-input-number size="mini" v-model="num1"></el-input-number>
        </div>
        <div class="mltsd_ze">
          <h6 style="color: red; margin-top: 55px">￥35.98</h6>
        </div>
        <div class="mltsd_cz">
          <el-popconfirm title="此商品确定删除吗？">
            <el-button slot="reference">删除</el-button>
          </el-popconfirm>
        </div>
      </div>
    </div>
    <el-checkbox v-model="checked" style="margin-left: 180px"
      >店铺: 儿童图书馆</el-checkbox
    >
    <div class="mlshangping">
      <el-checkbox v-model="checked" id="mlsp"></el-checkbox>
      <div class="mlshangping_photo">图书</div>
      <h6 style="margin-left: 180px">商品标题所发生的事孤独感工行个人</h6>
      <div class="mltsd_right">
        <div class="mltsd_danjia">
          <h6 style="margin-top: 38px">￥29.9</h6>
        </div>
        <div class="mltsd_jsq">
          <el-input-number size="mini" v-model="num2"></el-input-number>
        </div>
        <div class="mltsd_ze">
          <h6 style="color: red; margin-top: 55px">￥55.98</h6>
        </div>
        <div class="mltsd_cz">
          <el-popconfirm title="此商品确定删除吗？">
            <el-button slot="reference">删除</el-button>
          </el-popconfirm>
        </div>
      </div>
    </div>
    <div class="mlshangping">
      <el-checkbox v-model="checked" id="mlsp"></el-checkbox>
      <div class="mlshangping_photo">图书</div>
      <h6 style="margin-left: 180px">商品标题所发生的事孤独感工行个人</h6>
      <div class="mltsd_right">
        <div class="mltsd_danjia">
          <h6 style="margin-top: 38px">￥29.9</h6>
        </div>
        <div class="mltsd_jsq">
          <el-input-number size="mini" v-model="num3"></el-input-number>
        </div>
        <div class="mltsd_ze">
          <h6 style="color: red; margin-top: 55px">￥55.98</h6>
        </div>
        <div class="mltsd_cz">
          <el-popconfirm title="此商品确定删除吗？">
            <el-button slot="reference">删除</el-button>
          </el-popconfirm>
        </div>
      </div>
    </div>
    <div class="gouwuche_js">
      <el-checkbox v-model="checked" @change="selectedAll" style="margin: 15px"
        >全选</el-checkbox
      >
      <el-link :underline="false">删除</el-link>
      <el-link :underline="false" style="margin-left: 15px"
        >删除失效商品</el-link
      >
      <el-button type="info" style="margin-left: 883px">信息按钮</el-button>
      <!-- <div class="gouwuche_js_jsbutton">
        <h6>已选商品</h6>
        <h7 style="color: red">0</h7>
        <h6>件</h6>
      </div> -->
    </div>
  </div>
</template>

<script>
import Top from "../components/top.vue";

export default {
  data() {
    return {
      checked: true,
      num1: 1,
      num2: 1,
      num3: 1,
    };
  },
  components: {
    Top,
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped>
.shousuo {
  width: 1180px;
  height: 200px;
  margin: 0 auto;
  // border: 1px solid red;
}
.shousuo_left {
  width: 200px;
  height: 190px;
  // border: 1px solid yellow;
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
  // border: 1px solid red;
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
  // border: 1px solid green;
}
.el-input {
  width: 600px;
  margin-top: 90px;
}
.el-divider {
  background-color: #14c6ff;
  margin-top: -50px;
}
.el-divider--horizontal {
  height: 6px;
}
.el-breadcrumb {
  margin-left: 180px;
}
.shangping {
  width: 1190px;
  height: 30px;
  margin: 0px auto;
  background-color: #f4f4f4;
  // border: 1px solid red;
}
.shangping > h7 {
  margin: 60px;
}
.mlshangping {
  width: 1190px;
  height: 150px;
  margin: 0px auto;
  position: relative;
  border: 1px solid #e5e5e5;
}
.mlshangping_photo {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50px;
  border: 1px solid #e5e5e5;
}
#mlsp {
  margin-left: 20px;
  top: 55px;
}
.mltsd_right {
  width: 650px;
  height: 150px;
  position: absolute;
  right: 50px;
  top: 0px;
  // border: 1px solid red;
}
.mltsd_danjia {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
  left: 50px;
  // border: 1px solid red;
}
.mltsd_danjia > span {
  text-decoration: line-through;
  position: absolute;
  top: 20px;
  color: #6c6c6c;
}
.mltsd_jsq {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 170px;
  // border: 1px solid red;
}
.mltsd_ze {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 355px;
  // border: 1px solid red;
}
.mltsd_cz {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 490px;
  // border: 1px solid red;
}
.el-button {
  margin-top: 40px;
}
.gouwuche_js {
  width: 1190px;
  height: 80px;
  margin: 20px auto;
  border: 1px solid #e5e5e5;
}
.gouwuche_js_jsbutton {
  width: 200px;
  height: 30px;
  position: absolute;
  right: 50px;
  border: 1px solid red;
}
</style>