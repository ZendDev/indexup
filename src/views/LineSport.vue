<template lang="pug">
  .line
    p.p Мы за доли секунд находим самые высокие коэффициенты и агрегируем их в одном удобном интерфейсе
    slider
    matches(
      v-if="currSport"
      :title="currSport.title"
      :name="currSport.name"
      :color="currSport.color"
      :matches="matches"
    )
</template>

<script>
  import { mapState } from 'vuex'
  import Matches from '@/components/Matches'

  export default {
    props: ['name'],
    components: {
      Matches
    },
    data: () => ({
      currSport: null
    }),
    computed: {
      ...mapState([
        'sports',
        'matches'
      ])
    },
    created() {
      this.currSport = this.sports.find(item => this.name == item.name)
      if (!this.currSport) this.$router.replace('/')
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_variables.scss';

  .p {
    font-weight: 300;
    font-size: 9px;
    line-height: 15px;
    color: $casper;
    text-align: center;
    margin-top: 0;
    margin-bottom: 5px;
  }
  @media (min-width: 768px) {
    .p {
      font-size: 12px;
      line-height: 19px;
      margin-bottom: 12px;
    }
  }
  @media (min-width: 1280px) {
    .p {
      margin-bottom: 24px;
    }
  }
  @media (min-width: 1920px) {
    .p {
      font-size: 16px;
      line-height: 28px;
    }
  }
</style>