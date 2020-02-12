<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <h1>Add New App</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name*"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="description"
            :rules="descRules"
            label="Description*"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="domain"
            :rules="domainRules"
            label="Domain*"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn class="mr-4" @click="submit">Submit</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "../../../../assets/constants";
export default {
  data: () => ({
    valid: false,
    name: "",
    description: "",
    domain: "",
    nameRules: [v => !!v || "Name is required"],
    descRules: [v => !!v || "Desciption is required"],
    domainRules: [v => !!v || "Domain is required"]
  }),

  methods: {
    submit() {
      if (this.valid) {
        const values = {
          name: this.name,
          domain: this.domain,
          description: this.description
        };

        axios
          .post(`/app/add`, values)
          .then(res => {
            this.$router.push("/home/application/");
          })
          .catch(err => console.error);
      }
    }
  }
};
</script>