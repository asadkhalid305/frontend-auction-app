<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Place Bid</v-btn>
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
                  type="number"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <small>Bid must be greater than current bid</small>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn @click="placeBid" color="blue darken-1" text>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "../assets/constants";

export default {
  data: () => ({
    dialog: false,
    amount: 0
  }),
  methods: {
    // placeBid() {
    //   this.dialog = false;

    //   const app = JSON.parse(localStorage.getItem("app"));
    //   const user = JSON.parse(localStorage.getItem("user"));

    //   axios
    //     .patch(
    //       `/app/product/bid`,
    //       {
    //         newBid: this.amount,
    //         user
    //       },
    //       {
    //         headers: app
    //       }
    //     )
    //     .then(res => {
    //       this.items = res.data.data;
    //     })
    //     .catch(err => console.error);
    // }
  }
};
</script>