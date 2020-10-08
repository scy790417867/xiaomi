<!--  -->
<template>
<div id="header1">
      <div id="box1">
        <span class="iconfont icon-wode"></span>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <span class="iconfont icon-wode"></span>
      </div>
      <div id="content">
        <div class="movie_menu">
          <div class="hot_swtich">
            <router-link tag="div" to="/home/tuijian" class="hot_item"
              >推荐</router-link
            >
            <router-link tag="div" to="/home/shouji" class="hot_item"
              >手机</router-link
            >
            <router-link tag="div" to="/home/zhineng" class="hot_item"
              >智能</router-link
            >
            <router-link tag="div" to="/home/diannao" class="hot_item"
              >电脑</router-link
            >
            <router-link tag="div" to="/home/dianshi" class="hot_item"
              >电视</router-link
            >
            <router-link tag="div" to="/home/quanmianp" class="hot_item"
              >全面屏</router-link
            >
            <router-link tag="div" to="/home/shenghuozhoubian" class="hot_item"
              >生活周边</router-link
            >
            <router-link tag="div" to="/home/hezi" class="hot_item"
              >盒子</router-link
            >
      
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
components: {},
data() {
return {
  value:"",
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
#header1{
  width: 100%;
  background: #fff;
  min-height: 50px;
  position: fixed;
  z-index: 1;

}
#box1 {
  display: flex;
  align-items: center;
}
#box1 span {
  font-size: 30px;
  float: left;
  margin-left: 30px;
}

#content .movie_menu {
  width: 750px;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  overflow-x: auto;
}
.movie_menu .city_name {
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  width: 750px;
  display: flex;
  height: 100%;
  line-height: 45px;
  flex: 1;
  overflow-x: auto;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 40px;
  text-align: center;
  font-weight: 700;
  
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
#content {
  margin-bottom: 0;
}
</style>