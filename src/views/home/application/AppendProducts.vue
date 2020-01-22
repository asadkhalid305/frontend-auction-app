<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-textarea
            v-model="products"
            :rules="productsRules"
            label="Products*"
            required
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-btn class="mr-4" @click="submit">Submit</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "../../../assets/constants";
export default {
  data: () => ({
    valid: false,
    products: "",
    productsRules: [v => !!v || "Products are required"]
  }),

  methods: {
    submit() {
      if (this.valid) {
        axios
          .patch(`/app/product/add`, {
            products: JSON.parse(this.products).products
          })
          .then(res => {
            this.$router.push("/home/application/");
          })
          .catch(err => console.error);
      }
    }
  }
};
</script>

