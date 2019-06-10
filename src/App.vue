<template>
  <div id="main">
    <v-app>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.theme--light.application {
  background: none
}

#main {
  position: relative;
}
#main:after {
  background-image: url("./assets/fundo.jpg") !important;
  background-size: cover;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

.rounded-card-5 {
  border-radius: 5px
}

.rounded-card-10 {
  border-radius: 10px
}
</style>
