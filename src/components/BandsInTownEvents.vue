<script lang="ts">
// import { ref } from 'vue'
// const name = ref('unmounted')
// export default {
//   mounted() {
//     console.log('component mounted')

//     const name = ref('mounted')
//   },
// }
</script>

<template>
  <h1 ref="name">{{ name.value }}</h1>
</template>
