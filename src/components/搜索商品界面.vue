<template>
  <div>
    <Top></Top>
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
      <div class="shousuo_right">
        <el-input
          placeholder="请输入内容"
          v-model="bookName_Val"
          prefix-icon="el-icon-search"
        >
          <template slot="append"><span @click="search()">搜索</span></template>
        </el-input>
      </div>
    </div>
    <div style="width: 1190px; margin: 0 auto">
      <el-row>
        <el-col
          :span="4"
          v-for="(o, index) in bookInfo"
          :key="index"
          :offset="index == 0 || index == 4 ? 0 : 2"
        >
          <el-card :body-style="{ padding: '0px' }" class="cardBox">
            <div class="cardBoxImgBox">
              <img :src="o.imagesUrl" class="image" />
            </div>
            <div style="padding: 14px">
              <span>{{ o.price }}</span>
              <div class="bottom clearfix">
                <time class="min">{{ o.bookName }}</time>
                <el-button type="text" class="button">商品详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin: 0 auto">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>
  </div>
</template>


<script>
import Top from '../components/top.vue'

export default {
  data() {
    return {
      bookName_Val: '',
      bookInfo: [
        {
          id: '',
          cid: '',
          sid: '',
          bookName: '',
          publisher: '',
          author: '',
          price: '',
          introduce: '',
          imagesUrl: '',
          modifyCategory: '',
          ggct: '',
          returnGoods: '',
          invoice: '',
          promise: '',
          region: '',
          specialOffer: '',
          isbn: '',
        },
      ],
    }
  },
  components: {
    Top,
  },
  methods: {
    async search() {
      const { data: res } = await this.$http.get(
        'book/getBookNameLike/' + this.bookName_Val
      )
      if (res.code == 0) {
        this.bookInfo = res.data
      }
    },
  },
  input: '',
}
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
.shousuo_right {
  width: 700px;
  height: 190px;
  margin-left: 440px;
  margin-top: -190px;
  // border: 1px solid green;
}
.el-input {
  width: 600px;
  margin-top: 60px;
}
.min {
  font-size: 20px;
  color: #303133;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.cardBox {
  width: 250px;
  height: 350px;
}
.cardBoxImgBox {
  width: 250px;
  height: 250px;
}
.image {
  width: 100%;
  height: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
