<template>
  <v-container>
    <v-row class="flex-end">
      <v-btn text right large color="#fff">
        <router-link exact to="/home/application/add">Add New App</router-link>
      </v-btn>
    </v-row>

    <v-row>
      <v-col lg="3" md="4" sm="6" xs="12" v-for="item in items" :key="item.id">
        <CardApp :appData="item" @itemClicked="toggleStatus" />
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
    toggleStatus(status) {
      const app = JSON.parse(localStorage.getItem("app"));

      const headers = {
        headers: {
          app_id: app.app_id,
          secret_key: app.secret_key
        }
      };
      axios
        .patch(`/app/status`, { status }, headers)
        .then(res => {
          const modifiedApp = res.data.data;
          const tempArray = this.items;

          const index = tempArray.findIndex(
            item => item._id === modifiedApp._id
          );

          if (index > -1) tempArray[index].isActive = status;

          this.items = tempArray;
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