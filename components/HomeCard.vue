<template>
    <div class="">
        <img :src="home.images[0]" alt="" srcset="" style="width: 300px;" class="pb-5">
        <h4>{{ home.title }}</h4>
        <h4>{{ home.location.address }} {{ home.location.city }}  {{ home.location.state }}</h4>
        <h4>{{ home.guests }} guests</h4>
        <h4>{{ home.pricePerNight }} /night</h4>
    </div>
</template>

<script setup>
const props = defineProps({
  home: {
    type: Object,
    required: true,
  },
})


</script>

<style scoped>

</style>