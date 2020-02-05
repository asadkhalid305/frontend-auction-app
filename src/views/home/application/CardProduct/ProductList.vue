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