<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { EventAPIResponse, Event } from '@/types/ticket4'
import { formateDay, formateMonth, formateYear } from '@/utils/dateFormat'
const dataResponse = ref<EventAPIResponse | null>(null)
const events = ref<Event[] | null>(null)
const baseUrl = 'https://api.sandbox.ticketsfour.com/api/events/organizations/BESTEVENTSB6'
const fetchData = async () => {
  try {
    const response = await fetch(baseUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`)
    }
    dataResponse.value = await response.json()
    events.value = dataResponse?.value?.data.events as Event[]
  } catch (error) {
    console.log('error fetching data:', error)
  }
}
onMounted(() => {
  fetchData()
})
console.log(events)
// formateDate(events)
</script>

<template>
  <h1></h1>
  <div
    v-for="event in events"
    :key="event.id"
    class="flex flex-row max-w-lg mx-auto w-full items-center justify-start border border-black rounded-lg gap-x-4 mb-4 relative overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 bg-[#333] border-r border-b border-[white] rounded-br-lg px-2 py-2 aspect-1 h-12 w-12"
    >
      <div class="flex flex-col">
        <span
          class="text-white date-format-month text-center uppercase my-0 py-0 font-semibold opacity-90 text-[6px]"
        >
          <span>{{ formateYear(event.start) }}</span>
        </span>
        <span
          class="text-white date-format-month text-center uppercase my-0 py-0 font-semibold opacity-90 text-[6px]"
        >
          <span>{{ formateMonth(event.start) }}</span>
        </span>
        <span class="text-white date-format-date text-center text-xs my-0 py-0 font-bold">
          <span>{{ formateDay(event.start) }}</span>
        </span>
      </div>
    </div>
    <img
      :src="event.cover_uri"
      :alt="event.name"
      class="h-48 w-48 object-cover aspect-1 rounded-lg overflow-hidden"
    />
    <div class="flex flex-col text-left items-start justify-center">
      <h2 class="font-bold uppercase">{{ event.name }}</h2>
      <a :href="event.shortLink" target="_blank" class="text-[blue]"> TICKETS </a>
      <p class="opacity-80 text-sm">{{ event.venue.name }}</p>
      <p class="opacity-80 text-sm">{{ event.venue.city }}</p>
      <p class="opacity-80 text-sm flex flex-row gap-2" v-if="event.lineup">
        <span
          v-for="lineupPreformer in event.lineup"
          :key="lineupPreformer"
          class="rounded-full lowercase text-white bg-[#333] py-1 px-2"
        >
          {{ lineupPreformer }}
        </span>
      </p>
    </div>
  </div>
</template>
