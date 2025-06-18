<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref, computed } from 'vue'
const name = ref('repo')
const greeting = computed(() => {
  return 'Hello ' + name.value + '!'
})
</script>

<template>
  <main>
    <input type="text" v-model="name" aria-label="name-input" class="border-red border" />
    <h1>{{ greeting }}</h1>
    <TheWelcome />
  </main>
</template>
