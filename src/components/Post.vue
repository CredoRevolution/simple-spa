<template lang="html">
  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <p class="post__body">{{ post.body }}</p>
    <p class="post__id">{{ post.id }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line
  name: 'Post',
  props: ['id'],

  data() {
    return {
      post: null,
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then((response) => {
          this.post = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  watch: {
    $route() {
      this.getPost()
    },
  },
}
</script>
