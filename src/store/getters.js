export default {
  powerCounter: state => state.counter * state.counter,
  counterLength: (state, getters) => getters.powerCounter.length,

}