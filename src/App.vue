<template >
  <div id="app" class="dark" style="height:60rem">
    <div id="nav" ></div>
    <router-view/>
  </div>
</template>
<script>

export default {
  mounted() {
    this.$router.replace("/register");
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f8;
   background-color: rgb(41, 41, 41);

}
/* 忍 */
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
 
</style>
//忍
