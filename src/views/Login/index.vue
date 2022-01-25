<!--  -->
<template>
  <div class="home login">
    <n-button>Login Index</n-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { NButton } from 'naive-ui';

export default defineComponent({
  components: {
    NButton
  }
})

</script>

<style lang='less' scoped>
@import '../../style/index.less';
.login {
  box-sizing: border-box;
}
</style>