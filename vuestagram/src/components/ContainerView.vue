<template>
  <div>
    <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i"></Post>
  </div>
</template>

<script>
import Post from "./PostView.vue";
export default {
  components: {
    Post,
  },
  props: {
    게시물: Array,
  },
};
</script>

<style></style>
