<template>
  <div>
    <div class="login">
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <form
              @submit.prevent="submit"
              class="login100-form validate-form flex-sb flex-w"
            >
              <span class="login100-form-title p-b-32">
                Setup New Password
              </span>

              <span class="txt1 p-b-11">
                Enter Password
              </span>
              <div
                class="wrap-input100 validate-input m-b-36"
                data-validate="password is required"
              >
                <input
                  v-model="password"
                  class="input100"
                  type="password"
                  name="password"
                />
                <span class="focus-input100"></span>
              </div>

              <span class="txt1 p-b-11">
                Enter new password
              </span>
              <div
                class="wrap-input100 validate-input m-b-36"
                data-validate="password is required"
              >
                <input
                  v-model="newPassword"
                  class="input100"
                  type="text"
                  name="newPassword"
                />
                <span class="focus-input100"></span>
              </div>

              <div class="container-login100-form-btn btn-center">
                <button class="login100-form-btn btn-center btn-center">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("../../assets/js/main");
import axios from "../../assets/constants";

export default {
  name: "TokenGenerate",
  data() {
    return {
      password: "",
      newPassword: "",
      user: ""
    };
  },
  methods: {
    submit() {
      if (this.password === this.newPassword) {
        const values = {
          id: this.user.id,
          password: this.password
        };

        axios
          .post(`recovery/password/new`, values)
          .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data.data));
            this.$router.push("/home");
          })
          .catch(err => console.error(err));
      } else {
        console.log("Confirm Password missmatched");
      }
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
};
</script>