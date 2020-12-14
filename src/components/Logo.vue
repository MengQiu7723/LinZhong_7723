<template>
  <div>
    <div class="logo clearfix">
      <div class="logo_left">
        <img src="../assets/images/logo.png" alt="" />
      </div>
      <div class="logo_right">
        <div class="logo_right_top">
          <img src="../assets/images/logo1.png" alt="" />
        </div>
        <div class="logo_right_bottom">
          <img src="../assets/images/logo2.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="register">
      <h3>欢迎注册</h3>
    </div> -->
  </div>
</template>

<style scoped>
.logo {
  width: 170px;
  float: left;
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
.logo_left {
  float: left;
}
.logo_right {
  float: right;
  margin-top: 5px;
}
.logo_right_top {
  margin-bottom: 10px;
}
.logo_right_bottom {
  margin-top: 15px;
}
/* .register {
  float: left;
  margin-left: 20px;
} */
</style>