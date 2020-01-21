<template>
  <div :style="{ marginTop: headerHeight, marginLeft: navWidth }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: "",
      navWidth: ""
    };
  },
  mounted() {
    let header = document.querySelector("#header");
    let nav = document.querySelector("#nav");

    this.headerHeight = header.clientHeight + "px";

    if (
      nav.style.transform &&
      nav.style.transform.split("(")[1].split(")")[0] >= 0
    ) {
      this.navWidth = nav.clientWidth + "px";
    } else {
      this.navWidth = "";
    }
  }
};
</script>

<style>
</style>