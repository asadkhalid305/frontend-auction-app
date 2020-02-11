<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="item in items" :key="item.id">
        <CardProduct :productData="item" @bid="updateBid" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../../../../assets/constants";

import CardProduct from "../../../../components/CardProduct";

import { initializeSocket, listen } from "../../../../../socket";

export default {
  components: { CardProduct },
  data() {
    return {
      items: []
    };
  },
  methods: {
    updateBid(payload) {
      this.dialog = false;

      const app = JSON.parse(localStorage.getItem("app"));
      const user = JSON.parse(localStorage.getItem("user"));

      axios
        .patch(
          `/product/bid`,
          {
            newBid: payload.amount,
            product: payload.product,
            user
          },
          {
            headers: app
          }
        )
        .then(res => {
          // this.items = res.data.data;
        })
        .catch(err => console.error);
    }
  },
  mounted() {
    const token = this.$route.query.token;
    const app = JSON.parse(localStorage.getItem("app"));
    const user = JSON.parse(localStorage.getItem("user"));

    initializeSocket(user);

    axios
      .get(`/product/`, {
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
        headers: app
      })
      .then(res => {
        let that = this;
        this.items = res.data.data;
        listen("emitBid", payload => {
          this.items = payload.products;
        });
      })
      .catch(err => console.error);
  }
};
</script>
