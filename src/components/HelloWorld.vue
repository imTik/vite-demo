<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation1111
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue';
console.log('环境变量: ', import.meta.env);
defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped lang="less">
@blue: #047adc;
a {
  color: @blue;
}
</style>
