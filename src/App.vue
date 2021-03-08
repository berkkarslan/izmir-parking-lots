<script>
import gMap from '@/components/gMap';
import SearchCard from '@/components/SearchCard';
// import FindMyLocation from '@/components/FindMyLocation';

export default {
  name: 'Home',
  components: { gMap, SearchCard /* FindMyLocation */ },
  created() {
    this.$store.dispatch('fetchParkingLots');
  }
};
</script>

<template>
  <div id="app">
    <gMap />
    <SearchCard />
    <!--<FindMyLocation />-->
  </div>
</template>
