const mutations = {
  updateLots(state, newLots) {
    state.lots = newLots;
    state.filteredLots = newLots;
  },
  filterLots(state, newLots) {
    state.filteredLots = newLots;
  },
  updateMyLocation(state, location) {
    state.myLocation = location;
  },
  showDetails(state) {
    state.showDetail = true;
  },
  hideDetails(state) {
    state.showDetail = false;
  }
};

export default mutations;
