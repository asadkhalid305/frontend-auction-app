<template>
  <v-card max-height="308" raised>
    <v-card-title class="headline mb-1"
      >Name: <span class="text-italic">{{ item.name }}</span>
    </v-card-title>
    <v-card-subtitle
      >Domain: <span class="text-italic">{{ item.domain }}</span>
    </v-card-subtitle>
    <v-card-text
      >Description:
      <span class="text-italic">{{ item.description }}</span>
    </v-card-text>
    <v-card-text
      >Status:
      <span class="text-italic">{{ item.isActive }}</span>
    </v-card-text>
    <v-card-actions>
      <AppDetails :appDetails="appData" />
    </v-card-actions>
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
        <v-btn small @click="toggleStatus">{{
          item.isActive ? "Deactivate" : "Activate"
        }}</v-btn>
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

import AppDetails from "../components/Modals/AppDetails";

export default {
  props: ["appData"],
  data: () => ({
    item: {}
  }),
  components: { AppDetails },
  methods: {
    toggleStatus() {
      this.setAppInLocalStorage();

      let status = !this.item.isActive;

      this.$emit("itemClicked", status);
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
  },
  watch: {
    appData() {
      this.item = this.appData;
    }
  }
};
</script>

