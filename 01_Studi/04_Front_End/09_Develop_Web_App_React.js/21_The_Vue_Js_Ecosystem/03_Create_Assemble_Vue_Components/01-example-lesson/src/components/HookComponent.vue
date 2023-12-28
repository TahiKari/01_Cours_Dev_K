<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lifecycle Hook Example",
      message: "This is the initial message.",
    };
  },
  beforeCreate() {
    console.log("Component before created!");
  },
  created() {
    console.log("Component created!");
  },
  beforeMount() {
    console.log("Component before mount!");
  },
  mounted() {
    console.log("Component mounted!");
  },
  beforeUpdate() {
    console.log("Component before Update!");
  },
  updated() {
    console.log("Component updated!");
  },
  beforeUnmount() {
    console.log("Component before destroy!");
  },
  unmounted() {
    console.log("Component destroyed!");
  },
};
</script>
