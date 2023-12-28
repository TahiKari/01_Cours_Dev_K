<template>
  <div>
    <h1>Ma liste de courses</h1>
    <div class="add-item">
      <input type="text" v-model="newItem" />
      <button v-on:click="addItem">Ajouter un article</button>
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <input
          type="checkbox"
          v-bind:checked="item.purchased"
          v-on:change="toggleItem(index)"
        />
        <span v-bind:class="{ purchased: item.purchased }">{{
          item.name
        }}</span>
        <button v-on:click="removeItem(index)">Supprimer l’article</button>
      </li>
    </ul>
    <p>{{ purchasedItemCount }} articles achetés</p>
  </div>
</template>
<script>
export default {
  name: "ShoppingList",
  computed: {
    purchasedItemCount() {
      return this.$store.getters.purchasedItems.length;
    },
    items() {
      return this.$store.getters.allItems;
    },
  },
  data() {
    return {
      newItem: "",
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.$store.commit("addItem", {
          name: this.newItem.trim(),
          purchased: false,
        });
        this.newItem = "";
      }
    },
    removeItem(index) {
      this.$store.commit("removeItem", index);
    },
    toggleItem(index) {
      this.$store.commit("toggleItem", index);
    },
  },
};
</script>
