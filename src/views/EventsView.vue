<script setup lang="ts">
import events from '../assets/dates.json'
import { formateDate } from '@/utils/dateFormat'
import { motion } from 'motion-v'
import { useCartStorage } from '@/stores/cart'
const cartStore = useCartStorage()
const cartItems = cartStore.cart
console.log('sum:', cartItems)
const addNewItem = (name: string, price: number) => {
  cartStore.addCartItem(name, price)
}
// const cartSum = cartStore.map(price).reduce(sum)
</script>

<!-- <h1>{{cartSum}}</h1> -->
<template>
  <ol>
    <li v-for="cartItem in cartItems" :key="cartItem.name" class="text-2xl font-bold">
      {{ cartItem.name }} - {{ cartItem.price }}
    </li>
  </ol>
  <!-- {{ cartItems.map(price).reduce((prev, next) => prev + next) }} -->
  <ul class="border-b border-green relative">
    <motion.li
      v-for="event in events"
      :key="event.id"
      :initial="{ opacity: 0, scale: 0, x: -100 }"
      :whileInView="{ opacity: 1, scale: 1, x: 0 }"
      class="border-t border-black p-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
    >
      <div
        class="flex flex-col items-center justify-center lg:justify-start text-center lg:text-left relative z-2 gap-2"
      >
        <div
          class="text-lg my-0 font-black py-0 parsed-mb-0 uppercase tracking-widest text-green mx-auto w-full"
        >
          <span>{{ formateDate(event.datetime) }}</span>
        </div>

        <div class="text-4xl lg:text-6xl font-bold my-0 py-0 mx-auto w-full uppercase text-black">
          {{ event.venue.location }}
        </div>

        <div class="body-parsed-text text-lg my-0 parsed-mb-0 opacity-80 mx-auto w-full text-black">
          {{ event.venue.name }}
        </div>
      </div>
      <button
        @click="addNewItem(event.venue.name, 299)"
        class="border border-red hover:border-blue"
      >
        Add To Cart
      </button>
    </motion.li>
  </ul>
</template>
