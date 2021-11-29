import Home from './components/Home/Homemain/Home.vue';
import {createRouter,createWebHistory} from 'vue-router'
//npm install vue-router@next --save
const routes=[
    {
        name:"Home",
        component:Home,
        path:"/"
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router