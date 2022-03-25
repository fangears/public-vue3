<template>
  <div class="home">
    <p>{{ homeMsg }}</p>
    <p>传递的参数是:{{ testData }}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getTest } from "@/api";

let homeMsg = ref("我是HomeView");
let testData = ref();
let data = {
  name: "zhangyf",
};
getTest(data)
  .then((res) => {
    console.log(res);
    if (res.code === 200) {
      homeMsg.value = res.msg;
      testData.value = res.data;
    } else {
      console.log("getTest", res.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
</script>
