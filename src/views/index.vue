<!--  -->
<template>
  <div class="home">
    <img src="../assets/logo.png" alt="" />
    <p>index page</p>
    <button @click="countAdd">add count</button>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
import {
  ref,
  isRef,
  toRefs,
  computed,
  reactive,
  readonly,
  watchEffect,
  watch,
  onMounted,
  onUnmounted,
} from 'vue';
import { useStore } from 'vuex';

// api
import { test } from '../api/index';

const store = useStore();
let count = computed(() => store.getters.COUNT);

function countAdd() {
  store.dispatch('countHandle');
}

onMounted(async () => {
  let testResult = await test();
  console.log('接口返回', testResult);
});
</script>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
