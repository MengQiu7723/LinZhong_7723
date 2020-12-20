<template>
  <div>
    <Top></Top>
    <!-- 头部信息 -->
    <div class="header">
      <Logo class="logo"></Logo>
      <div class="register logo">
        <h2>下单中心</h2>
      </div>
      <div class="header_right">
        <el-input placeholder="请输入内容" v-model="bookName_Val">
          <template slot="append"
            ><el-button
              type="primary"
              icon="el-icon-search"
              @click="search_button()"
              >搜索</el-button
            ></template
          >
        </el-input>
      </div>
    </div>
    <!-- mian -->
    <div class="main">
      <div class="main_conter">
        <div>确认订单信息</div>
        <!-- 表头 -->
        <el-row
          style="width: 945px; min-height: 36px; background: #ccc"
          type="flex"
          align="middle"
        >
          <el-col :span="8"> </el-col>
          <el-col :span="16">
            <el-row type="flex" align="middle">
              <el-col align="middle"> <span>单价</span></el-col>
              <el-col align="middle"> <span>数量</span></el-col>
              <el-col align="middle"> <span>总额</span></el-col>
              <el-col align="middle"> <span>操作</span></el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- START -->
        <div v-for="(index, i) in tableData" :key="index.i">
          <el-row>
            <el-col :span="24"> 店铺：{{ i }} </el-col>
          </el-row>
          <div v-for="subIndex of index" :key="subIndex.id">
            <el-row
              style="width: 945px; min-height: 150px; border: 1px solid #e5e5e5"
              type="flex"
              align="middle"
            >
              <el-col :span="8">
                <el-row type="flex" justify="center" align="middle">
                  <el-col :span="1" :offset="1" align="middle">
                    <!-- 每个商品前的选择框 -->
                  </el-col>
                  <el-col :span="11" align="middle">
                    <img :src="subIndex.imagesUrl" height="120px" />
                  </el-col>
                  <el-col :span="12">{{ subIndex.bookName }}</el-col>
                </el-row>
              </el-col>
              <el-col :span="16">
                <el-row type="flex" align="middle">
                  <el-col align="middle">￥{{ subIndex.price }}</el-col>
                  <el-col align="middle">
                    <el-input-number
                      v-model="subIndex.number"
                      :min="1"
                      :max="99999"
                      size="mini"
                      label="描述文字"
                      disabled
                    ></el-input-number>
                  </el-col>
                  <el-col align="middle"
                    >￥{{ subIndex.price * subIndex.number }}</el-col
                  >
                  <el-col align="middle" @click.native="deleteById(subIndex.id)"
                    >删除</el-col
                  >
                </el-row>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- END -->
        <!-- 表底 -->
        <el-row
          style="width: 945px; min-height: 36px"
          type="flex"
          align="middle"
        >
          <el-col :span="8"> </el-col>
          <el-col :span="16">
            <el-row type="flex" justify="end" align="middle">
              <el-col :span="6" align="middle">
                <span
                  >已选商品<strong>&nbsp;{{ sumNumber }}&nbsp;</strong>件</span
                ></el-col
              >
              <el-col :span="8" align="middle">
                <span
                  >合计（不计运费）：<strong> ￥{{ sumPrice }}</strong></span
                ></el-col
              >
              <el-col :span="4" justify="center" align="middle">
                <div class="settlement" @click="addOrder()">
                  确认下单
                </div></el-col
              >
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/common/top.vue'
import Logo from '../components/common/Logo.vue'
export default {
  data() {
    return {
      bookName_Val: '',
      bookId_Val: '',
      orderInfo: {
        oid: '', //'string //订单编号',
        create_time: '', //'date //下单时间',
        payment_time: '', //'date //付款时间',
        consign_time: '', //'date //发货时间',
        end_time: '', //'date //完成时间',
        total_price: '', //double //总计',
        status: 0, //'int //状态',
        address: '银岭', //string //收货人地址',
        name: '张三', //'string //收货人姓名',
        telephone: 12345678910, //'string //收货人电话',
        orderDetails: [],
      },
      isIndeterminate: true,
      checkAll: false,
      sumNumber: 0,
      sumPrice: 0,
      tableData: [],
      tableDataList: [],
      tableDataListList: [],
      shopOptions: [],
    }
  },
  created() {
    this.search_val()
    this.bookId_val()
    this.getBookById()
    this.getShoppingCart()
  },
  components: {
    Top,
    Logo,
  },
  methods: {
    search_val() {
      if (this.$route.params.bookName_Val) {
        this.bookName_Val = this.$route.params.bookName_Val
        window.sessionStorage.setItem('search', this.bookName_Val)
      }
      this.bookName_Val = sessionStorage.getItem('search')
    },
    search_button() {
      this.$router.push({
        name: 'search',
        params: { bookName_Val: this.bookName_Val },
      })
    },
    bookId_val() {
      if (this.$route.params.bookId_Val) {
        this.bookId_Val = this.$route.params.bookId_Val
        window.sessionStorage.setItem('bookId', this.bookId_Val)
      }
      this.bookId_Val = sessionStorage.getItem('bookId')
      console.log('从商品页传来的书本id', this.bookId_Val)
    },
    /* 购物车 */
    async getShoppingCart() {
      /* 请求参数：id */
      var vm = this
      const res = await this.$http
        .get('shoppingCart/findByCart')
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status)
            if (error.response.status == 400) {
              vm.$message({
                message: '未登录或登录过期',
                type: 'error',
              })
              return
            }
          }
        })
      /* 状态处理 */
      // console.log('购物车的数据：', res.data)
      if (res.data.code == 0) {
        this.$message.success('获取成功')
        this.tableData = res.data.data
      }
      if (res.data.code == 1) {
        this.$message('获取失败')
      }
      /* 按店铺分组 */
      for (let i in this.tableData) {
        /* console.log(i)
        console.log(this.tableData[i]) */
        this.shopOptions.push(i)
        this.tableDataList.push(this.tableData[i])
      }
      /* 分析店铺下的每一个商品 */
      for (let i in this.tableDataList) {
        for (let j in this.tableDataList[i]) {
          this.tableDataListList.push(this.tableDataList[i][j])
        }
      }
      /* 统计商品初始值：数量与格价 */
      for (let i in this.tableDataListList) {
        this.sumNumber = this.sumNumber + this.tableDataListList[i].number
        this.sumPrice =
          this.sumPrice +
          this.tableDataListList[i].number * this.tableDataListList[i].price
      }
      /* 顺带来个uid */
      if (sessionStorage.getItem('userid')) {
        this.uid = sessionStorage.getItem('userid')
      } else {
        this.uid = this.$store.state.userInfo.id
      }
    },
    /* 获取书本信息 */
    async getBookById() {
      if (this.bookId_Val) {
        const { data: res } = await this.$http.get('book/getById', {
          params: {
            id: this.bookId_Val,
          },
        })
        if (res.code == 0) {
          this.orderInfo.orderDetails = res.data
        } else {
          this.$message.error(res.msg)
        }
      }
    },
    /* 多选 */
    handleCheckAllChange(val) {
      this.checkedShops = val ? this.shopOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.shopOptions.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.shopOptions.length
    },

    /* 添加书本信息+下单信息 */
    async addOrder() {
      var aData = new Date()
      /* 订单生成时间 */
      this.orderInfo.create_time = aData
      this.orderInfo.oid = this.uuid(18, 10)
      console.log(this.uuid(18, 10))
      /* 付款时间 
      this.orderInfo.payment_time = aData */

      /* 发货时间
      this.orderInfo.consign_time = aData */

      /* 订单完成时间
      this.orderInfo.end_time = aData */

      this.orderInfo.total_price = this.sumPrice
      this.orderInfo.orderDetails = this.tableDataListList
      /* 订单请求 */
      const { data: res } = await this.$http.post(
        'book_ord/insert',
        this.orderInfo
      )
      if (res.code == 0) {
        this.$message.success('下单成功！请在尽快完成付款。')
        this.deleteShopCar()
      }
    },
    async deleteShopCar() {
      const { data: res } = await this.$http.get('shoppingCart/deleteById', {
        // data: {
        id: 17,
        // },
      })
    },
    /* 随机uuid生成 */
    uuid(len, radix) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        ''
      )
      var uuid = [],
        i
      radix = radix || chars.length

      if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
      } else {
        // rfc4122, version 4 form
        var r

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | (Math.random() * 16)
            uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
          }
        }
      }

      return uuid.join('')
    },
  },
}
</script>

<style lang="less" scoped>
/* 声明清除浮动的样式 */
.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
/* ie6 7 专门清除浮动的样式*/
.clearfix {
  *zoom: 1;
}

.header {
  margin: 0 auto;
  width: 1180px;
  height: 150px;
}
.logo {
  margin-top: 38px;
}
.register {
  float: left;
  margin-left: 20px;
}
.header_right {
  float: right;
  width: 400px;
  height: 40px;
  margin-top: 55px;
  //   border: 1px solid blue;
}
.header_right .el-input {
  border: 2px solid #14a5ff;
}
.header_right .el-input .el-button {
  background-image: linear-gradient(to right, #14a5ff, #14d2ff) !important;
  // 14a5ff 14d2ff
  color: #ffffff !important;
}

.main {
  width: 1180px;
  margin: auto;
}
.main_conter {
  width: 985px;
  margin: auto;
}
.settlement {
  background: #ff4301;
  height: 50px;
  line-height: 50px;
}
.settlement:hover {
  cursor: pointer;
}
</style>