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
                Login
              </span>

              <span class="txt1 p-b-11">
                Email
              </span>
              <div
                class="wrap-input100 validate-input m-b-36"
                data-validate="Email is required"
              >
                <input
                  v-model="email"
                  class="input100"
                  type="text"
                  name="email"
                />
                <span class="focus-input100"></span>
              </div>

              <span class="txt1 p-b-11">
                Password
              </span>
              <div
                class="wrap-input100 validate-input m-b-12"
                data-validate="Password is required"
              >
                <span class="btn-show-pass">
                  <i class="fa fa-eye"></i>
                </span>
                <input
                  v-model="password"
                  class="input100"
                  type="password"
                  name="pass"
                />
                <span class="focus-input100"></span>
              </div>

              <div class="flex-sb-m w-full p-b-48">
                <div>
                  <router-link class="txt3" to="/register"
                    >Register account</router-link
                  >
                </div>

                <div>
                  <router-link class="txt3" to="/recovery/token-generate"
                    >Forgot password?</router-link
                  >
                </div>
              </div>

              <div class="container-login100-form-btn btn-center">
                <button class="login100-form-btn btn-center">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <DialogFormsHandler v-bind:dialogNo="dialogCount" />
  </div>
</template>

<script>
require("../../assets/js/main");
import axios from "../../assets/constants";
import DialogFormsHandler from "../../components/DialogFormsHandler";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      dialogCount: 0
    };
  },
  components: { DialogFormsHandler },
  methods: {
    submit() {
      const values = {
        email: this.email,
        password: this.password
      };

      axios
        .post(`auth/login`, values)
        .then(res => {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          this.$router.push("/home");
        })
        .catch(err => console.error);
    },
    forgetPassword() {
      this.dialogCount = 1;
    }
  },
  beforeCreate() {
    if (JSON.parse(localStorage.getItem("user"))) {
      this.$router.push("/home/");
    }
  },
  created() {
    // if (this.$route.params.fromRecovery) {
    //   localStorage.clear();
    // }
  }
};
</script>

<style scoped>
@import url("../../assets/css/login/main.css");
@import url("../../assets/css/login/util.css");
</style>
