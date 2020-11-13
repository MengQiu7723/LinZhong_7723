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
              <div class="p-price">
                <strong
                  ><em>￥</em><i>{{ o.price }}</i></strong
                >
              </div>
              <div class="bottom clearfix">
                <time class="min">{{ o.bookName }}</time>
                <el-button type="text" class="button">商品详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="pagination">
      <div class="pagination_div">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
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
      /* 翻页 */
      currentPage: 1,
    }
  },
  components: {
    Top,
  },
  methods: {
    search_val() {
      if (this.$route.params.bookName_Val) {
        this.bookName_Val = this.$route.params.bookName_Val
        window.sessionStorage.setItem('search', this.bookName_Val)
      }
      this.bookName_Val = sessionStorage.getItem('search')
    },
    async search() {
      window.sessionStorage.setItem('search', this.bookName_Val)
      this.bookName_Val = sessionStorage.getItem('search')
      const { data: res } = await this.$http.get(
        'book/getBookNameLike/' + this.bookName_Val
      )
      if (res.code == 0) {
        this.bookInfo = res.data
      }
    },
    /* 翻页 */
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
  created() {
    this.search_val()
    this.search()
  },
}
</script>

<style lang="less" scoped>
em,
i {
  font-style: normal;
}
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
/* 商品卡片盒子 */
.cardBox {
  width: 250px;
  height: 350px;
  margin-bottom: 50px;
}
.cardBoxImgBox {
  width: 250px;
  height: 250px;
}
/* 卡片商品——价格 */
.p-price strong {
  color: #e4393c;
  font-weight: 400;
  font-size: 20px;
  font-family: Verdana;
}
.p-price strong em {
  font-size: 16px;
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
.pagination {
  width: 100%;
}
.pagination_div {
  width: 555px;
  margin: 0 auto;
}
</style>
