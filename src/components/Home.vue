<template>
  <div class="center">
    <div class="top">
      <div class="top_left">
        <div class="tu">
          <a href=""><img src="../assets/images/ing1.png" alt=""></a>
        </div>
        <div class="de">
          <a href="">广东</a>
          <span>您好,请登录</span>
        </div>
      </div>
      <div class="top_right">
        <a href="">个人中心</a>
        <a href="">购物车</a>
        <a href="">收藏夹</a>
        <a href="">我的订单</a>
      </div>
    </div>
    <div class="kai">
      <div class="logo">
          <span><img src="../assets/images/ing2.png" alt=""></span>
      </div>
      <div class="three">
        <p>threefive</p>
        <span>.com</span>
      </div>
      <div class="kai_middle">
        <div class="sou">
          <form  class="input_form" action="">
            <a href=""><img src="../assets/images/ing4.png" alt=""></a>
            <input type="text" name="" placeholder="数据库管理">
            <button>搜索</button>
          </form>
            
        </div>
      </div>
      <div class="kai_right">
        <button>购物车3</button>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
*{
	margin: 0px auto;
	padding: 0px;
}
.clear{
	clear: both;
}
.center{
  width: 100%;
  // background: #ccc;
}
.center{
  width: 1180px;
  border: 1px solid #000;
}
.top{
  width: 1180px;
  height: 40px;
  background: yellow;
}
.top_left{
  width: 300px;
  height: 40px;
  // border: 1px solid red;
  float: left;
}
.tu{
  width: 30px;
  height: 40px;
  // background: grey;
  float: left;
}
.tu>a>img{
  width: 18px;
  height: 25px;
   margin-top: 5px;
  // background:  green;
}
.de{
  width: 250px;
  // height: 00px;
  // background: grey;
   margin-top: 5px;
   font-size: 20px;
   width: 200px;
}
.de a{
  text-decoration: none;
  color: #6C6C6C;
}
.de span{
  color: #3FB3FE;
  margin-left: 15px;
}
.top_right{
  width: 860px;
  height: 40px;
  // background: chocolate;
  float: right;
}
.top_right>a{
  text-decoration: none;
  color: #6C6C6C;
  float: right;
  width: 100px;
  // text-align: center;
  margin-top: 5px;
  font-size: 20px;
}
.kai{
  width: 1180px;
  height: 120px;
  // background: pink;
  margin-top: 20px;
}
.logo{
  width: 120px;
  height: 120px;
  background: chartreuse;
  float: left;
}
.logo img{
  width:90px;
  height: 100px;
}
.three{
  width: 150px;
  height: 120px;
  // border: 1px solid yellow;
  float: left;
  
}
.three p{
  font-size: 25px;
  margin-top: 10px;
  color: #14C9FF;
}
.three span{
  font-size: 35px;
  color: #14C9FF;
}
.kai_middle{
  width: 700px;
  height: 60px;
  // border: 2px solid cornflowerblue;
  float: left;
}
.sou{
  width: 700px;
  height: 60px;
  margin-top: 10p;
  // border: 3px solid #14A5FF;
}
.input_form{
  width: 700px;
  height: 60px;
  border: 3px solid #14C9FF;
	display: flex;
	justify-content: flex-end;
  align-items: center; 
  
}
.input_form>input {
	width: 700px;
	height: 60px;
	outline: none;
	border: none;
  margin-left: 10px;
  font-size: 20px;
  color: #14C9FF;
}
.input_form>a>img {
	width: 30px;
  height: 30px;
  float: left;
}
.input_form>button {
	width: 140px;
	height: 60px;
	padding-left: 10px;
	background: #1DB69A;
	border: none;
  color: #FFFFFF;
  font-size: 20px;
}
.kai_right button{
  width: 120px;
  height: 62px;
  float: right;
  margin-right: 60px;
  background: #1DB69A;
  color: #FFFFFF;
  font-size: 20px;
}


</style>