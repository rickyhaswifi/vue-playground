<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
import { motion } from 'motion-v'
</script>
<template>
  <div class="relative">
    <button @click="toggle" class="border border-amber-200 rounded">Open</button>
    <motion.section
      v-show="isOpen"
      :initial="{ opacity: 0, scale: 0, x: -100 }"
      :animate="{ opacity: 1, scale: 1, x: 0 }"
      class="shadow bg-amber-200 rounded p-4 absolute z-50 inset-0 h-72 w-72"
    >
      <div class="flex flex-col">
        <h1>The Roman Empire</h1>
        <p>lorem</p>
        <button
          @click="toggle"
          class="border border-black rounded-full absolute top-1 right-1 aspect-1 p-2 hover:rotate-90 rotate-0 h-12 w-12 transition-all"
        >
          X
        </button>
      </div>
    </motion.section>
  </div>
</template>
