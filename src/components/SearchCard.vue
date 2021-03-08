<template>
  <div class="filter card">
    <b class="text-center mb-2">İzmir Otopark Alanları</b>
    <div class="">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="ucretsiz"
          v-model="check1"
          @change="filterFunc()"
        />
        <label class="form-check-label" for="ucretsiz">
          Sadece Ücretsiz
        </label>
      </div>
      <div class="form-check mt-2">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="bosyerler"
          v-model="check2"
          @change="filterFunc()"
        />
        <label class="form-check-label" for="bosyerler">
          Boş Park
        </label>
      </div>
      <div class="form-check mt-2">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="engelliarac"
          v-model="check3"
          @change="filterFunc()"
        />
        <label class="form-check-label" for="engelliarac">
          Engelli Araç Park Yeri
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCard',
  data() {
    return {
      check1: false,
      check2: false,
      check3: false
    };
  },
  methods: {
    filterFunc() {
      const payload = {
        isFree: this.check1,
        isAvailable: this.check2,
        isHandicapped: this.check3
      };
      this.$store.dispatch('filterParkingLots', payload);
    }
  }
};
</script>
