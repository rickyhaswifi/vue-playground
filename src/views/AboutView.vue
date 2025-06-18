<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { useCounterStore } from '@/stores/counter'
const obj = useStorage('store', { count: 0 })
console.log(obj)
const store = useCounterStore()
function addCount() {
  obj.value.count++
}
function minusCount() {
  obj.value.count--
}
function addScore() {
  store.score++
}
function minusScore() {
  store.score--
}
</script>

<template>
  <div class="about flex flex-col gap-4 items-center justify-center h-full">
    <h1>This is an about page</h1>
    <h2>Count {{ obj.count }}</h2>
    <h2>Score {{ store.score }}</h2>
    <div class="flex flex-row gap-2">
      <button @click="addCount" class="border rounded border-amber-600 p-2">Add Count</button>
      <button @click="minusCount" class="border rounded border-amber-600 p-2">Minus Count</button>
    </div>
    <div class="flex flex-row gap-2">
      <button @click="addScore" class="border rounded border-blue-600 p-2">Add Score</button>
      <button @click="minusScore" class="border rounded border-blue-600 p-2">Minus Score</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
