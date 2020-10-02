<template lang="pug">
  footer.footer(
    v-if="!isDesktop"
  )
    .container
      .navbar
        .navbar-nav
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Партнерская программа
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Правила
        .navbar-nav
          .nav-item
            button.nav-link(
              @click="setOpenAlertAccess(true)"
            )
              i.icon-lock
              span.text Доступ к сайту
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Бонусы и акции
        .navbar-social
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-facebook
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-vk
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-twitter
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-instagram
        .navbar-mobile
          a.nav-mobile-android(
            href="#"
          )
            i.icon-android
          a.nav-mobile-ios(
            href="#"
          )
            i.icon-ios
        .navbar-copy © 2019 Index. Все права защищены.
    .navbar-fixed
      .nav-item
        router-link.nav-link(
          to="/"
        )
          i.icon-page
          span.text Главная
      .nav-item
        router-link.nav-link(
          to="/live/football"
        )
          i.icon-tv
          span.text Live
      .nav-item
        router-link.nav-coupon(
          to="/cart"
        )
          i.icon-coupon
      .nav-item
        router-link.nav-link(
          to="/line"
        )
          i.icon-list
          span.text Линия
      .nav-item
        a(href="http://sduduexn.beget.tech/lk/account.html").nav-link
          i.icon-user
          span.text Аккаунт
  footer.footer(
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
          .navbar-mobile-hint Приложение
          a.nav-mobile-android(
            href="#"
          )
            i.icon-android
          a.nav-mobile-ios(
            href="#"
          )
            i.icon-ios
        .navbar-nav
          .navbar-hint Помощь
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Ваша первая ставка
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Депозиты
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Выплаты
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text FAQ
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Служба поддержки
        .navbar-nav
          .navbar-hint Сервисы
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Ставки LIVE
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Товарный знак
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Бонусы и акции
        .navbar-nav
          .navbar-hint Index
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text О компании
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Правила и Условия
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Партнерская программа
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Политика конфиденциальности
        .navbar-nav
          .navbar-hint Личный кабинет
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Вход
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Регистрация
          .nav-item
            router-link.nav-link(
              to="#"
            )
              span.text Смена пароля
        .navbar-social
          .navbar-hint Социальные сети
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-twitter
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-instagram
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-facebook
          .nav-item
            a.nav-link(
              href="#"
            )
              i.icon-vk
      .navbar-copy
        | © 2019 Index. Все права защищены.
        router-link.nav-link(
          to="#"
        ) Уведомление о рисках
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data: () => ({
      isLogin: false
    }),
    computed: {
      ...mapGetters([
        'isDesktop'
      ])
    },
    methods: {
      ...mapMutations([
        'setOpenAlertAccess'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';


  .footer {
    position: relative;
    padding-bottom: 53px;

    background-color: $bg;
    user-select: none;
    flex: 0 0 auto;
    margin: auto 0 0;
    .navbar {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
    }
    .navbar-nav {
      padding: 8px 22px 8px 0;
      &:nth-child(odd) {
        flex: 0 0 50%;
        max-width: 50%;
      }
      &:nth-child(even) {
        margin-left: auto;
      }
      .nav-link {
        font-weight: 500;
        font-size: 10px;
        line-height: 20px;
        color: $white;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        &:hover {
          .text {
            color: $crimson;
            border-bottom: 1px solid $crimson;
          }
        }
      }
      .icon-lock {
        margin-right: 9px;
        color: $azureRadiance;
      }
    }
    .navbar-social {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 50%;
      max-width: 50%;
      padding: 4px 0;
      .nav-item {
        margin-right: 4px;
        &:last-child {
          margin-right: 0;
        }
      }
      .nav-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        font-size: 10px;
        color: $casper;
        background: $swamp;
        border-radius: 50%;
        text-decoration: none;
        &:hover {
          color: $white;
          background: $redGradient;
        }
      }
    }
    .navbar-mobile {
      display: flex;
      flex: 0 0 50%;
      max-width: 50%;
      align-items: center;
      justify-content: flex-end;
      padding: 4px 6px;
      margin-left: auto;
      .nav-mobile-android,
      .nav-mobile-ios {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
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
        margin-right: 4px;
        font-size: 10px;
      }
      .nav-mobile-ios {
        color: $white;
        font-size: 8px;
      }
    }
    .navbar-copy {
      padding-top: 5px;
      padding-bottom: 5px;
      font-size: 8px;
      line-height: 24px;
      color: $shuttleGray;
    }
    .navbar-fixed {

      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      min-height: 53px;
      z-index: 500;
      border-top: 1px solid $swamp;
      background-color: $bg;

      bottom: 0;

      padding: 0 10px;
      padding-bottom: env(safe-area-inset-bottom,0);

      .nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 53px;
      }
      .nav-link {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 38px;
        padding: 10px 4px 2px 4px;
        text-align: center;
        font-size: 10px;
        line-height: 20px;
        color: $raven;
        text-decoration: none;
        &.exact {
          color: $white;
          &::before {
            content: '';
            position: absolute;
            top: -3px;
            right: 0;
            left: 0;
            height: 5px;
            border-radius: 5px;
            background: $redGradient;
          }
        }
      }
      .nav-coupon {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        background: $redGradient;
        box-shadow: 0px 0px 30px rgba($crimson, .8);
        border-radius: 5px;
        text-decoration: none;
        &.active {
          background: $white;
          &::before {
            content: '';
            position: absolute;
            top: -10px;
            right: 0;
            left: 0;
            height: 5px;
            border-radius: 5px;
            background: $redGradient;
          }
          .icon-coupon {
            color: $crimson;
          }
        }
      }
      .icon-page,
      .icon-tv,
      .icon-coupon,
      .icon-list,
      .icon-user {
        font-size: 20px;
        color: $white;
      }
    }
  }

  @media (min-width: 1280px) {
    .footer {
      padding-bottom: 0;
      .navbar {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 305px;
        border-top: 1px solid $swamp;
      }
      .navbar-logo {
        position: absolute;
        top: 36px;
        left: 0;
        .nav-logo img {
          display: block;
          min-width: 100%;
          height: 16px;
        }
      }
      .navbar-mobile {
        position: absolute;
        top: 74px;
        left: 0;
        padding: 0;
        .navbar-mobile-hint {
          display: block;
          margin-right: 10px;
          font-weight: 500;
          font-size: 10px;
          line-height: 24px;
          color: $shuttleGray;
        }
        .nav-mobile-android,
        .nav-mobile-ios {
          width: 32px;
          height: 32px;
        }
      }
      .navbar-nav {
        flex: 0 0 auto;
        max-width: none;
        padding: 15px 0;
        margin-right: 50px;
        &:nth-child(odd) {
          flex: 0 0 auto;
          max-width: none;
        }
        &:nth-child(even) {
          margin-left: 0;
        }
        .navbar-hint {
          margin-top: 5px;
          margin-bottom: 5px;
          font-weight: bold;
          font-size: 14px;
          line-height: 24px;
          color: $white;
        }
        .nav-item {
          font-size: 12px;
          line-height: 22px;
        }
        .nav-link {
          font-size: 12px;
          color: $raven;
        }
      }
      .navbar-social {
        flex: 0 0 138px;
        max-width: 138px;
        margin-left: auto;
        padding: 15px 0;
        .navbar-hint {
          display: flex;
          width: 100%;
          margin-top: 5px;
          margin-bottom: 5px;
          font-weight: bold;
          font-size: 14px;
          line-height: 24px;
          color: $white;
        }
        .nav-item {
          margin-top: 3px;
          margin-right: 3px;
        }
        .nav-link {
          width: 32px;
          height: 32px;
          font-size: 12px;
        }
      }
      .navbar-copy {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 9px;
        line-height: 12px;
        padding: 15px 0;
        border-top: 1px solid $swamp;
        .nav-link {
          font-size: 10px;
          color: $white;
          text-decoration: none;
          border-bottom: 1px solid $white;
          &:hover {
            color: $crimson;
            border-bottom: 1px solid $crimson;
          }
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .footer {
      .navbar {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 456px;
      }
      .navbar-logo {
        position: absolute;
        top: 54px;
        left: 0;
        .nav-logo img {
          height: 24px;
        }
      }
      .navbar-mobile {
        top: 112px;
        .navbar-mobile-hint {
          margin-right: 16px;
          font-size: 15px;
        }
        .nav-mobile-android,
        .nav-mobile-ios {
          width: 48px;
          height: 48px;
        }
        .nav-mobile-android {
          margin-right: 3px;
          font-size: 16px;
        }
        .nav-mobile-ios {
          margin-right: 0;
          font-size: 14px;
        }
      }
      .navbar-nav {
        padding: 0;
        margin-right: 120px;
        margin-bottom: 20px;
        .navbar-hint {
          margin-top: 25px;
          margin-bottom: 25px;
          font-size: 18px;
        }
        .nav-item {
          margin-bottom: 10px;
          font-weight: 500;
          font-size: 14px;
        }
        .nav-link {
          font-size: 14px;
        }
      }
      .navbar-social {
        flex: 0 0 208px;
        max-width: 208px;
        padding: 0;
        .navbar-hint {
          margin-top: 25px;
          margin-bottom: 25px;
          font-size: 18px;
        }
        .nav-item {
          float: left;
          margin-top: 0;
          margin-right: 4px;
          &:last-child {
            margin-right: 0;
          }
        }
        .nav-link {
          width: 48px;
          height: 48px;
          font-size: 16px;
        }
      }
      .navbar-copy {
        padding: 22px 0;
        font-size: 14px;
        line-height: 18px;
        .nav-link {
          font-size: 15px;
          line-height: 18px;
        }
      }
    }
  }
</style>
