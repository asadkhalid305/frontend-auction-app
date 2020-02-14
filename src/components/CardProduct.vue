<template>
  <v-card max-width="344" max-height="355" raised>
    <v-img
      class="white--text align-end"
      height="22vh"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title
        >Name: <span class="text-italic">{{ item.name }}</span></v-card-title
      >
    </v-img>
    <v-card-subtitle
      >Expires in:
      <span class="text-italic">{{
        new Date(item.expire * 1000)
      }}</span></v-card-subtitle
    >
    <v-card-text class="text--primary">
      Current Bid:
      <span class="text-italic">{{ item.current_bid }}</span>
    </v-card-text>

    <template v-if="item.isExpired">
      <v-card-text class="text--primary">
        Winner:
        <span class="text-italic">{{ item.highest_bidder }}</span>
      </v-card-text>
    </template>
    <template v-else>
      <v-card-text class="text--primary">
        Heighest Bidder:
        <span class="text-italic">{{ item.highest_bidder }}</span>
      </v-card-text>
      <v-card-actions>
        <NewBid @placeBidClicked="placeBid" :product="item" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
import axios from "../assets/constants";
import NewBid from "./Modals/NewBid";

export default {
  props: ["productData"],
  data: () => ({
    item: {}
  }),
  components: { NewBid },
  methods: {
    placeBid(amount) {
      const temp = {
        amount,
        product: this.item
      };

      this.$emit("bid", temp);
    }
  },
  watch: {
    "productData.current_bid"() {
      this.item = this.productData;
    },
    "productData.isExpired"() {
      this.item = this.productData;
    }
  },
  created() {
    this.item = this.productData;
  }
};
</script>