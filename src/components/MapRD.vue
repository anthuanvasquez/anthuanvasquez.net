<template>
  <div ref="mapContainer" class="h-[500px] w-full" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import mapboxgl from 'mapbox-gl';
const config = useRuntimeConfig();

const mapContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!mapContainer.value) return;

  mapboxgl.accessToken = config.public.mapboxToken;

  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-70.692, 19.442],
    zoom: 6,
    maxBounds: [
      [-118, -56],
      [-34, 33],
    ],
  });

  map.scrollZoom.disable();
  map.boxZoom.disable();
  map.doubleClickZoom.disable();
  map.touchZoomRotate.disable();

  new mapboxgl.Marker({ color: '#27bcfd' })
    .setLngLat([-70.692, 19.442])
    .addTo(map);
});
</script>
