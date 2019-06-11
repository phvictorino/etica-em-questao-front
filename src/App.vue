<template>
  <div id="main">
    <v-app>
      <v-content>
        <router-view />
      </v-content>
      <v-dialog
      v-model="isLoading"
      persistent
      fullscreen
      content-class="dialog-loading"
      transition="false"
    >
      <v-container fill-height>
        <v-layout row justify-center align-center>
          <atom-spinner
          :animation-duration="1000"
          :size="100"
          color="white"
        />
        </v-layout>
      </v-container>
    </v-dialog>
    </v-app>
  </div>
</template>

<script>
import { AtomSpinner } from 'epic-spinners'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    AtomSpinner
  },
  computed: {
    ...mapGetters('loading', ['isLoading'])
  }
}
</script>

<style>
.theme--light.application {
  background: none;
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
  opacity: 0.8;
  z-index: -1;
}

.rounded-card-5 {
  border-radius: 5px;
}

.rounded-card-10 {
  border-radius: 10px;
}

.dialog-loading {
  background-color: #303030;
  opacity: 0.7;
}
</style>
