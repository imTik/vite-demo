<!--  -->
<template>
  <div class="home">
    <img src="../assets/logo.png" alt="" />
    <p>index page</p>
    <button @click="countAdd">add count</button>
    <p>{{count}}</p>
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
} from 'vue';
import { useStore, mapGetters, mapState, mapMutations, mapActions } from 'vuex';

const store = useStore();
let count = computed(() => store.getters.COUNT);

function countAdd() {
  store.dispatch('countHandle');
};
</script>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
