<template>
  <v-app id="inspire">
    <Navigation id="nav" :drawer="drawerState" />
    <Header id="headerWrapper" @navState="toggleNav" />
    <Footer />
    <Content :class="drawerState ? 'flex-end' : 'flex-center'">
      <div :class="drawerState ? 'width-short' : 'width-full'">
        <router-view></router-view>
      </div>
    </Content>
  </v-app>
</template>

<script>
import axios from "../../assets/constants";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Navigation from "../../components/layout/Navigation";
import Content from "../../components/layout/Content";

export default {
  data() {
    return {
      drawerState: true
    };
  },
  components: { Footer, Header, Navigation, Content },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    toggleNav(val) {
      this.drawerState = val;
    }
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      this.$router.push("/");
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      axios.defaults.headers.common["user_id"] = user.id;
      axios.defaults.headers.common["Content-Type"] = "application/json";
    }
  }
};
</script>

<style lang='scss' scoped>
#headerWrapper {
  height: 7vh;
}

#nav {
  width: 13vw;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.width-short {
  width: 85vw;
  margin: 10vh 0;
}

.width-full {
  width: 100vw;
  margin: 10vh 0;
  display: flex;
  justify-content: center;

  div {
    width: 100vw;
  }
}
</style>