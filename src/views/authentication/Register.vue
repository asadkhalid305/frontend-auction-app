<template>
  <div class="login">
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
          <form class="login100-form validate-form flex-sb flex-w">
            <span class="login100-form-title p-b-32">
              Register
            </span>

            <span class="txt1 p-b-11">
              Email
            </span>
            <div
              class="wrap-input100 validate-input m-b-36"
              data-validate="Email is required"
            >
              <input class="input100" type="text" name="email" />
              <span class="focus-input100"></span>
            </div>

            <span class="txt1 p-b-11">
              Username
            </span>
            <div
              class="wrap-input100 validate-input m-b-36"
              data-validate="Username is required"
            >
              <input class="input100" type="text" name="username" />
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
              <input class="input100" type="password" name="pass" />
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
              <input class="input100" type="password" name="re-pass" />
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

export default {
  name: "login",
  components: {}
};
</script>

<style scoped>
@import url("../../assets/css/login/main.css");
@import url("../../assets/css/login/util.css");

.btn-center {
  text-align: center;
  display: inline-block;
  width: 100%;
}
</style>
