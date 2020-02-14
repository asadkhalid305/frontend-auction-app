<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn medium v-on="on">Info</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">App Information</span>
        </v-card-title>
        <v-card-text> STATUS: {{ appDetails.isActive }} </v-card-text>
        <v-card-text> APP ID: {{ appDetails._id }} </v-card-text>
        <v-card-text> APP SECRET KEY: {{ appDetails.secret_key }} </v-card-text>
        <v-card-text>
          REGISTERED PRODUCTS:
          <p
            class="text-white text-italic"
            v-for="product in appDetails.products"
            :key="product._id"
          >
            {{ product }}
          </p>
        </v-card-text>
        <v-card-text>
          REGISTERED USERS:
          <p
            class="text-white text-italic"
            v-for="user in appDetails.registered_users"
            :key="user.id"
          >
            {{ user }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "../../assets/constants";

export default {
  props: ["appDetails"],
  data: function() {
    return {
      dialog: false,
      item: {}
    };
  },
  methods: {}
};
</script>