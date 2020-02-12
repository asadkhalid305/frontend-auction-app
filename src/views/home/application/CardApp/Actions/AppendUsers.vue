<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <h1>Add Users</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-textarea
            v-model="users"
            :rules="usersRules"
            label="Paste json Here"
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
import axios from "../../../../../assets/constants";
export default {
  data: () => ({
    valid: false,
    users: "",
    usersRules: [v => !!v || "Users are required"]
  }),

  methods: {
    submit() {
      if (this.valid) {
        axios
          .patch(`/app/user/add`, { users: JSON.parse(this.users).users })
          .then(res => {
            this.$router.push("/home/application/");
          })
          .catch(err => console.error);
      }
    }
  }
};
</script>

