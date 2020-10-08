<!--  -->
<template>

<div class='mine'>
 <div class="header">
    <div class="bod">
      <span class="iconfont icon-wode"></span>
    </div>
    <button v-if="showList" @click="gologin">未登录</button>
    <button v-else @click="gologin">已登录</button>
     <span>/</span>
    <button>注册</button>
 </div>
 <van-cell is-link title="我的订单"  />
<van-action-sheet  :actions="actions"  />
<van-grid column-num="3">
  <van-grid-item icon="photo-o" text="待付款" />
  <van-grid-item icon="photo-o" text="待收货" />
  <van-grid-item icon="photo-o" text="退还修" />
</van-grid>
<div class="box">
 <div class="box1">
     <span class="iconfont icon-wode"></span>
     <div class="box1-1">
         <p>会员福利</p>
        <van-icon name="arrow" />
     </div>
 </div>
 <div class="box1">
     <span class="iconfont icon-wode"></span>
     <div class="box1-1">
         <p>我的优惠</p>
        <van-icon name="arrow" />
     </div>
 </div>
 </div>
  <div class="box1">
     <span class="iconfont icon-wode"></span>
     <div class="box1-1">
         <p>服务评价</p>
        <van-icon name="arrow" />
     </div>
 </div>


 <Footer></Footer>
</div>


</template>

<script>
import Footer from '../../components/Footer'
import { getToken } from '../../utils/auth'

export default {
components: {
    Footer
},
data() {
return {
 showList:true,
}
},
computed: {},
watch: {},  
methods: {
gologin(){
    this.$router.push({
        path:'/login'
    })
}
},

created() {
   if(getToken()){
       this.showList = false
   }
},
mounted() {

},
}
</script>
<style  scoped>

.header{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background: coral;
}
.bod{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    margin-left: 20px;
    margin-right: 15px;
    text-align: center;
    line-height: 1;
    font-size: 50px;
}
.header button{
    font-size: 18px;
      color: #000;
      font-weight: 600;
     

}
.header span{
     font-size: 20px;
     color: #000;
     font-weight: 700;
     margin-left: 5px;
     margin-right: 5px;
     margin-top: 5px;
}
.van-cell--clickable:active{
    border-bottom: 1px solid #ccc;
}
.van-cell{
    font-size: 20px;
}
.van-icon{
    font-size: 20px;
}
.box{
    margin-top: 10px;
    margin-bottom: 15px;
}
.box1{
    display: flex;
 
  
    height: 50px;
    font-size: 20px;
    align-items: center;
   
}
.box1 span{
    font-size: 20px;
}

.box1-1{
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 10px;
      border-bottom: 1px solid #ccc;
  
  

}
.van-icon{
    margin-left: 220px;
}



</style>