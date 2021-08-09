<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view />
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue';
</script>

<style lang="less">
@baseSize: 16px;
@background: #f4f6f8;

#app {
  height: inherit;
  box-sizing: border-box;
}
body {
  position: relative;
  height: 100%;
  overflow: auto;
  margin: 0;
  padding: 0;
  font-size: @baseSize;
  font-family: '微软雅黑', tahoma, arial, sans-serif;
  color: #333;
  background: @background;
}
html {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
div,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}

small {
  font-size: 14px;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: none;
  color: #333;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

legend {
  color: #000;
}

fieldset,
img {
  border: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
  border-radius: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
