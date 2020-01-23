<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <CardProduct :productData="item" />
    </div>
  </div>
</template>

<script>
import axios from "../../../assets/constants";

import CardProduct from "../../../components/CardProduct";
export default {
  components: { CardProduct },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios
      .get(`/app/product/fetch`)
      .then(res => {
        console.log(res.data.data);
        this.items = res.data.data;
      })
      .catch(err => console.error);
  }
};
</script>


<style>
</style>