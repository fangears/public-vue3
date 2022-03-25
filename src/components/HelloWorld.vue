<template>
  <div>
    <p>----------</p>
    <p>HelloWorld</p>
    <p>{{ msg }}</p>
    <p>----------</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, toRefs } from "vue";
const props = defineProps({
  msg: String,
});
const { msg } = toRefs(props);
// console.log(msg?.value);
</script>

<style scoped lang="less"></style>
