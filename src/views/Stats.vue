<template>
  <v-container
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex
        lg4
        xs6
      >
      <v-card dark class="round-15 mb-3 elevation-10">
          <v-card-title>
            <v-icon color="#AB47BC" class="display-1">mdi-test-tube</v-icon><span class="title">Estatísticas</span>
          </v-card-title>
        </v-card>
        <v-card class="round-15 elevation-10 text-xs-center mb-3">
          <v-card-text>
            <span class="title">
              Total de
            </span>
            <v-layout
              class="my-3"
              align-center
              justify-center
            >
              <v-icon
                color="green"
                class="display-1"
              >mdi-check</v-icon>
              <span class="display-1 font-weight-black">{{obj.totalAnswers}}</span>
              <v-icon
                color="red"
                class="display-1"
              >mdi-close</v-icon>
            </v-layout>
            <span class="title">questionários respondidos.</span>
          </v-card-text>
        </v-card>

        <v-card class="round-15 elevation-10 text-xs-center mb-3">
          <v-card-text>
            <span class="title">
              Média das resposta é de
            </span>
            <v-layout
              class="my-3"
              align-center
              justify-center
            >
              <v-progress-circular
                :value="obj.media"
                :size="100"
                color="#AB47BC"
                class="mb-3"
              >
                <span class="subheading">{{obj.media}}%</span>
              </v-progress-circular>
            </v-layout>
            <span class="title">de ética.</span>
          </v-card-text>
        </v-card>

        <v-card class="round-15 elevation-10 text-xs-center mb-3">
          <v-card-text>
            <span class="title">
              Total de
            </span>
            <v-layout
              class="my-3"
              align-center
              justify-center
            >
              <span class="display-1 font-weight-black">{{obj.totalQuestions}}</span>
            </v-layout>
            <span class="title">perguntas cadastradas.</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { findStats } from '@/services/stats-service'
export default {
  data: () => ({
    obj: {
      totalAnswers: 50,
      media: 90,
      totalQuestions: 30
    }
  }),
  created () {
    this.find()
  },
  methods: {
    async find () {
      try {
        let { data } = await findStats()
        this.obj = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
