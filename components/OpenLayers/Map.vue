<template>
  <div class="full-width-map">
    <ol-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="height:100vh; width: 100%;">
      <ol-view
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection" />
      <!-- Tile Layer with OpenStreetMap -->
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      <!-- Vector Layer for custom data -->
      <ol-vector-layer>
        <ol-source-vector :features="customFeatures" />
      </ol-vector-layer>
    </ol-map>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { fromLonLat } from 'ol/proj'

const center = ref([101.9758, 4.2105]) // Center coordinates for Malaysia
const projection = ref('EPSG:4326')
const zoom = ref(6) // Adjust zoom level as needed
const rotation = ref(0)

// Custom GeoJSON data (Replace with your actual GeoJSON data)
const customData = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [101.9758, 4.2105] // Example point within Malaysia
      },
      'properties': {
        'name': 'Custom Point'
      }
    },
    // Add more features as needed
  ]
}

// Convert GeoJSON data to OpenLayers Features
const customFeatures = customData.features.map(feature => {
  const geometry = new Point(fromLonLat(feature.geometry.coordinates))
  const props = feature.properties
  return new Feature({ geometry, ...props })
})
</script>

<style scoped>
@import 'vue3-openlayers/dist/vue3-openlayers.css';

.full-height-map {
  height: 100%;
}
.full-height-map ol-map {
  height: 100%;
}
</style>
