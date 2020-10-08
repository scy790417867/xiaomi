<!--  -->
<template>
<div id="shopping">
 <Header2></Header2> 

    <!-- 头部 -->
  
    <!-- 购物车 -->
    <div id="prolist">
      <div class="box1" v-for="item in shop" :key="item._id">
       <div class="box1_1">
         <img :src="item.imageUrl" alt="">
       </div> 
       <div class="box1_2">
      <p>{{item.title}}</p>
      <p>售价：{{item.price}}元</p>

      <div class="box1_3">
        <span>+</span>
        <input type="text" name="" id="" value="1">
        <span>-</span>
        <input type="button" value="删除" class="ben" @click="delshop(item._id)">
      </div>
       </div>

      </div>
      <div class="box2">
        <h5>// 猜你喜欢 //</h5>
        <p>——实施推荐你的心心念念——</p>
      </div>
      <div class="box3">
        <ul>
     
           <li v-for="item in list" :key="item._id" @click="goto(item._id)">
           <img :src="item.imageUrl">
           <h4>{{item.title}}</h4>
           <h5>{{item.desc}}</h5>
           <p>{{item.price}}</p>
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
    return {
      shop:[],
      list:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
  getImage(){
   this.$http.get('/phones').then(res=>{
      // console.log(res.list)
      this.list = res.list
     })
    },
      goto(id){
      this.$router.push({
        path:'/xiangqing/'+id
      })
    },
  getData(){
  this.$http.get('/shops').then(res=>{
    this.shop = res.list
  })
  },
  delshop(id){
  this.$http.delete('/delshop/'+id).then(res=>{
    console.log(res)
      this.getData()
  })
  }
  },
  created() {
    this.getImage()
    this.getData()
  },
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
  height: 100px;
  background: #ffff;  
  display: flex;

}
.box1_1{ 
   width: 150px;
   height: 80px;
  
}
.box1_1 img{
  width: 50px;
  height: 80px;

   margin-left: 50px;
   margin-top: 10px;
 
  
}
.box1_2{
  width: 450px;
  height: 80px;
 
}
.box1_2 p {
 
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
  text-align: center;
  font-size: 15px;

}
.box1_3 span{
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  font-size:20px;
  text-align: center;
  line-height: 1;
}
.ben{
  width: 100px;
  height: 30px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  background: red;
  margin-left: 30px;
  line-height: 1;
  border: none;
  font-weight: 400;
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
  margin-bottom: 70px;
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