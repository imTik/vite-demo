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
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
import { useStore } from 'vuex';
import { test } from '../api/index';

// console.log(import.meta.env) // 环境变量

const store = useStore();
let count = computed(() => store.getters.COUNT);

function countAdd() {
  store.dispatch('countHandle');
}

let testResult = await test();
console.log('接口返回', testResult);
</script>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
