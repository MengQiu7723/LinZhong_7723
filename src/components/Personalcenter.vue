<template>
  <div>
    <Top></Top>
    <!-- 头部信息 -->
    <div class="header">
      <Logo class="logo"></Logo>
      <div class="register logo">
        <h2>个人中心</h2>
      </div>
      <div class="header_right">
        <el-input placeholder="请输入内容" v-model="input2">
          <template slot="append"
            ><el-button type="primary" icon="el-icon-search"
              >搜索</el-button
            ></template
          >
        </el-input>
      </div>
    </div>

    <!-- 个人信息主要区 -->
    <div class="content_bg">
      <div class="content clearfix">
        <!-- 用户部分 -->
        <div class="usercard">
          <div class="user">
            <div class="headportrait">
              <img src="../assets/images/头像1.jpg" alt="" />
            </div>
            <div class="username">
              <p>35_threefive1034879</p>
            </div>
            <p class="usercredit">
              <span>信用等级&nbsp;&nbsp;</span>
              <span><strong>&nbsp;&nbsp;极好</strong></span>
            </p>
          </div>
          <!-- 我的钱包 -->
          <div class="wallet">
            <div class="qianbao">
              <span>我的钱包</span>
              <span>
                <div class="walletIcon">
                  <i class="el-icon-view" v-if="value == false"></i>
                  <i class="el-icon-view walletIconColor" v-else></i>
                </div>
                <el-switch
                  v-model="value"
                  active-color="#14a5ff"
                  inactive-color="#ccc"
                >
                </el-switch>
              </span>
            </div>
            <div class="walletbottom clearfix">
              <div class="balance">
                <p v-if="value == false">***</p>
                <p v-else>1789.12</p>
                <p>余额</p>
              </div>
              <div class="coupon">
                <p v-if="value == false">***</p>
                <p v-else>4</p>
                <p>优惠券</p>
              </div>
              <div class="bankcard">
                <p v-if="value == false">***</p>
                <p v-else>2</p>
                <p>银行卡</p>
              </div>
            </div>
          </div>
          <!-- 我的关注 -->
          <div class="follow">
            <div class="myfollow"><span>我的关注</span></div>
            <div class="concern clearfix">
              <div class="commodityconcerns">
                <p>12</p>
                <p>商品关注</p>
              </div>
              <div class="storeattention">
                <p>3</p>
                <p>店铺关注</p>
              </div>
              <div class="collection">
                <p>2</p>
                <p>收藏</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 下半部竕 -->
        <div class="main clearfix">
          <div class="main_left">
            <div v-for="index of menuList" :key="index.id" class="center">
              <p>{{ index.name }}</p>
              <ul>
                <li
                  v-for="subIndex of index.children"
                  :key="subIndex.id"
                  @click="onclick(subIndex.id)"
                >
                  <span> {{ subIndex.name }}</span>
                </li>
              </ul>
            </div>

            <!-- <div class="center">
              <p>订单中心</p>
              <ul>
                <li>我的订单</li>
                <li>我的评价</li>
                <li>我的地址</li>
              </ul>
            </div>
            <div class="center">
              <p>我的钵包</p>
              <ul>
                <li>优惠券</li>
                <li>银行卡</li>
                <li>信誉等级</li>
              </ul>
            </div>
            <div class="center">
              <p>客户服务</p>
              <ul>
                <li>价格保护</li>
                <li>售后服务</li>
                <li>意风反馈</li>
              </ul>
            </div> -->
          </div>
          <div class="main_right">
            <!-- 我的订单 -->
            <div v-if="menuListId == 111">
              <div class="main_right_header">
                <span>我的订单</span>
              </div>
              <div class="main_right_content clearfix">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
              <div class="main_right_bottom">
                <div class="main_right_bottom_post">
                  <div>
                    <img src="" alt="图片加载区" />
                  </div>
                  <div>
                    <p>
                      <span>[发货地]&nbsp;</span>
                      <span>[物流信息]</span>
                    </p>
                    <p>
                      <span>[快递公司]</span>
                      <span>&nbsp;|&nbsp;</span>
                      <span>[yyyy-mm-dd : hh:mm:ss]</span>
                    </p>
                  </div>
                  <div>></div>
                </div>
              </div>
            </div>
            <!-- 我的评价 -->
            <div v-if="menuListId == 112">我的评价</div>
            <!-- 我的地址 -->
            <div v-if="menuListId == 113">
              <div class="main_right_header">
                <span> 我的地址</span>
                <span>已保存*条地址，还能保存*条</span>
                <span @click="openAddDialog" style="color: #fff"
                  >+ 添加新地址</span
                >
              </div>
              <div class="addressTableBox">
                <el-table :data="tableData" stripe border style="width: 100%">
                  <el-table-column prop="name" label="收货人" align="center">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="所在地区"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="fullAddress"
                    label="详细地址"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="postCode"
                    label="邮编"
                    align="center"
                    width="80"
                  ></el-table-column>
                  <el-table-column
                    prop="tel"
                    label="电话/手机"
                    align="center"
                  ></el-table-column>
                  <el-table-column label="操作" align="center" width="70">
                    <button @click="openAddDialog">修改</button>
                    <button>删除</button>
                  </el-table-column>
                  <el-table-column label="地址操作" align="center">
                    <template slot-scope="scope">
                      <span v-if="scope.row.defaultAddress == 1">默认地址</span>
                      <span v-else>设为默认</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>

            <!-- 优惠券 -->
            <div v-if="menuListId == 121">优惠券</div>
            <!-- 银行卡 -->
            <div v-if="menuListId == 122">银行卡</div>
            <!-- 信誉等级 -->
            <div v-if="menuListId == 123">信誉等级</div>

            <!-- 价格保护 -->
            <div v-if="menuListId == 131">价格保护</div>
            <!-- 售后服务 -->
            <div v-if="menuListId == 132">售后服务</div>
            <!-- 意见反馈 -->
            <div v-if="menuListId == 133">意见反馈</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 个人信息主要区 -->

    <!-- 收货地址的弹出窗 -->
    <el-dialog
      title="收货地址"
      :visible.sync="addDialogVisible"
      :before-close="handleClose"
      width="600px"
      lock-scroll
    >
      <!-- 主体区域 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
      >
        <el-form-item label="收货人" prop="addressee">
          <el-input v-model="ruleForm.addressee" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址信息" prop="fullAddress">
          <el-input
            v-model="ruleForm.fullAddress"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="fullAddress">
          <el-input v-model="ruleForm.fullAddress"></el-input>
        </el-form-item>

        <el-form-item label="邮政编码" prop="postCode">
          <el-input v-model.number="ruleForm.postCode"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input
        ></el-form-item>
        <el-form-item label="地址标签">
          <el-row :gutter="5">
            <el-col :span="3"><el-tag>住宅</el-tag></el-col>
            <el-col :span="3"> <el-tag type="success">学校</el-tag></el-col>
            <el-col :span="3"> <el-tag type="info">公司</el-tag></el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <!--  <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存提交</el-button
        > -->
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Top from '../components/common/top.vue'
import Logo from '../components/common/Logo.vue'
export default {
  data() {
    var checkAddressee = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('收件人不能为空'))
      }
    }
    /*  */
    var checkFullAddress = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入详细地址'))
      }
    }
    var checkPostCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮政编码'))
      }
    }
    var checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机'))
      }
    }
    return {
      value: false,
      input2: '',
      /* 左侧菜单 */
      menuList: [
        {
          id: 101,
          name: '订单中心',
          children: [
            { id: 111, name: '我的订单' },
            { id: 112, name: '我的评价' },
            { id: 113, name: '我的地址' },
          ],
        },
        {
          id: 102,
          name: '我的钵包',
          children: [
            { id: 121, name: '优惠券' },
            { id: 122, name: '银行卡' },
            { id: 123, name: '信誉等级' },
          ],
        },
        {
          id: 103,
          name: '客户服务',
          children: [
            { id: 131, name: '价格保护' },
            { id: 132, name: '售后服务' },
            { id: 133, name: '意见反馈' },
          ],
        },
      ],
      menuListId: 111,
      /* 收货地址 */
      tableData: [
        {
          name: '王小虎',
          address: '广东省阳江市江城区',
          fullAddress: '白沙银岭科技产业园B9-5号 职院创新创业基地',
          postCode: '525000',
          tel: '12345678910',
          defaultAddress: 1,
        },
        {
          name: '王小虎',
          address: '广东省阳江市江城区',
          fullAddress: '白沙银岭科技产业园B9-5号 职院创新创业基地',
          postCode: '525000',
          tel: '12345678910',
          defaultAddress: 0,
        },
        {
          name: '王小虎',
          address: '广东省阳江市江城区',
          fullAddress: '高凉路213号阳江职业技术学院',
          postCode: '525000',
          tel: '12345678910',
          defaultAddress: 0,
        },
      ],
      //控制地址对话框的显示与隐藏
      addDialogVisible: false,
      /* 地址表单 */
      ruleForm: {
        addressee: '',
        /* checkPass: '', */
        fullAddress: '',
        postCode: '',
        tel: '',
      },
      rules: {
        addressee: [{ validator: checkAddressee, trigger: 'blur' }],
        /* pass: [{ validator: validatePass, trigger: 'blur' }], */
        fullAddress: [{ validator: checkFullAddress, trigger: 'blur' }],
        postCode: [{ validator: checkPostCode, trigger: 'blur' }],
        tel: [{ validator: checkTel, trigger: 'blur' }],
      },
    }
  },
  components: {
    Top,
    Logo,
  },
  methods: {
    search_button() {
      this.$router.push('/search')
    },
    /* 对话框 */
    openAddDialog() {
      this.addDialogVisible = true
    },
    handleClose() {
      this.addDialogVisible = false
    },
    onclick(id) {
      this.menuListId = id
    },
    /* 地址表单 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.handleClose()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>


<style lang="less" scoped>
ul,
li {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.header {
  // position: relative;
  margin: 0 auto;
  width: 1180px;
  height: 150px;
  // background: pink;
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

/* 个人信息卡片区 */
.content_bg {
  background-color: #f8f8f8;
  padding: 20px 0 20px 0;
}

.content {
  margin: 0 auto;
  width: 1180px;
  // background-color: pink;
}
.usercard {
  width: 1180px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
/* 头像与信用 */
.user {
  width: 300px;
  height: 300px;
  background: url(../assets/images/名片.png) no-repeat;
  background-size: 100% 100%;
  float: left;
  filter: drop-shadow(0 0 5px #14a5ff);
}
.headportrait {
  margin: 40px auto;
  width: 100px;
  height: 100px;
  border: 5px solid #ffffff;
  overflow: hidden;
  border-radius: 50%;
}
.headportrait img {
  position: relative;
  width: 100%;
  bottom: 30px;
}
.username {
  margin: 0 auto;
}
.username p {
  text-align: center;
  font-size: larger;
  color: #ffffff;
}
.usercredit {
  color: #fff;
  text-align: center;
}

/* 钱包 */
.wallet {
  width: 420px;
  height: 300px;
  background-color: #ffffff;
  float: left;
  // border-radius: 5px;
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  // background: linear-gradient(145deg, #5bc6ff, #4da7db);
  // box-shadow: 5px 5px 5px #f8f8f8;
}
.qianbao {
  width: 375px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
/* 我的钱包字体 */
.qianbao span:first-child {
  line-height: 60px;
  margin-left: 20px;
  font-size: 22px;
  color: #999999;
  font-weight: lighter;
}
.walletIcon {
  float: left;
  margin-top: 7px;
}
.walletIcon i {
  font-size: 28px;
}
.walletIconColor {
  color: #14a5ff;
}
/* 我的钱包：右侧开关 */
.qianbao span:nth-child(2) {
  height: 60px;
  line-height: 60px;
  margin-right: 20px;
  color: #cccccc;
}
.qianbao span:nth-child(2):hover {
  color: #14a5ff;
  transition: color 0.15s linear;
}
.qianbao span:nth-child(2) i {
  padding-top: 10px;
  margin-right: 15px;
}
.walletbottom {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.balance {
  float: left;
  width: 150px;
  padding-left: 10px;
  overflow: hidden;
}
.balance p {
  font-size: 26px;
  font-weight: 700;
}
.balance p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.coupon {
  float: left;
  width: 100px;
  // height: 140px;
  overflow: hidden;
}
.coupon p {
  font-size: 26px;
  font-weight: 700;
}
.coupon p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.bankcard {
  float: left;
  width: 100px;
  overflow: hidden;
}
.bankcard p {
  font-size: 26px;
  font-weight: 700;
}
.bankcard p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}

/* 我的关注 */
.follow {
  width: 420px;
  height: 300px;
  background-color: #ffffff;
  float: right;
 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.myfollow {
  width: 375px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.myfollow span {
  line-height: 60px;
  margin-left: 25px;
  font-size: 22px;
  color: #999999;
  font-weight: lighter;
}
.concern {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.commodityconcerns {
  float: left;
  width: 150px;
  height: 140px;
  padding-left: 10px;
  overflow: hidden;
}
.commodityconcerns p {
  font-size: 26px;
  font-weight: 700;
}
.commodityconcerns p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.storeattention {
  float: left;
  width: 110px;
  height: 140px;
  overflow: hidden;
}
.storeattention p {
  font-size: 26px;
  font-weight: 700;
}
.storeattention p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}
.collection {
  float: left;
  width: 90px;
  height: 140px;
  overflow: hidden;
}
.collection p {
  font-size: 26px;
  font-weight: 700;
}
.collection p:nth-child(2) {
  font-weight: 500;
  font-size: 20px;
}

/* main */
.main {
  width: 1180px;
}
/* main-left */
.main_left {
  width: 300px;
  float: left;
  // background-color: pink;
  background-color: #fff;
}
.main_left div:nth-child(1),
.main_left div:nth-child(2) {
  border-bottom: 1px solid #ccc;
}
.center {
  text-align: center;
  line-height: 28px;
  margin: 0 28px 0 28px;
  padding-bottom: 28px;
}
.center p:first-child {
  font-size: 22px;
}
.center li{
  transition: background-color  .2s ease;
}
.center li:hover{
  background-color: #D9D9D9;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(217, 217, 217, 0.8);
}
.center li span{
transition: color .2s ease;
}
.center li span:hover{
  color: #14a5ff;
  // cursor: pointer;
}


/* main-right */
.main_right {
  width: 840px;
  float: right;
  // background-color: #00bfff;
  background-color: #fff;
}
.main_right_header {
  width: 750px;
  height: 72px;
  margin: auto;
  border-bottom: 2px solid #ccc;
}
.main_right_header span:first-child {
  line-height: 72px;
  margin-left: 30px;
  font-size: 22px;
}
.main_right_header span:nth-child(2) {
  color: #757575;
  margin-left: 20px;
}
.main_right_header span:nth-child(3) {
  float: right;
  height: 20px;
  margin-top: 20px;
  padding: 5px;
  background-color: #15a6ff;
  border-radius: 10px;
}

.main_right_content {
  height: 160px;
  border-bottom: 1px solid #ccc;
}
.main_right_content ul li {
  float: left;
}
.main_right_bottom {
  width: 100%;
}
.main_right_bottom_post {
  height: 130px;
  border-bottom: 1px solid #ccc;
}

.main_right_bottom_post div:nth-child(1) {
  float: left;
  margin-left: 20px;
  line-height: 130px;
}
.main_right_bottom_post div:nth-child(2) {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
}
.main_right_bottom_post div:nth-child(3) {
  float: right;
  margin-right: 20px;
  line-height: 130px;
}
.addressTableBox {
  width: 750px;
  margin: auto;
}
</style>