<template>
  <v-app-bar id="header" app clipped-left>
    <v-app-bar-nav-icon @click="toggleNav" />
    <v-toolbar-title>Application</v-toolbar-title>
    <v-btn text absolute right large color="#fff" @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  methods: {
    toggleNav() {
      this.$emit(
        "navState",
        this.drawer === null
          ? (this.drawer = false)
          : (this.drawer = !this.drawer)
      );
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.go();
    }
  }
};
</script>