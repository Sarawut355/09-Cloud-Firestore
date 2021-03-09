<template>
  <div class="container">
    <b-card id="dark">
      <h1>Login</h1>
      <div class="row">
        <b-label class="ml-md-4">User : </b-label>
        <b-input class="col-9 ml-md-5" type="text"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="ml-md-4">Pass : </b-label>
        <b-input class="col-9 ml-md-5" type="password"></b-input>
      </div>
      <b-link @click="Create">สร้างบรรชีใหม่</b-link>
      <br />
      <b-button variant="primary">Login</b-button>
    </b-card>
  </div>
</template>

<script>
//忍
export default {
  methods: {
    Create() {
      this.$router.replace("/register");
    },
  },
};
</script>
<style scoped>
#dark {
  background-color: rgb(66, 66, 66);
}
</style>
