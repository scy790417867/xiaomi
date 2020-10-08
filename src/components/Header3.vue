<!--  -->
<template>
<div id="header2">
 <van-nav-bar title="商品详情"  left-arrow @click-left="goback"  fixed >
  <template #right >
    <van-icon  name="search" size="18"  />
  </template>
</van-nav-bar>
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
goback(){
    this.$router.go(-1)
}
},
created() {

},
mounted() {

},
}
</script>
<style  scoped>
#Header2{
  position: relative;
  top: 0;
  width: 100%;
  min-height: 50px;
}
.mint-header {
  font-size: 20px;
}
.headercon {
  height: 50px;
  background: #f2f2f2;
  color: #666;
}
.mintui {
  font-size: 22px;
}
</style>