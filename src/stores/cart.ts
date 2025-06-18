import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

interface cartItems {
  name: string
  price: number
}

export const useCartStorage = defineStore('cart', () => {
  const cart = useStorage<cartItems[]>('items', [
    { name: 'Event Ticket', price: 299 },
    { name: 'Event Ticket2', price: 399.99 },
  ])
  const addCartItem = (name: string, price: number) => {
    cart.value.push({ name, price })
  }
  return { cart, addCartItem }
})
