<template>
  <div>
    <h1>Welcome to home</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from "../../assets/constants";

export default {
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.go();
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