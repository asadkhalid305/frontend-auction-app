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
                Code Verification
              </span>

              <span class="txt1 p-b-11">
                Enter Code
              </span>
              <div
                class="wrap-input100 validate-input m-b-36"
                data-validate="code is required"
              >
                <input
                  v-model="code"
                  class="input100"
                  type="text"
                  name="code"
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
      code: ""
    };
  },
  methods: {
    submit() {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.code}`;
      axios
        .post(`recovery/token/verify`)
        .then(res => {
          console.log(res);
          this.$router.push("/recovery/set-password");
        })
        .catch(err => console.error(err));
    }
  }
};
</script>