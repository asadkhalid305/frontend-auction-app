<template>
  <v-navigation-drawer id="nav" v-model="drawerState" app clipped>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <router-link exact to="/home/dashboard">Dashboard</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <router-link exact to="/home/application">
            <v-list-item-title>
              Application
            </v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["drawer"],
  data() {
    return {
      drawerState: true
    };
  },
  watch: {
    drawer() {
      this.drawerState = this.drawer;
    }
  }
};
</script>

<style>
</style>