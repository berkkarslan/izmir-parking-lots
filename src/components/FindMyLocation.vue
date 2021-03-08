<template>
  <div class="find-my-location" @click="findMyLocation()">
    <img
      class="icon-1x"
      :src="require('../assets/img/map-marker-alt-solid.svg')"
    />
    <div>En Yakın <br />Otopark</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: null
    };
  },
  methods: {
    findMyLocation() {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // this.findClosestParkingLot();
      });
    },
    findClosestParkingLot() {
      // Find Closest Parking Lot
    }
  }
};
</script>
