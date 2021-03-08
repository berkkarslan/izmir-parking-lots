<template>
  <div v-if="$store.state.showDetail" class="details">
    <div class="card-container">
      <div class="detail-header">
        <div class="float-right" @click="$store.commit('hideDetails')">
          <img class="icon" :src="require('../assets/img/close.svg')" />
        </div>
        <div class="detail-title">
          <img class="icon" :src="require('../assets/img/parking-solid.svg')" />
          {{ item.name }}
        </div>
      </div>
      <div class="detail-body">
        <div class="detail-is-paid my-1">
          <img
            class="icon-1x"
            :src="require('../assets/img/money-bill-alt-regular.svg')"
          />
          <b>{{ item.isPaid === false ? 'Ücretsiz' : 'Nakit' }}</b>
        </div>
        <div v-if="item.occupancy.disabled" class="detail-is-paid my-2">
          <img
            class="icon-0x"
            :src="require('../assets/img/wheelchair-solid.svg')"
          />
          <b>{{ item.occupancy.disabled.free }}</b>
        </div>
        <div class="row">
          <div class="col detail-park-text">
            <b> {{ item.occupancy.total.free }} </b>Boş Alan -
            <b
              >{{ item.occupancy.total.free + item.occupancy.total.occupied }}
            </b>
            Kapasite
          </div>
        </div>

        <div class="pb-1">
          <a class="get-address" @click="goLink(item.lat, item.lng)"
            >Yol Tarifi</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: null }
  },
  methods: {
    goLink(lat, lng) {
      window.open(`https://www.google.com/maps/dir//${lat},${lng}`);
    }
  }
};
</script>

<style></style>
