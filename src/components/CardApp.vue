<template>
  <v-card class="mx-auto" max-width="344" raised>
    <v-card-title class="headline mb-1">{{ item.name }}</v-card-title>
    <v-card-subtitle>{{ item.domain }}</v-card-subtitle>
    <v-card-text>{{ item.description }}</v-card-text>
    <v-card-actions>
      <v-btn>Edit</v-btn>
      <v-btn>Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["someData"],
  data: () => ({
    item: {}
  }),
  created() {
    this.item = this.someData;
  }
};
</script>
