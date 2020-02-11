<template>
  <v-card class="mx-auto" max-width="344" raised>
    <v-img
      class="white--text align-end"
      height="22vh"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title
        >Name: <span class="span-italic">{{ item.name }}</span></v-card-title
      >
    </v-img>
    <v-card-subtitle
      >Expires in:
      <span class="span-italic">{{ item.expire }}</span></v-card-subtitle
    >
    <v-card-text class="text--primary">
      Current Bid:
      <span class="span-italic">{{ item.current_bid }}</span>
    </v-card-text>
    <v-card-actions>
      <ModalForm @placeBidClicked="placeBid" :product="item" />
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "../assets/constants";
import ModalForm from "../components/ModalForm";

export default {
  props: ["productData"],
  data: () => ({
    item: {}
  }),
  components: { ModalForm },
  methods: {
    placeBid(amount) {
      const temp = {
        amount,
        product: this.item
      };

      this.$emit("bid", temp);
    }
  },
  created() {
    this.item = this.productData;
  },
  watch: {
    "productData.current_bid"() {
      this.item = this.productData;
    }
  }
};
</script>

<style scoped>
.mx-auto {
  margin: 10px 0;
}

.span-italic {
  font-style: italic;
}
</style>
