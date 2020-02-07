<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <CardProduct :productData="item" />
    </div>
  </div>
</template>

<script>
import axios from "../../../../assets/constants";

import CardProduct from "../../../../components/CardProduct";
export default {
  components: { CardProduct },
  data() {
    return {
      items: []
    };
  },
  methods: {
    placeBid() {
      this.dialog = false;

      const app = JSON.parse(localStorage.getItem("app"));
      const user = JSON.parse(localStorage.getItem("user"));

      axios
        .patch(
          `/app/product/bid`,
          {
            newBid: this.amount,
            user
          },
          {
            headers: app
          }
        )
        .then(res => {
          this.items = res.data.data;
        })
        .catch(err => console.error);
    }
  },
  mounted() {
    const app = JSON.parse(localStorage.getItem("app"));

    axios
      .get(`/app/product/fetch`, {
        headers: app
      })
      .then(res => {
        this.items = res.data.data;
      })
      .catch(err => console.error);
  }
};
</script>


<style>
</style>