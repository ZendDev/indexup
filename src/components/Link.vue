<template lang="pug">
  a(
    :href="to"
    :class="{ active: isActive }"
    @click.prevent="navigator"
  )
    slot
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    props: {
      to: String
    },
    computed: {
      isActive() {
        return this.$route.path === this.to
      }
    },
    methods: {
      ...mapMutations([
        'setOpenSidebarLeft',
        'setOpenSidebarRight'
      ]),
      navigator() {
        if (!this.isActive) {
          this.$router.push(this.to)
        }
        this.setOpenSidebarLeft(false)
        this.setOpenSidebarRight(false)
      }
    }
  }
</script>