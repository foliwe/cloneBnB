<template>
    <div class="container mx-auto">
        <h1 class="py-4">Index Page</h1>
        <div class="flex gap-2">
            <div class="" v-for="home in homes" :key="home.objectID">
                 <NuxtLink :to="`/home/${home.objectID}`"><HomeCard :home="home" /></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import homesData from '@/data/homes.json';

const homes = ref(homesData.slice(0, 3));

useHead({
    title: 'Home',
  meta: [
    { name: 'description',
     content: 'CloneBnB.',
     hid: 'description ' 
    }
  ]
})

</script>

<style lang="scss" scoped>

</style>