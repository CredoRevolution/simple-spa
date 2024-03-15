import Vue from 'vue'
import Router from 'vue-router'
import Post from '../components/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
      props: true,
    },
  ],
})
