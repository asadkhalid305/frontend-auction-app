<template>
  <div>
    <v-btn text absolute right large color="#fff">
      <router-link exact to="/home/application/add">Add New App</router-link>
    </v-btn>
    <div v-for="item in items" :key="item.id">
      <CardApp :someData="item" />
    </div>
  </div>
</template>

<script>
import axios from "../../../assets/constants";

import CardApp from "../../../components/CardApp";
export default {
  components: { CardApp },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios
      .get(`/app/fetch`)
      .then(res => {
        this.items = res.data.data;
      })
      .catch(err => console.error);
  }
};
</script>

<style scoped>
.custom {
  display: flex;
}
</style>