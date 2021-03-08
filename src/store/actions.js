const actions = {
  async fetchParkingLots({ commit }) {
    const response = await fetch(
      'https://openapi.izmir.bel.tr/api/ibb/izum/otoparklar'
    );
    const lots = await response.json();
    commit('updateLots', lots);
  },
  filterParkingLots({ commit, state }, payload) {
    let lots = state.lots;

    if (payload.isFree) {
      lots = lots.filter(function(el) {
        return el.isPaid === false;
      });
    }
    if (payload.isAvailable) {
      lots = lots.filter(function(el) {
        return el.occupancy.total.free > 0;
      });
    }
    if (payload.isHandicapped) {
      lots = lots.filter(function(el) {
        return el.occupancy.disabled;
      });
    }

    commit('filterLots', lots);
  }
};

export default actions;
