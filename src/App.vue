<!-- eslint-disable -->
<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main class="container-flex">
      <aside class="sidebar">
        <h2>Posts</h2>
        <router-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'post', params: { id: post.id } }"
        >
          {{ post.id }} . {{ post.title }}
        </router-link>
      </aside>
      <div class="content">
        <router-view>
          <!-- if is home route -->
          <p v-if="$route.name === 'home'">This is Home</p>
          <!-- if loading -->
          <p v-else>Loading...</p>
        </router-view>
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
  watch: {
    // if is not home route
    $route(to) {
      if (to.name !== 'home') {
        this.getPosts()
      }
    },
  },
}
</script>

<style>
aside {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.container-flex {
  display: flex;
  flex-direction: row;
}
.content .post {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
}
</style>
