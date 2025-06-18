<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  classStyle: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
  },
})
const linkType = computed(() => {
  return props.link.includes('https')
})
</script>

<template>
  <a v-if="linkType" :href="link" :class="classStyle" :aria-label="altText">{{ title }}</a>
  <RouterLink v-else :to="link" :class="classStyle" :aria-label="altText">{{ title }}</RouterLink>
</template>
