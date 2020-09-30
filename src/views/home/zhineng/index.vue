<!--  -->
<template>
<div class='zhineng'>
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
    </van-swipe>
 <div class="hh">
     <h3>热销爆款</h3>
 </div>
 <div class="prolist">
     <ul>
         <li></li>
          <li></li>
           <li></li>
            <li></li>
     </ul>
 </div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

}
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
}
</script>
<style  scoped>
.my-swipe{
    margin-top: 100px;
}
.hh{
    width: 100%;
    height: 50px;
    margin:  15px 0 15px 0;
}
.hh h3{
    font-size: 35px;
    line-height: 50px;
    margin-left: 10px;
    color: #000;
    font-family: 600;
    opacity: .3;
}
.prolist ul {
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.prolist ul li {
  width: 45%;
  height: 300px;
  background: greenyellow;
  margin-top: 10px;
}
.prolist ul li img {
  width: 100%;
  height: 100%;
}
</style>