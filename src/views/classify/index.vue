<template>
  <div class="classify">
   <mt-header title="分类" class="headercon">
      <router-link to="/home" slot="left">
        <mt-button icon="back" class="backed"></mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      height="638px"
    >
      <template #content>
        <div v-if="activeIndex === 0">  
          <van-image
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/43c2c24fac68da8f2fa4ffd4bcd9d5e7.jpg?f=webp&w=750&h=300&bg=FFFFFF"
          />
           <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8" v-for="item in list" :key="item._id"  @click="goto(item._id)">
              <van-image
              :src="item.imageUrl" 
              />
              <p>{{item.title}}</p>
            </van-col>
       
          </van-row>
              <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8" v-for="item in list" :key="item._id"  @click="goto(item._id)">
              <van-image
              :src="item.imageUrl" 
              />
              <p>{{item.title}}</p>
            </van-col>
       
          </van-row>
              <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8" v-for="item in list" :key="item._id"  @click="goto(item._id)">
              <van-image
              :src="item.imageUrl" 
              />
              <p>{{item.title}}</p>
            </van-col>
       
          </van-row>
          <!-- <div class="enter">进入手机频道 &lt;</div> -->
        </div>
      <br>
       <div v-if="activeIndex === 1">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9da143d6e1bbce78cda92d4be76bf4e5.jpg?f=webp&w=750&h=300&bg=FFFFFF"
        />
            <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8" v-for="item in list" :key="item._id"  @click="goto(item._id)">
              <van-image
              :src="item.imageUrl" 
              />
              <p>{{item.title}}</p>
            </van-col>
       
          </van-row>
       </div>
         <div v-if="activeIndex === 2">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9da143d6e1bbce78cda92d4be76bf4e5.jpg?f=webp&w=750&h=300&bg=FFFFFF"
        />
            <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8" v-for="item in list" :key="item._id"  @click="goto(item._id)">
              <van-image
              :src="item.imageUrl" 
              />
              <p>{{item.title}}</p>
            </van-col>
       
          </van-row>
       </div>
      </template>
    </van-tree-select>

    <!-- 页脚 -->
  
  </div>
</template>

<script>


export default {
  name: "classify",
  data() {
    return {
      list:[],
      activeId: 1,
      activeIndex: 0,
      items: [
        { text: "小米手机" },
        { text: "Redmi手机" },
        { text: "黑鲨手机" },
        { text: "5G合约" },
        { text: "小米众筹" },
        { text: "电视" },
        { text: "大家电" },
        { text: "电脑办公" },
        { text: "小爱音箱" },
        { text: "路由器" },
        { text: "生活电器" },
        { text: "厨房电器" },
        { text: "智能穿戴" },
        { text: "智能家居" },
        { text: "车载出行" },
        { text: "个护健康" },
      ],
    };
  },
  computed: {},
  components: {
  
  },
  created() {
    this.getImage()
  },
  mounted() {},
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
}

}

</script>
<style  scoped>
h5 {
  text-align: center;
}
.headercon {
  height: 60px;
  background: #f2f2f2;
  color: #666;
}
.mintui {
  font-size: 25px;
  opacity: 0.5;
}
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
</style>