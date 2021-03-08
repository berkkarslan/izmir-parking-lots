<script>
import mapStyle from '@/data/mapStyle.json';
import GmapCustomMarker from 'vue2-gmap-custom-marker';
import Details from '@/components/Details';
export default {
  components: {
    'gmap-custom-marker': GmapCustomMarker,
    Details
  },
  data() {
    return {
      location: { lat: 38.4237, lng: 27.1428 }, // İzmir lat lng
      zoom: 12,
      styledMap: mapStyle,
      item: null,
      myOptions: {
        disableDefaultUI: true,
        styles: mapStyle.style
      }
    };
  },
  methods: {
    onClick(location, m) {
      this.location = location;
      this.zoom = 14;
      this.item = m;
      this.$store.commit('showDetails');
    },
    getLotColor(freeLots) {
      return freeLots === 0 ? 'map-marker gray' : 'map-marker green';
    }
  }
};
</script>

<template>
  <div>
    <GmapMap
      :center="location"
      map-type-id="roadmap"
      :zoom="zoom"
      :options="myOptions"
    >
      <gmap-custom-marker
        :key="index"
        v-for="(m, index) in $store.getters.parkingLotsGetter"
        :marker="{ lat: m.lat, lng: m.lng }"
      >
        <div
          :class="getLotColor(m.occupancy.total.free)"
          @click="onClick({ lat: m.lat, lng: m.lng }, m)"
        >
          {{ m.occupancy.total.free }}
        </div>
      </gmap-custom-marker>
    </GmapMap>
    <Details :item="item" />
  </div>
</template>
