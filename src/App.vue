<template lang="pug">
  #app
    v-header
    .container
      v-sidebar-left(
        v-if="isDesktop"
      )
      main.content
        router-view
      v-sidebar-right(
        v-if="isDesktop"
      )
    v-footer
    alert(
      :value="openAlertAccess"
      @input="setOpenAlertAccess"
    )
    PopupRegistration(
      :value="openPopupRegistration"
      @input="setOpenPopupRegistration"
    )

    PopupRecovery(
      :value="openPopupRecovery"
      @input="setOpenPopupRecovery"
    )

    PopupConfirmPhone(
      :value="openPopupConfirmPhone"
      @input="setOpenPopupConfirmPhone"
    )
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  import Header from '@/components/Header'
  import SidebarLeft from '@/components/SidebarLeft'
  import SidebarRight from '@/components/SidebarRight'
  import Footer from '@/components/Footer'

  export default {
    components: {
      'v-header': Header,
      'v-sidebar-left': SidebarLeft,
      'v-sidebar-right': SidebarRight,
      'v-footer': Footer
    },
    data: () => ({
      showSidebarLeft: true
    }),
    computed: {
      ...mapState([
        'openAlertAccess',
        'openPopupRegistration',
        'openPopupRecovery',
        'openPopupConfirmPhone'
      ]),
      ...mapGetters([
        'isDesktop'
      ]),
    },
    created() {
      this.getWindowWidth()
    },
    mounted() {
      window.addEventListener('resize', this.getWindowWidth)
    },
    methods: {
      ...mapMutations([
        'setOpenAlertAccess',
        'setOpenPopupRegistration',
        'setOpenPopupRecovery',
        'setOpenPopupConfirmPhone'
      ]),
      ...mapActions([
        'getWindowWidth'
      ])
    }
  }
</script>

<style lang="scss" src="@/assets/scss/common.scss"></style>
<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';


  :root {
      --safe-area-inset-top: env(safe-area-inset-top);
      --safe-area-inset-right: env(safe-area-inset-right);
      --safe-area-inset-bottom: env(safe-area-inset-bottom);
      --safe-area-inset-left: env(safe-area-inset-left);
  }

  #app {
    position: relative;
    min-height: 100%;
    overflow: hidden;
    width: 100%;
    min-width: 320px;
    // display: flex;
    // flex-direction: column;
    // padding-bottom: 0;
    // padding-bottom: env(safe-area-inset-bottom,0);
    .container {
      // display: block;
      display: flex;
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
      flex: 1 0 auto;
      position: relative;
      overflow: hidden;

      padding-bottom: calc(60px + env(safe-area-inset-bottom, 0));
    }
    .content {
      position: relative;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 768px) {
    #app {
      .container {
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
  }
  @media (min-width: 1280px) {
    #app {
      .container {
        padding-top: 24px;
        padding-bottom: 24px;
      }
      .content {
        flex-grow: 1;
        flex-basis: 0;
        padding-right: 15px;
        padding-left: 15px;
      }
    }
  }




  // Edits

  @media (min-width: 1280px) and (max-width: 1400px) {
    
    #app {
      .container {
        padding-left: 16px;
        padding-right: 16px;
      }

      .sidebar-left,
      .sidebar-right {
        flex: 0 0 230px;
        max-width: 230px;
      }

    }

  }

  

</style>
