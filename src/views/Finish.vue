<template>
  <v-container fill-height>
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        lg6
        sm10
        xs12
      >
        <v-card
          dark
          class="py-5 mb-3 round-15 text-xs-center"
        >
          <v-layout
            align-center
            justify-center
          >
            <v-icon
              color="#AB47BC"
              class="display-1"
            >mdi-test-tube</v-icon><span class="title">Obrigado por responder!</span>
          </v-layout>
        </v-card>
        <v-card class="text-xs-center py-3 round-15">
          <v-card-text>
            <p class="subheading">Você é </p>
            <v-progress-circular
              :value="answer.total"
              :size="100"
              color="#AB47BC"
              class="mb-3"
            >
              <span class="subheading">{{answer.total}}%</span>
            </v-progress-circular>
            <p class="subheading">ético no meio computacional!</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { findOne } from '@/services/answers-service'
export default {
  data: () => ({
    answer: {}
  }),
  created () {
    this.find()
  },
  methods: {
    async find () {
      let { data } = await findOne(this.$route.query.id)
      this.answer = data
    }
  }
}
</script>

<style>
</style>
