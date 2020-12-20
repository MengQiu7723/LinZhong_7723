<template>
  <div>
    <Top></Top>
    <div class="header">
      <Logo class="logo"></Logo>
      <div class="register logo">
        <h2>购物车</h2>
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
    <el-tabs v-model="activeName" @tab-click="handleClick()">

      <el-tab-pane label="全部商品" name="first">
        <!-- 表头 -->
        <el-row
          style="width: 945px; min-height: 36px; background: #ccc"
          type="flex"
          align="middle"
        >
          <el-col :span="8">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
          </el-col>
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
            <el-col :span="24">
              <el-checkbox-group
                v-model="checkedShops"
                @change="handleCheckedCitiesChange"
              >
                <el-checkbox class="sellerName" :label="i" :key="i"
                  >店铺：{{ i }}</el-checkbox
                >
              </el-checkbox-group>
            </el-col>
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
                    <el-checkbox :key="subIndex.id"></el-checkbox>
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
                      @change="
                        (val, oldVal) => {
                          handleChange(val, oldVal, subIndex.id)
                        }
                      "
                      :min="1"
                      :max="99999"
                      size="mini"
                      label="描述文字"
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
          <el-col :span="8">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
          </el-col>
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
                <div class="settlement" @click="settlement()">
                  去结算
                </div></el-col
              >
            </el-row>
          </el-col>
        </el-row>
        <!-- 123 -->
      </el-tab-pane>
      <el-tab-pane label="降价商品" name="second">
        <el-checkbox v-model="checkAll" style="">店铺: 儿童图书馆</el-checkbox>
        <div class="mlshangping">
          <el-checkbox v-model="checkAll" id="mlsp"></el-checkbox>
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
      </el-tab-pane>
      <el-tab-pane label="失效商品" name="third">
        <el-checkbox v-model="checkAll" style="">店铺: 儿童图书馆</el-checkbox>
        <div class="mlshangping">
          <el-checkbox v-model="checkAll" id="mlsp"></el-checkbox>
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Top from '../components/common/top.vue'
import Logo from '../components/common/Logo.vue'
export default {
  data() {
    return {
      /* 默认标签页 */
      activeName: "first",
      num2: true,
      bookName_Val:'',
      /* 多选表格 START*/
      tableData: [],
      tableDataList: [],
      tableDataListList: [],
      sumNumber: 0,
      sumPrice: 0,
      checkAll: false,
      checkedShops: [],
      shopOptions: [],
      isIndeterminate: true,
      uid: "",
    };
  },
  components: {
    Top,
    Logo,
  },
  created() {
    this.getShoppingCart();
  },
  methods: {
    /* 购物车 */
    async getShoppingCart() {
      /* 请求参数：id */
      var vm = this;
      const { data: res } = await this.$http
        .get("shoppingCart/findByCart")
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status)
            if (error.response.status == 400) {
              vm.$message({
                message: "未登录或登录过期",
                type: "error",
              });
            }
          }
        })
      /* 状态处理 */
      // console.log(res.data)
      if (res.code == 0) {
        this.$message.success("获取成功");
        this.tableData = res.data;
      }
      if (res.code == 1) {
        this.$message("获取失败");
      }
      /* 按店铺分组 */
      for (let i in this.tableData) {
        /* console.log(i)
        console.log(this.tableData[i]) */
        this.shopOptions.push(i);
        this.tableDataList.push(this.tableData[i]);
      }
      /* 分析店铺下的每一个商品 */
      for (let i in this.tableDataList) {
        for (let j in this.tableDataList[i]) {
          this.tableDataListList.push(this.tableDataList[i][j]);
        }
      }
      /* 统计商品初始值：数量与格价 */
      for (let i in this.tableDataListList) {
        this.sumNumber = this.sumNumber + this.tableDataListList[i].number;
        this.sumPrice =
          this.sumPrice +
          this.tableDataListList[i].number * this.tableDataListList[i].price;
      }
      /* 顺带来个uid */
      if (sessionStorage.getItem("userid")) {
        this.uid = sessionStorage.getItem("userid");
      } else {
        this.uid = this.$store.state.userInfo.id;
      }
    },
    /* 多选 */
    handleCheckAllChange(val) {
      this.checkedShops = val ? this.shopOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.shopOptions.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.shopOptions.length;
    },
    /* 计算器 */
    handleChange(currentValue, oldValue, id) {
      let index = 0;
      console.log("当前数量：", currentValue, "之前数数", oldValue, "ID", id);
      /* 此处拿到发生了变化的数据索引号:incex */
      for (let i in this.tableDataListList) {
        if (this.tableDataListList[i].id == id) {
          index = i;
          break;
        }
      }
      console.log(this.tableDataListList[index].number);
      /* 原数量：原数据 = 当前数量（currentValue） */
      this.tableDataListList[index].number = currentValue;
      /* 总组量：原有的基础上 + 变化后的数量（currentValue - oldValue） */
      this.sumNumber = this.sumNumber + currentValue - oldValue;
      /* 总价格：总价格 - 变化前占有的格格 + 变化后占有的价格*/
      this.sumPrice =
        this.sumPrice -
        this.tableDataListList[index].price * oldValue +
        this.tableDataListList[index].price * currentValue;
      this.updateShopcar(currentValue, index);
    },
    /* 删除购物车商品 */
    async deleteById(id) {
      const { data: res } = await this.$http.post("deleteById", {
        id: id,
      });
    },
    /* 修改购物车商品数量 */
    updateShopcar(currentValue, index) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { data: res } = this.$http.post("shoppingCart/update", {
          id: this.tableDataListList[index].id,
          bid: this.tableDataListList[index].bid,
          uid: this.uid,
          number: currentValue,
        });
      }, 500);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    settlement() {
      this.$router.push('/order')
    },
  },
};
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
.el-tabs {
  width: 945px;
  margin: 0px auto;
}
.shangping {
  width: 1190px;
  height: 30px;
  margin: 0px auto;
  background-color: #f4f4f4;
  // border: 1px solid red;
}
.shangping > span {
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
.sellerName {
  margin: 18px 0 15px 0;
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