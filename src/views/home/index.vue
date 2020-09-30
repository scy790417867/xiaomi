<!--  -->
<template>
  <div class="home">
    <Header1></Header1>
<router-view></router-view>
    <Footer></Footer>
  
  </div>
</template>

<script>
import Header1 from'../../components/Header1'
import Footer from'../../components/Footer'
export default {
  components: {
    Header1,
    Footer
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},

  created() {},
  mounted() {},
};
</script>
<style  scoped>

</style>