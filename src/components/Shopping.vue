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
      <el-checkbox v-model="isAllCheck" @change="selectedAll">全选</el-checkbox>
      <h7 style="margin-left: 500px">单价</h7>
      <h7>数量</h7>
      <h7>总额</h7>
      <h7>操作</h7>
    </div>
    <li class="shoplist"  v-for="(item,index) in shopCart" :key="index">
      <div class="pro-check">
        <el-checkbox
          v-model="item.select"
          @change="itemCheck(item)"
        ></el-checkbox>
      </div>
      <div class="pro-img">
        <img :src="item.imgSrc" alt="" />
      </div>
      <div class="pro-name">{{ item.title }}</div>
      <div class="pro-price">￥{{ item.price }}</div>
      <div class="pro-num">
        <el-input-number
          v-model="item.num"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </div>
      <div class="pro-total">￥{{ getTotalItem[index] }}</div>
      <div class="pro-action">
        <el-button type="danger" @click="removeShop(index)">删除</el-button>
      </div>
    </li>
  </div>
</template>

<script>
import Top from "../components/top.vue";

export default {
  data() {
    return {
      item:'',
      isAllCheck: false,
    }
  },
  selectedAll() {
    // 控制全选 全不选
    this.shopCart.forEach((item) => {
      !this.isAllCheck ? (item.select = false) : (item.select = true);
    })
  },
  itemCheck(item) {
    // 当子选项全选中时 全选按钮也要选中 反之则不选中
    var arrTrue = [] // 定义两个空数组 当子选项是选中的状态则放入arrTrue数组中反之放进arrFalse里
    var arrFalse = []
    this.shopCart.forEach((item) => {
      if (item.select) {
        arrTrue.push(item.select);
      } else {
        arrFalse.push(item.select);
      }
    })

    if (arrTrue.length == this.shopCart.length) {
      this.isAllCheck = true;
    }
    // 当arrFalse 长度大于0时 说明其中有 没有勾选的子选项
    if (arrFalse.length > 0) {
      this.isAllCheck = false;
    }
  },
  components: {
    Top,
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
</style>