<template>
  <v-app id="inspire">
    <Content id="">
      <v-container>
        <v-row>
          <v-col
            lg="3"
            md="4"
            sm="6"
            xs="12"
            v-for="item in items"
            :key="item.id"
          >
            <CardProduct :productData="item" @bid="updateBid" />
          </v-col>
        </v-row>
      </v-container>
    </Content>
  </v-app>
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

      const query = { ...this.$route.query };

      let headers;
      if (query.token) {
        headers = {
          headers: {
            app_id: query.app_id,
            user_id: query.user_id,
            Authorization: `Bearer ${query.token}`
          }
        };
      } else {
        const app = JSON.parse(localStorage.getItem("app"));
        const user = JSON.parse(localStorage.getItem("user"));

        headers = {
          headers: {
            app_id: app.app_id,
            user_id: user.id
          }
        };
      }

      axios
        .patch(
          `/product/bid`,
          {
            newBid: payload.amount,
            product: payload.product
          },
          headers
        )
        // .then(res => {
        //   // this.items = res.data.data;
        // })
        .catch(err => console.error);
    }
  },
  mounted() {
    const query = { ...this.$route.query };

    initializeSocket(query.user_id);

    let headers;
    if (query.token) {
      headers = {
        headers: {
          app_id: query.app_id,
          Authorization: `Bearer ${query.token}`
        }
      };
    } else {
      const app = JSON.parse(localStorage.getItem("app"));
      headers = {
        headers: {
          app_id: app.app_id
        }
      };
    }

    axios
      .get(`/product/`, headers)
      .then(res => {
        this.items = res.data.data;
        listen("emitBid", payload => {
          this.items = payload.products;
        });
      })
      .catch(err => console.error);
  }
};
</script>
