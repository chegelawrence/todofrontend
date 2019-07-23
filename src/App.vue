<template>
  <div id="app" class="row container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Google+Sans');
#app {
  font-family: 'Google Sans';
  margin-right: auto;
  margin-left: auto;
}
h3{
  font-size: 18px;
}
input[type="text"],input[type="password"]{
    font-family: 'Google Sans';
}
</style>
