<!--  -->
<template>
  <div id="tuijian">
    <!-- 轮播 -->
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
    <!-- 四个小模版 -->
    <div class="box">
      <ul>
        <li >
          <i class="iconfont icon-wode"></i>
          <p>米粉卡</p>
        </li>
        <li >
          <i class="iconfont icon-wode"></i>
          <p>以旧换新</p>
        </li>
        <li >
          <i class="iconfont icon-wode"></i>
          <p>新品发布</p>
        </li>
        <li >
          <i class="iconfont icon-wode"></i>
          <p>物流查询</p>
        </li>
      </ul>
    </div>
    <!-- 图片 -->
    <div class="box1">
      <div class="box-left">
        <img
          src="http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png"
          alt=""
          class="fl href"
        />
      </div>
      <div class="box-right">
        <div class="im1">
          <img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&amp;w=358&amp;h=252"
            alt=""
            class="fr href"
            style="margin-bottom: 0.05rem"
          />
        </div>
        <div class="im2">
          <img
            src="http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png"
            alt=""
            class="fr href"
          />
        </div>
      </div>
    </div>
    <!-- 图片 -->
    <div>
    <img
      class="img1"
      alt=""
      data-src="http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png"
      src="http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png"
      lazy="loaded"
    />
    <img
      class="img1"
      data-src="http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg"
      src="http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg"
      lazy="loaded"
    />
    </div>
    <!-- 标题 -->
    <div class="hh">
      <h3>明星单品</h3>
    </div>
    <!-- 商品列表 -->
    <div class="prolist">
      <ul>
        <li>
          <img src="" alt="">
        </li>
        <!-- <li></li>
        <li></li>
        <li></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      image:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    getImage(){
    
    axios.get('/phone').then(res=>{
     console.log(res)
      })
    }
  },
  created() {
    this.getImage()
  },
  mounted() {},
};
</script>
<style  scoped>
#tuijian {
  overflow-y: auto; 
  margin-top: 100px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.box {
  width: 100%;
  height: 50px;
  background: white;

  margin-top: 15px;
}
.box ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
.box ul li {
  flex: 1;
  height: 40px;
  list-style: none;
}
.box ul li.active {
  color: #f03d37;
}
.box ul i {
  display: inline-block;
  font-size: 25px;
  margin-bottom: 7px;
}
.box ul p {
  font-size: 15px;
  line-height: 18px;
  color: #c9c9c9;
}
.box1 {
  display: flex;
  margin-top: 12px;
}
.img1 {
  margin-top: 5px;
}
.hh {
  width: 750px;
  height: 50px;
  font-size: 30px;
  color: #000;
  font-family: 700;
  padding-left: 20px;
  line-height: 50px;
  opacity: 0.5;
  padding: 10px;
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