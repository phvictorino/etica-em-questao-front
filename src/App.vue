<template>
  <div id="main">
    <v-app>
      <v-toolbar
        color="primary"
        app
      >
        <v-toolbar-title class="headline text-uppercase">
          <v-icon
            class="mr-3"
            large
          >mdi-account-supervisor-circle</v-icon>
            <span class="font-weight-light">TESTE SUA</span>
          <span> ÉTICA</span>
        </v-toolbar-title>
      </v-toolbar>

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
</style>
