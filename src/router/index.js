import Vue from 'vue'

import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home"
        },
        { //首页模块
         path:'/home',
         component:() => import('../views/home/index.vue'),
         redirect:'/home/tuijian',
         children:[
             {
                 path:'tuijian',
                 component:() => import('../views/home/tuijian/index.vue'),
             },
             {
                path:'shouji',
                component:() => import('../views/home/shouji/index.vue'),
            },
            {
                path:'zhineng',
                component:() => import('../views/home/zhineng/index.vue'),
            },
            {
                path:'diannao',
                component:() => import('../views/home/diannao/index.vue'),
            },
            {
                path:'dianshi',
                component:() => import('../views/home/dianshi/index.vue'),
            },
            {
                path:'quanmianp',
                component:() => import('../views/home/quanmianp/index.vue'),
            },
            {
                path:'shenghuozhoubian',
                component:() => import('../views/home/shenghuozhoubian/index.vue'),
            },
            {
                path:'hezi',
                component:() => import('../views/home/hezi/index.vue'),
            },

         ]

        },
        { //分类
            path:'/classify',   
            component:() => import('../views/classify/index.vue')
           },
           { //购物车
            path:'/shopping',
            component:() => import('../views/shopping/index.vue')
           },
           { //我的
            path:'/mine',
            component:() => import('../views/mine/index.vue')
           },
           {//详情
            path:'/xiangqing/:id',
            component:()=>import('../views/xiangqiang/index.vue')
           },
           {//登录
           path:'/login',
           component:()=>import('../views/login/index.vue')
           },
           { //搜索
           path:'/search',
           component:()=>import('../views/search/index.vue')
           }

    ],
    linkActiveClass:'active'
    
})

export default router