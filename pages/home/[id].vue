<template>
   <Head>
    <Title> {{ home.title }}</Title>
   </Head>
    <div class="container mx-auto pt-2">
        <div class="flex gap-2">
        <img v-for="image in home.images" :key="image" :src="image" width="200" height="15" />
                
        
        </div>
        <h1>{{ home.title }}</h1>
        <h4 class="inline-flex"> <img src="@/static/images/marker.svg" alt="" width="20" height="20" />{{ home.location.address }}
            {{ home.location.city }}
            {{ home.location.state }} 
            {{ home.location.country }}
        </h4>
        <h4>{{ home.guests }} guests 
            {{ home.bedrooms }} rooms 
            {{  home.beds}} beds, 
            {{  home.bathrooms}} baths</h4>
        <h4>{{ home.pricePerNight }} /night</h4>

        <h4 class="inline-flex">
            <img src="@/static/images/star.svg" alt="" srcset="" width="20" height="20">
            {{ home.reviewValue }} 
        </h4>
        <div class="w-[800px] h-[800px]" ref="mapContainer">

        </div>
    </div>
</template>

<script setup>
import homesData from '@/data/homes.json';
import loadScript from 'load-script';

const home = ref({})
const {id} = useRoute().params
const mapContainer = ref(null);
const scriptLoaded = ref(false); 

 
const findhome = homesData.find( home => {
    return home.objectID === id
})
home.value=findhome





onMounted(() => {
  if (!window.google) {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=Keyw&library=places';
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
  } else {
    initMap();
  }
});

function initMap() {
  const geoloc = home.value._geoloc;
  if (geoloc) {
    const { lat, lng } = geoloc;
    const mapOptions = {
      zoom: 18,
      center: new window.google.maps.LatLng(lat, lng),
      disableDefaultUI: true,
    };

    const map = new window.google.maps.Map(mapContainer.value, mapOptions);
    const marker = new window.google.maps.Marker({ position: { lat, lng }, map });
  }
}


</script>

<style lang="scss" scoped>

</style>