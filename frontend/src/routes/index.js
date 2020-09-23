import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Sobre from '../components/sobre'

Vue.use(VueRouter)
const routes = [
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/sobre',
        name:'sobre',
        meta:{auth:true},
        component:Sobre
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to,from,next) => {
    const loggedIn = localStorage.getItem('user')

    if(to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/login')
        return
    }
    next()
})

export default router