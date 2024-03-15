import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Post from '../components/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: Post,
      props: true,
    },
  ],
})
