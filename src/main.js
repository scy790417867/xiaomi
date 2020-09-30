import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import { Image as VanImage } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';


  
Vue.use(Vant);

// import { TreeSelect } from 'vant';
// import { Col, Row } from 'vant';
// Vue.use(Col);
// Vue.use(Row);
// Vue.use(VanImage);
// Vue.use(TreeSelect);
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
