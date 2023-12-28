<template>
  <div class="level-bar">
    <div class="level-bar__level">Niveau {{ level }}</div>
    <div class="level-bar__bar">
      <div
        class="level-bar__progress"
        :style="{ width: `${progressPercentage}%` }"
      ></div>
    </div>
    <div class="level-bar__exp">
      {{ experiencePoints }} / {{ nextLevelExp }} XP
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["progressPercentage", "level", "experiencePoints"]),
    nextLevelExp() {
      return 100;
    },
  },
};
</script>

<style>
.level-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.level-bar__level {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.level-bar__bar {
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}
.level-bar__progress {
  height: 100%;
  background-color: #42b983;
}
.level-bar__exp {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}
</style>

