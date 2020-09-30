<!--  -->
<template>
<div id="shopping">
 <Header2></Header2> 

    <!-- 头部 -->
  
    <!-- 购物车 -->
    <div id="prolist">
      <div class="box1">
       <div class="box1_1">
         <img src="" alt="">
       </div>
       <div class="box1_2">
      <p>米家感应灯</p>
      <p>售价：49元</p>

      <div class="box1_3">
        <span>+</span>
        <input type="text" name="" id="">
        <span>-</span>
        <input type="button" value="删除" class="ben">
      </div>
       </div>

      </div>
      <div class="box2">
        <h5>// 猜你喜欢 //</h5>
        <p>——实施推荐你的心心念念——</p>
      </div>
      <div class="box3">
        <ul>
          <li>
            <img src="" alt="" />
            <h4>13.3笔记本i5 独显</h4>
            <h5>指纹解锁，全金属机身</h5>
            <p>￥ 5199</p>
          </li>
            <li>
            <img src="" alt="" />
            <h4>13.3笔记本i5 独显</h4>
            <h5>指纹解锁，全金属机身</h5>
            <p>￥ 5199</p>
          </li>
            <li>
            <img src="" alt="" />
            <h4>13.3笔记本i5 独显</h4>
            <h5>指纹解锁，全金属机身</h5>
            <p>￥ 5199</p>
          </li>
            <li>
            <img src="" alt="" />
            <h4>13.3笔记本i5 独显</h4>
            <h5>指纹解锁，全金属机身</h5>
            <p>￥ 5199</p>
          </li>
  <li>
            <img src="" alt="" />
            <h4>13.3笔记本i5 独显</h4>
            <h5>指纹解锁，全金属机身</h5>
            <p>￥ 5199</p>
          </li>
            <li>
            <img src="" alt="" />
            <h4>13.3笔记本i5 独显</h4>
            <h5>指纹解锁，全金属机身</h5>
            <p>￥ 5199</p>
          </li>         
        </ul>
      </div>
    </div>
    <!-- 尾部 -->

    <Footer></Footer>
 </div>
  
</template>

<script>
import Footer from '../../components/Footer'
import Header2 from'../../components/Header2'
export default {
  components: {
    Footer,
    Header2
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style  >

#prolist {
  overflow-y: auto;
  background: #f3f3f3;
    margin-top: 50px;
}
.box1 {
  width: 750px;
  height: 180px;
  background: #ffff;  
  display: flex;

}
.box1_1{ 
   width: 150px;
   height: 180px;
  
}
.box1_1 img{
  width: 120px;
  height: 150px;

   margin-left: 10px;
   margin-top: 10px;
 
  
}
.box1_2{
  width: 450px;
  height: 180px;
 
}
.box1_2 p {
  margin-top: 15px;
  font-size: 15px;
  color: #000;
  margin-left: 20px;
}
.box1_3{
  margin-top: 20px;
  display: flex;
  margin-left: 20px;
 
}
.box1_3 input{
  width: 50px;
  border: 1px solid #000;
  height: 20px;

}
.box1_3 span{
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  font-size:20px;
  text-align: center;
}
.ben{
  width: 100px;
  height: 30px;
  font-size: 15px;
  text-align: center;
  background: red;
  margin-left: 30px;
}
.box2 {
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  color: orange;
  opacity: 0.6;
  margin-bottom: 15px;
}
.box2 p{
  
  color: #cccc;
}

.box3 ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.box3 ul li {
  width: 45%;
  height: 200px;
  margin-top: 15px;
  background: #fff;

}
.box3 li img{
    display: inline-block;
    width:100%;
    height: 120px;

}
.box3 li h4{
    font-size: 20px;
    color: #000;
}
.box3 li h5{
    font-size:15px ;
    color: #ccc;
}
.box3 li p {
    font-size: 25px;
    color: orangered;
}
</style>