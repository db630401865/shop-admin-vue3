<template>
  <h1>登陆</h1>
</template>

<script lang="ts" setup>
import { onMounted } from '@vue/runtime-core'
import { getLoginInfo } from '@/api/common'

onMounted(()=>{
    getLoginInfo().then(data => { // 这里的 data 就有类型了
      console.log(data)
    })
})

</script> 