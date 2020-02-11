<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on">Place Bid</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Place Your Bid</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8" md="6">
                <v-text-field
                  v-model="amount"
                  label="Value"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row v-show="isSubmitDisabled">
              <small>Bid must be greater than current bid</small>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn
            @click="placeBid"
            color="blue darken-1"
            text
            :disabled="isSubmitDisabled === true"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "../assets/constants";

export default {
  props: ["product"],
  data: function() {
    return {
      dialog: false,
      amount: 0,
      isSubmitDisabled: true
    };
  },
  watch: {
    amount() {
      console.log(typeof this.amount, typeof this.product.current_bid);
      this.amount > Number(this.product.current_bid)
        ? (this.isSubmitDisabled = false)
        : (this.isSubmitDisabled = true);
    }
  },
  methods: {
    placeBid() {
      this.dialog = false;
      this.$emit("placeBidClicked", this.amount);
    }
  }
};
</script>