<template>
  <v-card class="mx-auto" max-width="400" raised>
    <v-card-title class="headline mb-1">{{ item.name }}</v-card-title>
    <v-card-subtitle>{{ item.domain }}</v-card-subtitle>
    <v-card-text>{{ item.description }}</v-card-text>
    <v-card-actions>
      <router-link exact to="/home/application/append-users">
        <v-btn small @click="setHeader">Users</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link exact to="/home/application/append-products">
        <v-btn small @click="setHeader">Products</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <v-btn small @click="remove">Delete</v-btn>
      <v-spacer></v-spacer>

      <router-link exact to="/home/application/view-products">
        <v-btn small @click="setHeader">View</v-btn>
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
      this.setHeader();

      this.$emit("itemClicked");
    },
    setHeader() {
      axios.defaults.headers.common["app_id"] = this.item._id;
      axios.defaults.headers.common["secret_key"] = this.item.secret_key;
    }
  },
  created() {
    this.item = this.appData;
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
