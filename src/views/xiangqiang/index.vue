<!--  -->
<template>
<div id='detil'>
<div class="imgs">
    <Header3></Header3>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
        <img src="http://qiniu.verydog.cn//show.liluo.cc/01.png" alt="img0" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://qiniu.verydog.cn//show.liluo.cc/02.jpg" alt="img1" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://qiniu.verydog.cn//show.liluo.cc/03.jpg" alt="img2" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://qiniu.verydog.cn//show.liluo.cc/04.jpg" alt="img3" />
      </van-swipe-item>
  </van-swipe>
  
</div>
<div class="desc">
  <img :src="imageUrl" alt="">
<p class="title">{{title}}</p>
<p class="more">{{desc}}</p>
<p class="pric">{{price}}</p>
</div>
<!-- <div class="miaoshu">
 <img src="http://qiniu.verydog.cn//show.liluo.cc/01.png" alt="img0" />
 <img src="http://qiniu.verydog.cn//show.liluo.cc/01.png" alt="img0" />
</div> -->
 <div class="boot">
   <div class='left'>
  <span class="iconfont icon-wode"></span>
   <p>首页</p>
   </div>
   <div class='center'>
    <span class="iconfont icon-wode"></span>
   <p>购物车</p>
   </div>
   <div class='right'><span @click="goto" >去付款</span></div>
   </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header3 from '../../components/Header3'
import { getToken } from '../../utils/auth'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header3
},
data() {
//这里存放数据
return {
      imageUrl: "" , //手机图片
        title: "",   //手机名
        desc:"",  //描述
        price:"",  //手机价格
   }

  },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
goback(){
    this.$router.go(-1)
},
getData(id){
   this.$http.get('/phone/'+id).then(res => {
        this.imageUrl=res.data.imageUrl;
       this.title = res.data.title;
       this.desc = res.data.desc;
        this.price = res.data.price;
      // console.log(res.data)
      })
},
goto(){
  if(getToken()){
   this.$http.post('/shop',{
      imageUrl:this.imageUrl,  //图片
         title:this.title,   //手机名
         desc:this.desc,     ///手机描述
         price:this.price, // 手机价格
    }).then(res=>{
         if (res.code === 20000) {
            this.$router.push({
              path: "/shopping"
            });
          }
          // console.log(res)
    })
  }else{
    this.$router.push({
      path:'/mine'
    })
      
  }
  
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 this.id = this.$route.params.id
//  console.log(this.$route.params.id)
 this.getData(this.id)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped >
#detil .imgs{
    position:relative;
}
#detil .imgs .icon-zuojiantou{
    display:inline-block;
    width:25px;
    height:25px;
    border-radius: 50%;
    background:#000000;
    opacity: 0.2;
    color:whitesmoke;
    font-size:25px;
    position: absolute;
    top:10px;
    left:10px;
    z-index: 2;
}
#detil .imgs img{
    width:100%
}
#detil .desc .title{
text-indent:20px;
font-size:22px;
}
#detil .desc .more{
    padding-left:20px;
color:orangered;
font-size:16px;
}
#detil .desc .infpr{
padding-left:20px;
color:#cecece;
font-size:14px;
}
#detil .desc .pric{
padding-left:20px;
color:orangered;
font-size:18px;
}
#detil .miaoshu img{
width:100%
}
#detil .boot{
   width:100%;
   height:60px;
    
    position: fixed;
    bottom:0;
    background:white;
    align-items: center;
}
#detil .boot div{
    text-align: center;;
    height:60px;
    float:left
}
#detil .boot .left{
    width:20%;
    line-height: 30px;
 
    
}

#detil .boot .left span{
    font-size: 30px;
  

  
}
  #detil .boot .center{
      width:20%;
    line-height: 30px;
}

#detil .boot .center span{
    font-size: 30px;
}
#detil .boot .right{
 width:60%;
background:orangered;
line-height: 60px;
color:white;

}
.my-swipe{
  margin-top: 50px;
}
.desc img{
  width: 200px;
  height: 250px;
  margin-left: 90px;
}
.desc .title{
  margin-left: 80px;
}
.desc .more{
  margin-left: 80px;
}
.desc .pric{
  margin-left: 80px;
}
</style>