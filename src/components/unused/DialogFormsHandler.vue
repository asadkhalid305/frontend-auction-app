<template>
  <div>
    <DialogForm v-if="dialogNo === 1 && isVisible">
      <template v-slot:title>
        <span class="headline">Enter your email</span>
      </template>
      <template v-slot:inputFields>
        <v-text-field label="Email*" required></v-text-field>
      </template>
    </DialogForm>
    <DialogForm v-else-if="dialogNo === 2 && isVisible">
      <template v-slot:title>
        <span class="headline">Enter your token</span>
      </template>
      <template v-slot:inputFields>
        <v-text-field label="Token*" required></v-text-field>
      </template>
    </DialogForm>
    <DialogForm v-else-if="dialogNo === 3 && isVisible">
      <template v-slot:title>
        <span class="headline">Enter your new password</span>
      </template>
      <template v-slot:inputFields>
        <v-text-field label="Password*" required></v-text-field>
        <v-text-field label="Repeat Password*" required></v-text-field>
      </template>
    </DialogForm>
  </div>
</template>

<script>
import DialogForm from "./DialogForm";
export default {
  name: "DialogFormsHandler",
  props: { dialogNo: Number },
  data() {
    return {
      isVisible: false,
      dialog: false
    };
  },
  components: { DialogForm },
  watch: {
    dialogNo() {
      if (this.dialogNo >= 1) {
        this.isVisible = true;
        this.dialog = true;
      }
    }
  }
};
</script>

<style>
</style>