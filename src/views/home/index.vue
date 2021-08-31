<template>
  <h1>首页</h1>
  <!-- <h1>{{ $store }}</h1> -->
  {{$store.state.count}}
</template>

<script lang="ts" setup>
import { useStore } from '../../store'

const store = useStore()
console.log(store.state.count);

console.log(store.state.count);

</script> 