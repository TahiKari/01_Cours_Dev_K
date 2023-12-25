<template>
  <h1>Vue.js ToDo List with Vuex</h1>
  <input type="text" v-model="newTask" />
  <button v-on:click="addTask">Ajouter</button>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <input
        type="checkbox"
        v-bind:checked="task.completed"
        v-on:change="toggleTask(index)"
      />
      <span v-bind:class="{ completed: task.completed }">{{
        task.description
      }}</span>
      <button v-on:click="removeTask(index)">Supprimer</button>
    </li>
  </ul>
  <p>Complétées: {{ completedTaskCount }}</p>
</template>
<script>
export default {
  name: "TodoList",
  computed: {
    completedTaskCount() {
      return this.$store.getters.completedTasks;
    },
    tasks() {
      return this.$store.getters.allTasks;
    },
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$store.commit("addTask", {
          description : this.newTask.trim(),
          completed: false,
        });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.$store.commit("removeTask", index);
    },
    toggleTask(index) {
      this.$store.commit("toggleTask", index);
    },
  },
};
</script>