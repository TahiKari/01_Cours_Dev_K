<template>
  <div>
    <div>
      <button v-on:click="decrementProgress">-</button>
      <span>{{ habit.name }} ({{ habitId }})</span>
      <button v-on:click="incrementProgress">+</button>
      <button v-on:click="deleteHabit">Delete</button>
    </div>
    <div>{{ habit.progressPlus }}+ et {{ habit.progressMinus }}-</div>
  </div>
</template>
<script>
export default {
  props: {
    habitId: Number,
  },
  computed: {
    habit() {
      return this.$store.getters.getHabitById(this.habitId);
    },
  },
  methods: {
    incrementProgress() {
      this.$store.dispatch("incrementHabitProgress", { habitId: this.habitId });
    },
    decrementProgress() {
      this.$store.dispatch("decrementHabitProgress", { habitId: this.habitId });
    },
    deleteHabit() {
      this.$store.dispatch("deleteHabit", this.habitId);
    },
  },
};
</script>
