<template>
  <v-card max-height="308" raised>
    <v-card-title class="headline mb-1"
      >Name: <span class="span-italic">{{ item.name }}</span>
    </v-card-title>
    <v-card-subtitle
      >Domain: <span class="span-italic">{{ item.domain }}</span>
    </v-card-subtitle>
    <v-card-text
      >Description:
      <span class="span-italic">{{ item.description }}</span></v-card-text
    >
    <v-card-actions>
      <router-link exact to="/home/application/append-users">
        <v-btn small @click="setAppInLocalStorage">Users</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link exact to="/home/application/append-products">
        <v-btn small @click="setAppInLocalStorage">Products</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <router-link exact to>
        <v-btn small @click="remove">Delete</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <router-link exact to="/home/application/view-products">
        <v-btn small @click="setAppInLocalStorage">View</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "../assets/constants";

export default {
  props: ["appData"],
  data: () => ({
    item: {}
  }),
  methods: {
    remove() {
      this.setAppInLocalStorage();

      this.$emit("itemClicked");
    },
    setAppInLocalStorage() {
      localStorage.setItem(
        "app",
        JSON.stringify({
          app_id: this.item._id,
          secret_key: this.item.secret_key
        })
      );
    }
  },
  created() {
    this.item = this.appData;
  }
};
</script>

<style scoped>
.span-italic {
  font-style: italic;
}
</style>
