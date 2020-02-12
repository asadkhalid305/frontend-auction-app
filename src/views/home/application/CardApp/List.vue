<template>
  <v-container>
    <v-row class="flex-end">
      <v-btn text right large color="#fff">
        <router-link exact to="/home/application/add">Add New App</router-link>
      </v-btn>
    </v-row>

    <v-row>
      <v-col lg="3" md="4" sm="6" xs="12" v-for="item in items" :key="item.id">
        <CardApp :appData="item" @itemClicked="remove" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../../../../assets/constants";

import CardApp from "../../../../components/CardApp";
export default {
  components: { CardApp },
  data() {
    return {
      items: []
    };
  },
  methods: {
    remove() {
      axios
        .delete(`/app/remove`)
        .then(res => {
          const deletedApp = res.data.data;
          this.items = this.items.filter(item => item._id !== deletedApp._id);
        })
        .catch(err => console.error);
    }
  },
  mounted() {
    axios
      .get(`/app/`)
      .then(res => {
        this.items = res.data.data;
      })
      .catch(err => {
        console.error;
      });
  }
};
</script>

<style>
.flex-end {
  display: flex;
  justify-content: flex-end;
}
</style>