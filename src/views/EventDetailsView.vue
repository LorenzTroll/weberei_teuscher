<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

const props = defineProps({
  id: {
    required: true,
  }
})
const fabric = ref(null)

onMounted(() => {
  EventService.getFabric(props.id)
  .then((response) => {
    fabric.value = response.data
  })
  .catch ((error) => {
    console.log(error)
  })
})
</script>

<template>
    <div v-if="fabric">
        <h1>{{ fabric.title }}</h1>
        <p>{{ fabric.client }} on {{ fabric.year }} @ {{ fabric.type }}</p>
        <p>{{ fabric.description }}</p>
    </div>
</template>