<template lang="pug">
  .cart
    v-cart
</template>

<script>
  import {mapGetters} from 'vuex'
  import Cart from '@/components/Cart'

  export default {
    components: {
      'v-cart': Cart
    },
    computed: {
      ...mapGetters([
        'isDesktop'
      ])
    },
    watch: {
      isDesktop(newValue, oldValue) {
        if (this.isDesktop) this.$router.push('/')
      }
    },
    mounted() {
      if (this.isDesktop) this.$router.replace('/404')
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .cart {
    flex: 0 0 100%;
    max-width: 100%;
    user-select: none;
    .slider {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 5px;
    }
  }
</style>
