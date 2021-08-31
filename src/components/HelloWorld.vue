<template>
  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>
</template>


<script lang="ts">
  interface User{
    name: string,
    age: number
  }
  import { defineComponent, PropType, ref } from 'vue'

  const Component = defineComponent({
    name:'HelloWorld',
    props: {
      msg: {
        type: String,
        required:true
      },
      obj: {
        type: Object as PropType<User>
      }
    },
    setup(props) {
      // props.msg
      const year = ref(2020)
    }
  })
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
