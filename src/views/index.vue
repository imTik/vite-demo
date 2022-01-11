<!--  -->
<template>
  <div class="home">
    <div>
      <img src="../assets/logo.png" alt="" />
    </div>
    <button @click="countAdd">add count</button>
    <p>{{ count }}</p>

    <input type="text" v-model="emojiVal" />
    <button @click="checkEmoji(emojiVal)">check Emoji</button>

    <p>{{ currentTime }}</p>

    <input type="text" v-model="regVal" />
    <button @click="checkRegular">check regular</button>
  </div>
</template>

<script setup>
import { ref, isRef, toRefs, computed, reactive, readonly, watchEffect, watch, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

// api
import { test } from '../api/index';
import FastTime from '../utils/FastTime';
import { hasSpecialSymbol, isNumber, hasSpace, isEmail, isPhone, isIdCard, hasChinese, isMoney } from '../utils/Regular';

let regVal = ref('');

function checkRegular() {
  console.log('是否金额', isMoney(regVal.value));
}

let fastTime = new FastTime();
let currentTime = ref('');
currentTime.value = fastTime.getDate();

const store = useStore();
let count = computed(() => store.getters.COUNT);
let emojiVal = ref('');

function countAdd() {
  store.dispatch('countHandle');
}

function checkEmoji(val) {
  let len = val.length;
  while (len > 0) {
    let single = val.substring(len, len - 1);
    let codeat = escape(single);
    console.log(single, codeat);
    const emojiKeys = ['%uD83C', '%uD83D', '%uD83E'];
    if (emojiKeys.includes(codeat)) {
      console.log('不能输入emoji表情');
      return;
    }
    len--;
  }

  console.log('字符串检测通过');
}

onMounted(async () => {
  let testResult = await test();
  console.log('接口返回', testResult);
});

const Event = function () {
  this.list = {};
};

Event.prototype.add = function (area, client) {
  if (!this.list[area]) this.list[area] = [];
  this.list[area].push(client);
};

Event.prototype.remove = function (area, client) {
  if (!this.list[area]) return;
  if (this.list[area].length === 0) return;
  const _index = this.list[area].findIndex((item) => item === client);
  this.list[area].splice(_index, 1);
};

Event.prototype.triggle = function (area, price) {
  if (!this.list[area]) return;
  this.list[area].forEach((client) => {
    client.listen(area, price);
  });
};

const Client = function (name) {
  this.name = name;
};
Client.prototype.listen = function (area, price) {
  console.log(`${this.name}收到${area}平方的房源报价${price}元`);
};

let clientA = new Client('英姐');
let clientB = new Client('小逢');
let clientC = new Client('小肥');

let event = new Event();
event.add('80', clientA);
event.add('80', clientB);
event.add('80', clientC);
event.add('100', clientB);
event.add('120', clientA);

event.remove('80', clientB);

event.triggle('80', 2000);
event.triggle('100', 3000);
event.triggle('120', 4000);

const once = function (fn) {
  let done = false;
  return function () {
    if (done) {
      console.log('无法重复执行该方法');
      return;
    }
    done = true;
    fn.apply(this, arguments);
  };
};

const sayHi = function (name) {
  console.log('Hi ' + name);
};

const onceHi = once(sayHi);
// onceHi('Tik');
// onceHi('Tik');

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n + factorial(n - 1);
}
function memo(fn) {
  let cache = {};
  return function (arg) {
    if (cache[arg]) return cache[arg];
    cache[arg] = fn(arg);
    console.log('缓存结果', cache);

    return cache[arg];
  };
}
// console.time();
// let fastFact = memo(factorial);
// let fastFactCount = fastFact(10010);
// console.log(fastFactCount);
// console.timeEnd();

// setTimeout(() => {
//   console.time();
//   console.log(fastFactCount);
//   console.timeEnd();
// }, 5000);

function add() {
  let args = [].slice.call(arguments);
  console.log('首次获取参数', args);

  let _add = function () {
    let _args = [].slice.call(arguments);
    args.push(..._args);
    console.log('收集参数', _args);

    return _add;
  };

  _add.toString = function () {
    return args.reduce((x, y) => x + y);
  };

  return _add;
}

let a = add(1, 2)(3, 4)(5, 10);
console.log(a.toString());
console.log(a + 1);
</script>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
