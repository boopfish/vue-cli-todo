export default {
  namespaced: true,
  actions: {
    addOddPerson(context, value) {
      console.log("Action收到请求", context, value);
      if (value % 2 !== 0) {
        context.commit('ADD_ODD_PERSON', value);
      }
    },
  },
  mutations: {
    PERSON_INCREMENT(state) {
      state.population += 1;
    },
    ADD_ODD_PERSON(state, value) {
      state.population += value;
    }
  },
  state: {
    population: 0
  }
};
