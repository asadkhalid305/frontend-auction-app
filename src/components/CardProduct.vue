<template>
  <v-card class="mx-auto" max-width="400" raised>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ item.name }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">{{ item.expire }}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{ item.current_bid }}</div>
    </v-card-text>
    <v-card-actions>
      <router-link exact to>
        <v-btn text small>Place Bid</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "../assets/constants";

export default {
  props: ["productData"],
  data: () => ({
    item: {}
  }),
  created() {
    this.item = this.productData;
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  outline: none;
  color: white;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}
</style>
