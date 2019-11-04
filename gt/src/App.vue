<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style scoped="">

#app{
  height: 100%;
  width: 100vw;
}
body{
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}

</style>
