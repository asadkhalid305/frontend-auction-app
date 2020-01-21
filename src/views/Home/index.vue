<template>
  <v-app id="inspire">
    <Navigation v-bind:drawer="drawerState" />
    <Header @navState="toggleNav" />
    <Footer />

    <router-view></router-view>
  </v-app>
</template>

<script>
import axios from "../../assets/constants";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Navigation from "../../components/layout/Navigation";

export default {
  data() {
    return {
      drawerState: null
    };
  },
  components: { Footer, Header, Navigation },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    toggleNav(val) {
      this.drawerState = val;
    }
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      this.$router.push("/");
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      axios.defaults.headers.common["Userid"] = user.id;
      axios.defaults.headers.common["Content-Type"] = "application/json";
    }
  }
};
</script>

<style>
</style>