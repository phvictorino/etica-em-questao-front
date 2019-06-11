<template>
  <v-container fluid>
    <v-layout
      align-center
      justify-center
    >
      <v-flex lg6 sm10>
        <v-card dark class="round-15 mb-3 elevation-10">
          <v-card-title>
            <v-icon color="#AB47BC" class="display-1">mdi-test-tube</v-icon><span class="title">Instruções</span>
          </v-card-title>
          <v-card-text class="subheading">
            <p>- São 20 questões aleatórias;</p>
            <p>- Clique em 1 alternativa por questão;</p>
            <p>- Seja sincero;</p>
            <p>- Ao final, clique no botão ENVIAR localizado no final da página.</p>
          </v-card-text>
        </v-card>
        <v-card
          v-for="(q, i) in questions"
          :key="q._id"
          class="mb-3 round-15"
        >
          <v-card-title>Questão {{(i+1) + ' - ' + q.question}}</v-card-title>
          <v-card-text>
            <v-radio-group v-model="answers[i]">
              <v-radio
                v-for="o in q.options"
                :key="o._id"
                :label="o.description"
                :value="o.value"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
        <v-layout justify-end>
          <v-btn round large dark color="#AB47BC" @click="submit">Enviar</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { findQuestions } from '@/services/questions-service'
import { create } from '@/services/answers-service'
export default {
  data: () => ({
    questions: [],
    answers: []
  }),
  methods: {
    async find () {
      try {
        let { data } = await findQuestions()
        this.questions = data
      } catch (error) {
        console.log(error)
      }
    },
    async submit () {
      try {
        let sum = 0
        this.answers.forEach(a => (sum = a + sum))
        let response = await create({ total: sum })
        this.$router.push({ path: '/finish', query: { id: response.data._id } })
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.find()
  }
}
</script>

<style>
</style>
