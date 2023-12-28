<template>
  <div>
    <habit-single
      v-for="(habit, index) in habits"
      v-bind:key="index"
      v-bind:habit-id="habit.id"
    />
    <label for="habit"></label>
    <input type="text" name="habit" id="habit" v-model="newHabit.name" />
    <button v-on:click="addHabit">Add Habit</button>
  </div>
</template>
<script>
import HabitSingle from "@/components/HabitSingle.vue";
export default {
  components: { HabitSingle },
  data() {
    return {
      newHabit: { name: "" },
    };
  },
  computed: {
    habits() {
      return this.$store.getters.getAllHabits();
    },
  },
  methods: {
    addHabit() {
      var id = new Date().getTime();
      var habit = {
        id: id,
        name: this.newHabit.name,
        progressPlus: 0,
        progressMinus: 0,
      };
      this.$store.dispatch("addHabit", habit);
      this.newHabit = { name: "" };
    },
  },
};
</script>
