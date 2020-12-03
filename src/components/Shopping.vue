<template>
  <div>
    <Top></Top>
    <!-- <Shoulogin></Shoulogin> -->
    <el-tabs v-model="activeName" @tab-click="handleClick()">
      <el-tab-pane label="全部商品" name="first">
        <!-- 行头标题 -->
        <div class="shangping">
          <div style="float: left">
            <el-checkbox v-model="checkAll" @change="handleCheckAllChange()"
              >全选</el-checkbox
            >
          </div>
          <div style="float: right">
            <span style="width: 50px">单价</span>
            <span style="width: 50px">数量</span>
            <span style="width: 50px">总额</span>
            <span style="width: 50px">操作</span>
          </div>
        </div>
        <!-- 多选框群组 -->
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange()"
        >
          <el-checkbox v-model="checkAll">店铺: 魅力图书店</el-checkbox>
          <div class="mlshangping">
            <el-checkbox v-model="checkAll" id="mlsp"></el-checkbox>
            <div class="mlshangping_photo">图书</div>
            <h6 style="margin-left: 180px">商品标题所发生的事孤独感工行个人</h6>
            <div class="mltsd_right">
              <div class="mltsd_danjia">
                <span>￥35.98</span>
                <h6 style="margin-top: 50px">￥25.98</h6>
              </div>
              <div class="mltsd_jsq">
                <el-input-number size="mini" v-model="num1"></el-input-number>
              </div>
              <div class="mltsd_ze">
                <h6 style="color: red; margin-top: 55px">￥25.98</h6>
              </div>
              <div class="mltsd_cz">
                <el-popconfirm title="此商品确定删除吗？">
                  <el-button slot="reference">删除</el-button>
                </el-popconfirm>
              </div>
            </div>
          </div>
        </el-checkbox-group>

        <!-- <el-checkbox v-model="checkAll" style="">店铺: 儿童图书馆</el-checkbox>
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
        <div class="mlshangping">
          <el-checkbox v-model="checkAll" id="mlsp"></el-checkbox>
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
        </div> -->
        <div class="gouwuche_js">
          <el-checkbox
            v-model="checkAll"
            @change="handleCheckAllChange"
            style="margin: 15px"
            >全选</el-checkbox
          >
          <el-link :underline="false">删除</el-link>
          <el-link :underline="false" style="margin-left: 15px"
            >删除失效商品</el-link
          >
          <el-button type="info" style="margin-left: 883px">信息按钮</el-button>
        </div>
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
import Top from '../components/top.vue'
import Shoulogin from '../components/shoulogin.vue'

export default {
  data() {
    return {
      /* 默认标签页 */
      activeName: 'first',
      /* 全选状态 */
      checkAll: true,
      checkedCities: '', //选中状态
      /* 商品数量 */
      num1: 1,
      num2: 1,
      num3: 1,
    }
  },
  components: {
    Top,
    Shoulogin,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    },
  },
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
.el-tabs {
  width: 1190px;
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
</style>