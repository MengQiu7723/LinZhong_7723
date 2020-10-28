<template>
<div class="center">
    <Top></Top>
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
        <div class="kai_button">
          <a href="" class="b1">UI设计理论</a>
          <a href="" class="b2">java从入门到入土</a>
          <a href="" class="b2">变秃就能变强</a>
        </div>
      </div>
      <div class="kai_right">
        <a href="">购物车3</a>
      </div>
    </div>
    <div class="xian"></div>
    <div class="babei">
      <p>全部宝贝</p>
    </div>
    <div class="xian1"></div>
    <div class="lei">
      <span>分类</span>
    </div>
    <div class="kuang">
      
    </div>
</div>
</template>
<script>
import Top from '../components/top.vue'
export default {
  
  data(){
    return{

    }
  },
  components:{
      Top
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
  border: 1px solid #000;
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
  // background: chartreuse;
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
.kai_right a{
  width: 120px;
  height: 62px;
  float: right;
  margin-right: 30px;
  background: #1DB69A;
  line-height: 62px;
  text-align: center;
  color: #FFFFFF;
  font-size: 20px;
  text-decoration: none;
}
.kai_button{
  width: 700px;
  height: 40px;
  // background: #ccc;
  margin-top: 20px;
}
.kai_button>a{
  // width: 150px;
  font-size: 13px;
  text-decoration: none;
  color: #6C6C6C;
  float: left;
  text-align: center;
}
.kai_button>a:hover{
  color: red;
  font-weight: 600;
}
.b1{
  width: 100px;
  height: 40px;
}
.b2{
  width: 130px;
  height: 40px;
}
.xian{
  height: 20px;
  width: 100%;
  border-top: 3px solid #14AAFF;
}
.babei{
  width: 1180px;
  height: 30px;
  // background: red;
}
.xian1{
  width: 1180px;
  height: 5px;
  border-top: 1px solid #000;
  
}
.lei{
  width:1180px;
  height: 20px;
  font-size: 15px;
  // margin-left: 20px;
}
.lei span{
  margin-left: 15px;
}
.kuang{
  width: 1180px;
  height: 350px;
  background: green;
}
</style>