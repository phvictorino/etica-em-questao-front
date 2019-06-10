<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex lg4>
      <v-card dark class="elevation-10 rounded-card-10 mb-2 py-3">
        <v-card-text class="text-xs-center">
          <v-layout align-center justify-center>
          <v-icon color="#AB47BC" class="display-1">mdi-test-tube</v-icon><span class="title">ÉTICA EM QUESTÃO</span>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card class="elevation-10 rounded-card-10 py-5">
        <v-card-text class="text-xs-center">
          <p class="title">Qual o resultado da sua auto reflexão quando você pensa em ética?</p>
          <p class="title">Você se acha realmente <b>ético?</b></p>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn large color="secondary" :to="{name: 'questions'}">Começar TESTE</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>
