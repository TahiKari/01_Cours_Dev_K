<template>
  <h1>Counter: {{ count }}</h1>
  <p>Double Count: {{ doubleCount }}</p>
  <button v-on:click="increment">Increment</button>
  <button v-on:click="decrement">Decrement</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
