<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Info</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">App Information</span>
        </v-card-title>
        <v-card-text> APP ID: {{}} </v-card-text>
        <v-card-text> APP SECRET KEY: {{}} </v-card-text>
        <v-card-text> REGISTERED PRODUCTS: {{}} </v-card-text>
        <v-card-text> REGISTERED USERS: {{}} </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >Disagree</v-btn
          >
          <v-btn color="green darken-1" text @click="dialog = false"
            >Agree</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "../../assets/constants";

export default {
  props: ["product"],
  data: function() {
    return {
      dialog: false,
      amount: 0,
      isSubmitDisabled: true
    };
  }
};
</script>