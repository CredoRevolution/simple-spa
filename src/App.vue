<!-- eslint-disable -->
<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'post', params: { id: post.id } }"
        >
          {{ post.id }} . {{ post.title }}
        </router-link>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      posts: [],
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios
        .get(this.endpoint)
        .then((response) => {
          this.posts = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style>
aside {
  width: 30%;
  float: left;
}
</style>
