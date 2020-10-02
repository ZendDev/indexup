<template lang="pug">
  aside.sidebar-right
    v-cart
    .navbar-banner
      a.nav-banner(
        href="/"
      )
        img.img-banner(
          src="/image/banner-1.png"
          alt=""
        )
    slider-matches(
      :matches="matches"
    )
    .navbar-banner
      a.nav-banner(
        href="/"
      )
        img.img-banner(
          src="/image/banner-2.png"
          alt=""
        )
</template>

<script>
  import { mapState } from 'vuex'
  import Cart from '@/components/Cart'
  import SliderMatches from '@/components/SliderMatches'

  export default {
    components: {
      'v-cart': Cart,
      SliderMatches
    },
    computed: {
      ...mapState([
        'matches'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .sidebar-right {
    flex: 0 0 100%;
    max-width: 100%;
    user-select: none;
    .navbar-banner {
      .nav-banner {
        display: block;
        margin-bottom: 8px;
      }
      .img-banner {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
  }

  @media (min-width: 1280px) {
    .sidebar-right {
      flex: 0 0 235px;
      max-width: 235px;
    }
  }

  @media (min-width: 1920px) {
    .sidebar-right {
      flex: 0 0 359px;
      max-width: 359px;
    }
  }
</style>
