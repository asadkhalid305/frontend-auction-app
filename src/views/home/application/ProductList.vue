<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <CardProduct :someData="item" @itemClicked="remove" />
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
        this.items = res.data.data;
      })
      .catch(err => console.error);
  }
};
</script>


<style>
</style>