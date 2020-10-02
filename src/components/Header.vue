<template lang="pug">
  header.header(
    v-if="!isDesktop"
  )
    .container
      .navbar
        .navbar-logo
          router-link.nav-logo(
            to="/"
          )
            img(
              src="/image/logo.svg"
              alt=""
            )
        .navbar-login(v-if="!isAuthorized")
          button.nav-login(@click="isLogin = !isLogin" v-bind:class="{active: isLogin }") Войти
          button.nav-registration(@click="setOpenPopupRegistration(true)") Регистрация
          .navbar-dropdown(v-if="isLogin")
            .navbar-dropdown-overlay(@click="isLogin = !isLogin")
            .navbar-dropdown-form
              form(action="#")
                label.ui-label ID или E-mail
                .ui-field
                  input(type="text").ui-input
                label.ui-label Пароль
                .ui-field
                  span.ui-visibility
                    <svg class="icon-invisible" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 469.44 469.44">
                      <path fill="currentColor" d="M231.147,160.373l67.2,67.2l0.32-3.52c0-35.307-28.693-64-64-64L231.147,160.373z"/>
                      <path fill="currentColor" d="M234.667,117.387c58.88,0,106.667,47.787,106.667,106.667c0,13.76-2.773,26.88-7.573,38.933l62.4,62.4c32.213-26.88,57.6-61.653,73.28-101.333c-37.013-93.653-128-160-234.773-160c-29.867,0-58.453,5.333-85.013,14.933l46.08,45.973C207.787,120.267,220.907,117.387,234.667,117.387z"/>
                      <path fill="currentColor" d="M21.333,59.253l48.64,48.64l9.707,9.707C44.48,145.12,16.64,181.707,0,224.053c36.907,93.653,128,160,234.667,160c33.067,0,64.64-6.4,93.547-18.027l9.067,9.067l62.187,62.293l27.2-27.093L48.533,32.053L21.333,59.253z M139.307,177.12l32.96,32.96c-0.96,4.587-1.6,9.173-1.6,13.973c0,35.307,28.693,64,64,64c4.8,0,9.387-0.64,13.867-1.6l32.96,32.96c-14.187,7.04-29.973,11.307-46.827,11.307C175.787,330.72,128,282.933,128,224.053C128,207.2,132.267,191.413,139.307,177.12z"/>
                    </svg>
                  input(type="password").ui-input
                label.ui-check
                  input(type="checkbox").ui-check__input
                  span.ui-check__checkbox
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.231515 6.78151C-0.109918 6.42012 -0.0672389 5.83287 0.316873 5.51665C0.658306 5.15527 1.21313 5.20044 1.51189 5.607L3.43245 7.95602L8.89537 0.773442C9.57823 -0.130027 10.4318 0.457228 9.74895 1.40587L4.20067 9.94365C4.15799 9.98883 4.11531 10.034 4.07263 10.0792C3.68852 10.4406 3.17637 10.3954 2.83494 9.98883L0.231515 6.78151Z" fill="currentColor"/>
                    </svg>
                  | Запомнить
                button.ui-btn.ui-btn--red.ui-btn--fullwidth(@click="isAuthorized = !isAuthorized") Войти
                p.ui-recovery
                  button.ui-btn.ui-btn--link(@click.prevent="setOpenPopupRecovery(true)") Забыли пароль?

        .navbar-profile(v-else)
          a(href="http://sduduexn.beget.tech/lk/profile.html").navbar-profile__btn
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path d="M13.242 0H1.758A1.76 1.76 0 0 0 0 1.758v2.344h1.172V1.758c0-.323.263-.586.586-.586h11.484c.323 0 .586.263.586.586v11.484a.587.587 0 0 1-.586.586H1.758a.587.587 0 0 1-.586-.586v-2.344H0v2.344C0 14.212.789 15 1.758 15h11.484A1.76 1.76 0 0 0 15 13.242V1.758A1.76 1.76 0 0 0 13.242 0z"></path><path d="M7.031 3.859l-.828.829 2.226 2.226H0v1.172h8.43l-2.227 2.226.828.83L10.672 7.5l-3.64-3.641z"></path></svg>
            | В профиль
          p.navbar-profile__balance 2 400 ₽
        //- .navbar-user(
        //-   v-else
        //- )
        //-   button.nav-balance
        //-     i.icon
        //-   .info-balance
        //-     .balance-hint Баланс
        //-     .balance-sum 100,00 ₽
        //-   a(href="http://sduduexn.beget.tech/lk/account.html").nav-cabinet
        //-     i.icon-user
  header.header(
    v-else
  )
    .container
      .navbar
        .navbar-logo
          router-link.nav-logo(
            to="/"
          )
            img(
              src="/image/logo.svg"
              alt=""
            )
        .navbar-mobile
          .nav-mobile-hint Приложение
          a.nav-mobile-android(
            href="#"
          )
            i.icon-android
          a.nav-mobile-ios(
            href="#"
          )
            i.icon-ios
        .navbar-access
          button.nav-access(
            @click="setOpenAlertAccess(true)"
          )
            i.icon-lock
            span Доступ к сайту
        .navbar-nav
          .nav-item
            router-link.nav-link(
              to="/"
            )
              span.text Главная
          .nav-item
            router-link.nav-link(
              to="/live/football"
            )
              i.icon-disc
              span.text Live
          .nav-item
            router-link.nav-link(
              to="/line/football"
            )
              span.text Линия
          .nav-item
            button.nav-link(
              to="/about"
            )
              span.text О INDEX
        .navbar-login(v-if="!isAuthorized")
          button.nav-login(@click="isLogin = !isLogin" v-bind:class="{active: isLogin }") Войти
          button.nav-registration(@click="setOpenPopupRegistration(true)") Регистрация
          .navbar-dropdown(v-if="isLogin")
            .navbar-dropdown-overlay(@click="isLogin = !isLogin")
            .navbar-dropdown-form
              form(action="#")
                label.ui-label ID или E-mail
                .ui-field
                  input(type="text").ui-input
                label.ui-label Пароль
                .ui-field
                  span.ui-visibility
                    <svg class="icon-invisible" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 469.44 469.44">
                      <path fill="currentColor" d="M231.147,160.373l67.2,67.2l0.32-3.52c0-35.307-28.693-64-64-64L231.147,160.373z"/>
                      <path fill="currentColor" d="M234.667,117.387c58.88,0,106.667,47.787,106.667,106.667c0,13.76-2.773,26.88-7.573,38.933l62.4,62.4c32.213-26.88,57.6-61.653,73.28-101.333c-37.013-93.653-128-160-234.773-160c-29.867,0-58.453,5.333-85.013,14.933l46.08,45.973C207.787,120.267,220.907,117.387,234.667,117.387z"/>
                      <path fill="currentColor" d="M21.333,59.253l48.64,48.64l9.707,9.707C44.48,145.12,16.64,181.707,0,224.053c36.907,93.653,128,160,234.667,160c33.067,0,64.64-6.4,93.547-18.027l9.067,9.067l62.187,62.293l27.2-27.093L48.533,32.053L21.333,59.253z M139.307,177.12l32.96,32.96c-0.96,4.587-1.6,9.173-1.6,13.973c0,35.307,28.693,64,64,64c4.8,0,9.387-0.64,13.867-1.6l32.96,32.96c-14.187,7.04-29.973,11.307-46.827,11.307C175.787,330.72,128,282.933,128,224.053C128,207.2,132.267,191.413,139.307,177.12z"/>
                    </svg>
                  input(type="password").ui-input
                label.ui-check
                  input(type="checkbox").ui-check__input
                  span.ui-check__checkbox
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.231515 6.78151C-0.109918 6.42012 -0.0672389 5.83287 0.316873 5.51665C0.658306 5.15527 1.21313 5.20044 1.51189 5.607L3.43245 7.95602L8.89537 0.773442C9.57823 -0.130027 10.4318 0.457228 9.74895 1.40587L4.20067 9.94365C4.15799 9.98883 4.11531 10.034 4.07263 10.0792C3.68852 10.4406 3.17637 10.3954 2.83494 9.98883L0.231515 6.78151Z" fill="currentColor"/>
                    </svg>
                  | Запомнить
                button.ui-btn.ui-btn--red.ui-btn--fullwidth(@click="isAuthorized = !isAuthorized") Войти
                p.ui-recovery
                  button.ui-btn.ui-btn--link(@click.prevent="setOpenPopupRecovery(true)") Забыли пароль?

        .navbar-profile(v-else)
          a(href="http://sduduexn.beget.tech/lk/profile.html").navbar-profile__btn
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path d="M13.242 0H1.758A1.76 1.76 0 0 0 0 1.758v2.344h1.172V1.758c0-.323.263-.586.586-.586h11.484c.323 0 .586.263.586.586v11.484a.587.587 0 0 1-.586.586H1.758a.587.587 0 0 1-.586-.586v-2.344H0v2.344C0 14.212.789 15 1.758 15h11.484A1.76 1.76 0 0 0 15 13.242V1.758A1.76 1.76 0 0 0 13.242 0z"></path><path d="M7.031 3.859l-.828.829 2.226 2.226H0v1.172h8.43l-2.227 2.226.828.83L10.672 7.5l-3.64-3.641z"></path></svg>
            | В профиль
          p.navbar-profile__balance 2 400 ₽
        //- .navbar-user(
        //-   v-else
        //- )
        //-   button.nav-balance
        //-     i.icon
        //-   .info-balance
        //-     .balance-hint Баланс
        //-     .balance-sum 100,00 ₽
        //-   a(href="http://sduduexn.beget.tech/lk/profile.html").nav-cabinet
        //-     i.icon-user
        //-   //- button.nav-cabinet
        //-     i.icon-user
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data: () => ({
      isAuthorized: false,
      isLogin: false
    }),
    computed: {
      ...mapGetters([
        'isDesktop'
      ])
    },
    methods: {
      ...mapMutations([
        'setOpenAlertAccess',
        'setOpenPopupRegistration',
        'setOpenPopupRecovery'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  
  .navbar-profile {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
  }
  
  .navbar-profile__btn {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    font: 700 12px/16px 'Gilroy',Helvetica,Arial,sans-serif;
    padding: 4px 10px;
    border: 1px solid currentColor;
    color: rgba(255,255,255,0.5);
    background: none;
    border-radius: 3px;
    text-decoration: none;
    transition: 0.25s;
    svg {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      top: -1px;
      margin: 0 10px 0 0;
      width: 13px;
      height: 13px;
      fill: currentColor;
    }
    &:hover {
      color: rgba(255,255,255,1);
    }
  }

  .navbar-profile__balance {
    margin: 0 0 0 20px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    @media (max-width: 575px) {
      // display: none;
      font-size: 16px;
      margin: 0 0 0 15px;
    }
  }


  // -----

  .nav-login {
    position: relative;
    z-index: 120;
    &.active {
      background: linear-gradient(80.52deg, #EE2B31 6.44%, #9E1215 87.71%) !important;
    }
  }

  // -----

  .navbar-login {
    position: relative;
    z-index: 110;
  }

  .navbar-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 100;
    margin: -8px 0 0;
    @media (min-width: 768px) {
      margin: -20px 0 0;
    }
    @media (min-width: 1280px) {
      margin: 2px 0 0;
      right: -4px;
    }
    @media (min-width: 1920px) {
      right: 0;
    }
  }

  .navbar-dropdown-overlay {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000C12,0.6);
    z-index: -1;
  }

  .navbar-dropdown-form {
    position: relative;
    z-index: 1;
    border-radius: 5px;
    background: #fff;
    width: 230px;
    padding: 15px;
    color: #182045;
    @media (min-width: 1920px) {
      padding: 32px;
      width: 360px;
      border-radius: 10px;
    }
  }



  // -----

  .header {
    position: relative;
    height: 48px;
    user-select: none;
    .container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background-color: $bg;
      border-top: 1px solid transparent;
      border-bottom: 1px solid $swamp;

      top: env(safe-area-inset-top,0);

    }
    .navbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .navbar-logo {
      padding: 15px 10px;
      .nav-logo img {
        display: block;
        max-width: 100%;
        height: 15px;
      }
    }
    .navbar-login {
      padding-top: 11px;
      padding-bottom: 11px;
      margin-left: auto;
      line-height: 1;
      .nav-login,
      .nav-registration {
        min-width: 72px;
        padding: 0 8px;
        font-weight: bold;
        border-radius: 6px;
        margin-left: 6px;
        font-size: 9px;
        line-height: 24px;
        &:hover {
          background: $redGradient;
        }
      }
      .nav-login {
        background: $swamp;
      }
      .nav-registration {
        background: $greenGradient;
      }
    }
    .navbar-user {
      display: flex;
      padding-top: 8px;
      padding-bottom: 8px;
      margin-left: auto;
      .nav-balance {
        align-self: flex-end;
        margin-left: 10px;
        background: $greenGradient;
        color: $white;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        &:hover {
          background: $redGradient;
        }
        .icon {
          position: relative;
          width: 8px;
          height: 8px;
          &::before {
            position: absolute;
            top: calc(50% - 1px);
            left: calc(50% - 3px);
            content: '';
            width: 6px;
            height: 2px;
            background-color: $white;
          }
          &::after {
            position: absolute;
            top: calc(50% - 3px);
            left: calc(50% - 1px);
            content: '';
            width: 2px;
            height: 6px;
            background-color: $white;
          }
        }
      }
      .info-balance {
        margin-left: 10px;
        text-align: right;
        .balance-hint {
          font-weight: 500;
          font-size: 8px;
          line-height: 14px;
          color: $raven;
        }
        .balance-sum {
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          color: $white;
        }
      }
      .nav-cabinet {
        margin-left: 10px;
        width: 30px;
        height: 30px;
        background: $outerSpace;
        border-radius: 5px;
        color: $raven;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (min-width: 768px) {
    .header {
      height: 104px;
      .navbar-logo {
        padding: 31px 5px 39px 5px;
        .nav-logo img {
          height: 32px;
        }
      }
      .navbar-login {
        padding-top: 27px;
        padding-bottom: 27px;
        margin-left: auto;
        .nav-login,
        .nav-registration {
          min-width: 170px;
          padding: 7px 14px;
          border-radius: 12px;
          margin-left: 16px;
          font-size: 14px;
          line-height: 34px;
        }
      }
      .navbar-user {
        padding-top: 27px;
        padding-bottom: 27px;
        .nav-balance {
          margin-left: 16px;
          width: 28px;
          height: 28px;
          .icon {
            width: 12px;
            height: 12px;
            &::before {
              left: calc(50% - 5px);
              width: 10px;
            }
            &::after {
              top: calc(50% - 5px);
              height: 10px;
            }
          }
        }
        .info-balance {
          margin-left: 16px;
          .balance-hint {
            font-size: 14px;
            line-height: 20px;
          }
          .balance-sum {
            font-size: 18px;
            line-height: 28px;
          }
        }
        .nav-cabinet {
          margin-left: 16px;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          font-size: 20px;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .header {
      height: auto;
      .container {
        position: static;
        top: auto;
        left: auto;
        right: auto;
        z-index: auto;
      }
      .navbar-logo {
        padding: 0;
        .nav-logo img {
          height: 16px;
        }
      }
      .navbar-mobile {
        display: flex;
        align-items: center;
        padding: 0 40px;
        .nav-mobile-hint {
          margin-right: 12px;
          font-weight: 500;
          font-size: 12px;
          line-height: 24px;
          color: $shuttleGray;
        }
        .nav-mobile-android,
        .nav-mobile-ios {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          font-weight: 500;
          background-color: $swamp;
          border-radius: 50%;
          text-decoration: none;
          &:hover {
            background: $redGradient;
          }
        }
        .nav-mobile-android {
          color: $emirald;
          font-size: 10px;
          margin-right: 3px;
        }
        .nav-mobile-ios {
          color: $white;
          font-size: 8px;
        }
      }
      .navbar-access {
        .nav-access {
          display: flex;
          align-items: center;
          padding: 5px 14px;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          background: rgba($white, .1);
          border: 1px solid transparent;
          border-radius: 3px;
          &:hover {
            background: $redGradient;
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: inherit;
            background: $bg;
          }
          .icon-lock {
            margin-right: 8px;
            font-size: 10px;
            color: $azureRadiance;
          }
        }
      }
      .navbar-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 70px;
        padding-left: 70px;
        border-top: none;
        .nav-item {
          padding-left: 18px;
          padding-right: 18px;
        }
        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 13px 0;
          font-weight: 500;
          font-size: 12px;
          line-height: 24px;
          color: $white;
          text-decoration: none;
          &:hover,
          &.exact {
            &::before {
              content: '';
              position: absolute;
              top: auto;
              right: 0;
              bottom: -2px;
              left: 0;
              height: 3px;
              border-radius: 3px;
              background: $redGradient;
            }
          }
          .icon-disc {
            margin-right: 4px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: $redGradient;
          }
        }
      }
      .navbar-login {
        padding: 0;
        .nav-login,
        .nav-registration {
          min-width: 80px;
          padding: 8px 27px;
          border-radius: 3px;
          margin-left: 6px;
          font-size: 11px;
          line-height: 16px;
        }
      }
      .navbar-user {
        padding: 0;
        .nav-balance {
          margin-left: 10px;
          width: 16px;
          height: 16px;
          .icon {
            width: 8px;
            height: 8px;
            &::before {
              left: calc(50% - 3px);
              width: 6px;
            }
            &::after {
              top: calc(50% - 3px);
              height: 6px;
            }
          }
        }
        .info-balance {
          margin-left: 10px;
          .balance-hint {
            font-size: 8px;
            line-height: 14px;
          }
          .balance-sum {
            font-size: 12px;
            line-height: 16px;
          }
        }
        .nav-cabinet {
          margin-left: 10px;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          font-size: 13px;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .header {
      .navbar-logo {
        .nav-logo img {
          height: 24px;
        }
      }
      .navbar-mobile {
        padding: 0 50px;
        .nav-mobile-hint {
          margin-left: 10px;
          margin-right: 16px;
          font-size: 15px;
        }
        .nav-mobile-android,
        .nav-mobile-ios {
          width: 48px;
          height: 48px;
        }
        .nav-mobile-android {
          font-size: 16px;
          margin-right: 4px;
        }
        .nav-mobile-ios {
          font-size: 14px;
        }
      }
      .navbar-access {
        .nav-access {
          padding: 7px 22px;
          font-size: 15px;
          line-height: 24px;
          .icon-lock {
            margin-right: 10px;
            font-size: 14px;
          }
        }
      }
      .navbar-nav {
        padding-right: 112px;
        padding-left: 112px;
        .nav-item {
          padding-left: 29px;
          padding-right: 29px;
        }
        .nav-link {
          padding: 27px 6px;
          font-size: 15px;
          .icon-disc {
            margin-right: 10px;
            width: 8px;
            height: 8px;
          }
        }
      }
      .navbar-login {
        .nav-login,
        .nav-registration {
          min-width: 120px;
          padding: 12px 38px;
          border-radius: 5px;
          margin-left: 9px;
          font-size: 14px;
          line-height: 24px;
        }
      }
      .navbar-user {
        .nav-balance {
          margin-left: 16px;
          width: 28px;
          height: 28px;
          .icon {
            width: 12px;
            height: 12px;
            &::before {
              left: calc(50% - 5px);
              width: 10px;
            }
            &::after {
              top: calc(50% - 5px);
              height: 10px;
            }
          }
        }
        .info-balance {
          margin-left: 16px;
          .balance-hint {
            font-size: 14px;
            line-height: 20px;
          }
          .balance-sum {
            font-size: 18px;
            line-height: 28px;
          }
        }
        .nav-cabinet {
          margin-left: 16px;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          font-size: 20px;
        }
      }
    }
  }
</style>