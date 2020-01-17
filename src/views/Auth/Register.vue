<template>
  <div class="login">
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
          <form
            @submit.prevent="submit"
            class="login100-form validate-form flex-sb flex-w"
          >
            <span class="login100-form-title p-b-32">
              Register
            </span>

            <span class="txt1 p-b-11">
              Name
            </span>
            <div
              class="wrap-input100 validate-input m-b-36"
              data-validate="Name is required"
            >
              <input v-model="name" class="input100" type="text" name="name" />
              <span class="focus-input100"></span>
            </div>

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

            <span class="txt1 p-b-11">
              Repeat Password
            </span>
            <div
              class="wrap-input100 validate-input m-b-12"
              data-validate="Password doesn't match"
            >
              <span class="btn-show-pass">
                <i class="fa fa-eye"></i>
              </span>
              <input
                v-model="repeatPassword"
                class="input100"
                type="password"
                name="re-pass"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="flex-sb-m w-full p-b-48">
              <div>
                <router-link class="txt3" to="/"
                  >Already have an account?</router-link
                >
              </div>
            </div>

            <div class="container-login100-form-btn btn-center">
              <button class="login100-form-btn btn-center">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
  </div>
</template>

<script>
require("../../assets/js/main");
import axios from "../../assets/constants";

export default {
  name: "login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  methods: {
    submit() {
      if (this.password === this.repeatPassword) {
        const values = {
          name: this.name,
          email: this.email,
          password: this.password
        };

        axios
          .post(`auth/signup`, values)
          .then(res => {
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data.data));
            this.$router.push("/home/");
          })
          .catch(err => console.error);
      } else {
        console.log(`passwords didn't match`);
      }
    }
  }
};
</script>

<style scoped>
@import url("../../assets/css/login/main.css");
@import url("../../assets/css/login/util.css");
</style>
