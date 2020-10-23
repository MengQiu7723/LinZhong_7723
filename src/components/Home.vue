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
        <div class="kai_button">
          <a href="" class="b1">UI设计理论</a>
          <a href="" class="b2">java从入门到入土</a>
          <a href="" class="b2">变秃就能变强</a>
        </div>
      </div>
      <div class="kai_right">
        <button>购物车3</button>
      </div>
    </div>
      <div class="xian"></div>
    <div class="zheng">
      <div class="zheng_left">
        <div class="fen">
          <span>图书分类</span>
        </div>
        <div class="dian">
          <a href="">电子书籍</a>
        </div>
        <div class="er">
          <p class="er1">儿童书籍</p>
          <div class="wen">
            <a href="" class="heng">文学</a>
            <a href="" class="heng">教育</a>
            <a href="" class="heng">启蒙</a>
            <a href="" class="heng">绘本</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">经济管理</p>
          <div class="wen">
            <a href="" class="heng">经济</a>
            <a href="" class="heng">管理</a>
            <a href="" class="heng">投资管理</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">科学科普</p>
          <div class="wen">
            <a href="" class="heng">计算机</a>
            <a href="" class="heng">科普</a>
            <a href="" class="heng">医学</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">生活</p>
          <div class="wen">
            <a href="" class="heng">美食</a>
            <a href="" class="heng">育儿</a>
            <a href="" class="heng">旅游</a>
            <a href="" class="heng">家居</a>
            <a href="" class="heng">宠物</a>
            <a href="" class="heng">美妆</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">人文社科</p>
          <div class="wen">
            <a href="" class="heng">历史</a>
            <a href="" class="heng">宗教</a>
            <a href="" class="heng">哲学</a>
            <a href="" class="heng">军事</a>
            <a href="" class="heng">政治</a>
          </div>
        </div>
        <div class="er">
          <p class="er1">轻小说/小说</p>
        </div>

      </div>
      <div class="zheng_middle">
        
      </div>
      <div class="zheng_right">
        <div class="deng"> 
          <form>
            <a href="" class="logo1"><img src="../assets/images/ing5.png" alt=""></a>
            <input type="text" class="zz" placeholder="">
          </form>
          <form>
            <a href="" class="logo1"><img src="../assets/images/ing6.png" alt=""></a>
            <input type="text" class="zz" placeholder="">
          </form>
          <div class="last">
            <div class="last_last">
              <a class="last_left">注册</a>
              <a class="last_right">找回密码</a>
            </div>

          </div>
          <div class="lu">  
            <button>登录</button>

          </div>
          <div class="wei">
            <a href="" class="qq"><img src="../assets/images/ing8.png" alt=""></a>
            <a href="" class="ww"><img src="../assets/images/ing7.png" alt=""></a>
          </div>
        </div>

      </div>
      <div class="zheng_middle_middle">

      </div>
      <div class="zheng_buttom">

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
  border: 1px solid #000;
}
.top{
  width: 1180px;
  height: 40px;
  // background: yellow;
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
.kai_right button{
  width: 120px;
  height: 62px;
  float: right;
  margin-right: 30px;
  background: #1DB69A;
  color: #FFFFFF;
  font-size: 20px;
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
.zheng{
  width: 1180px;
  height: 600px;
  background: grey;
}
.zheng_left{
  width: 230px;
  height: 600px;
  border: 2px solid #14AAFF;
  float: left;
}
.fen{
  width: 230px;
  height: 40px;
  background: #14AAFF;
  text-align: center;
  line-height: 40px;
}
.fen span{
  width: 230px;
  height: 43px;
  color: #fff;
  font-size: 15px;
}
.dian{
  width: 230px;
  height: 50px;
  text-align: center;
  line-height: 45px;  
  // background: #6C6C6C;
}
.dian a{
  text-decoration: none;
  font-size: 15px;
  color: #14AAFF;
  font-weight: 40px;
}
.er{
  width: 230px;
  height: 84px;
  background: pink;
  text-align: center;
}
.er1{
  width: 230px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  color: #14AAFF;
}
.wen{  
  height: 50px;
  text-align: center;
  width: 230px;
 
}
.wen a{
  color: #7D7D7D;
  text-decoration: none;
  font-size: 15px;
}
.wen>a.heng{
  justify-content: space-around;
  margin-left: 18px;
  height: 40px;
  margin-top: 5px;
  margin-right: 5px;
}
.zheng_middle{
  width: 650px;
  height: 350px;
  background: #3FB3FE;
  float: left;
}
.zheng_right{
  width: 280px;
  height: 350px;
  // background: red;
  float: left;
   margin-left: 10px;
}
.deng{
  width: 230px;
  height: 200px;
  border: 1px solid #14AAFF;
  // margin-top: 10px;
  justify-content: space-around;
  background: #fff;
}

.logo1{
  width: 25px;
  height: 25px;
}
.logo1 img{
  width: 25px;
  height: 25px; 
  margin-top: 10px;
  float: left;
  margin-left: 20px;
  background: #F4F4F4;
}
.zz{
  width: 150px;
  height: 25px;
  margin-top: 10px;
}

.last_last{
  width: 200px;
  height: 40px;font-size: 15px;
  margin-top: 10px;
}
.last_left{
  float:left;
  color: #14AAFF;
  height: 30px;
}
.last_right{
  float: right;
  color: #6C6C6C;
}
.lu{
  width: 200px;
  height: 35px;
   text-align: center;
}
.lu button{
  width: 100px;
  height: 35px;
  background: #14AAFF;
  font-size: 15px;
  margin-top: -5px;

}
.wei{
  width: 230px;
  height: 35px;
  // background: red;
}
.qq{
  width: 115px;
  margin-left: 60px;
}
.ww{
  width: 115px;
  margin-left: 60px;
}
.wei img{
  width: 25px;
  height: 25px;
  margin-top: 5px;
}

.zheng_middle_middle{
  width: 945px;
  height: 50px;
  background: green;
  float: right;
}
.zheng_buttom{
  width: 945px;
  height: 200px;
  background: yellow;
  float: left;
}

</style>