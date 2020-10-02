<template lang="pug">
  .cart-wrap
    .title Купон
    .cart
      .cart-head
        .icon-file
        .text Новое пари
      .cart-body
        .success(
          v-if="isCartSuccess"
        )
          .icon
          .text Ставка успешно принята
        template(
          v-else
        )
          .row(
            v-if="!cart.length"
          )
            .col.col-left
              button.button-radio(
                :class="{ active: isSwitch('express') }"
                @click="setSwitch('express')"
              )
                .text Экспресс
            .col.col-right
              button.button-radio(
                :class="{ active: isSwitch('ordinary') }"
                @click="setSwitch('ordinary')"
              )
                .text Ординар
          .cart-items(
            v-else
          )
            .cart-h
              .text Событие
              .text Исход
              .text Коэф.
            .cart-b
              .cart-item(
                v-for="n in cart.length"
              )
                i.icon-close
                i.icon.icon-football
                .teams
                  .text Челси
                  .text Арсенал
                .bet
                  .text Победа
                .rate
                  | 9,7↑
                  span Мы нашли
          .row
            .col-left
              .text
                | Тип ставки: 
                span Экспресс
            .col-right
              .text
                | Коэффициент: 
                span 0,00
          .row
            .col-left
              .text
                | Сумма: 
                input.input(
                  type="text"
                  placeholder="0"
                )
            .col-right
              .text
                | Возможный выигрыш: 
                span 0,00
          button.button-makebet(
            :disabled="!cart.length"
            @click="successCart"
          ) Сделать ставку
          .text-info(
            v-if="cart.length"
          ) Максимальная сумма: 3 498 р.
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data: () => ({
      switch: 'express',
      isCartSuccess: false,
      isOpenCart: false,
    }),
    computed: {
      ...mapState([
        'cart'
      ])
    },
    methods: {
      ...mapMutations([
        'clearCart'
      ]),
      isSwitch(name) {
        return this.switch == name
      },
      setSwitch(name) {
        this.switch = name
      },
      successCart() {
        this.isCartSuccess = !this.isCartSuccess
        this.clearCart()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .cart-wrap {
    .title {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin: 6px 6px 12px;
      color: $white;
    }
    .cart {
      overflow: hidden;
      border-radius: 10px;
      margin-bottom: 8px;
      .cart-head {
        display: flex;
        align-items: center;
        padding: 5px 7px;
        background-color: $swamp;
        .icon-file {
          font-size: 14px;
          margin-right: 10px;
        }
        .text {
          font-weight: 600;
          font-size: 12px;
          line-height: 22px;
        }
      }
      .cart-body {
        padding: 6px;
        color: $text;
        background-color: $white;
        .cart-items {
          position: relative;
          margin: -6px -10px 0;
          padding: 40px 10px 0;
          .cart-h {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px 15px;
            width: 100%;
            height: 32px;
            color: $white;
            background-color: $limedSpruce;
            .text {
              font-weight: 600;
              font-size: 12px;
              line-height: 14px;
              &:nth-child(1) {
                padding-left: 28px;
                width: calc(100% - 142px);
              }
              &:nth-child(2) {
                width: 66px;
                text-align: center;
                margin-right: 5px;
              }
              &:nth-child(3) {
                width: 76px;
                text-align: center;
              }
            }
          }
        }
        .cart-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          padding: 4px;
          height: 48px;
          background-color: $blackSqueeze;
          border-radius: 5px;
          .icon-close {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 8px;
            margin-right: 4px;
            color: $mystic;
            cursor: pointer;
            &:hover {
              color: $tabasco;
            }
          }
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
            font-size: 10px;
            margin-right: 8px;
            color: $tabasco;
            border: 1px solid $mystic;
            border-radius: 5px;
          }
          .teams {
            flex: 1 0 0;
            min-width: 0;
            max-width: 100%;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            .text {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .bet {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 5px;
            padding: 5px;
            width: 66px;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            background-color: $mystic;
            border-radius: 5px;
            height: 40px;
            .text {
              overflow: hidden;
              max-height: 28px;
            }
          }
          .rate {
            position: relative;
            padding: 5px;
            width: 76px;
            height: 40px;
            background-color: $tabasco;
            font-size: 16px;
            line-height: 1;
            color: $white;
            text-align: center;
            border-radius: 5px;
            span {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              background-color: $woodBark;
              font-size: 10px;
              line-height: 18px;
              border-radius: 5px;
            }
          }
        }
        .text-info {
          margin-top: 8px;
          font-weight: 600;
          font-size: 10px;
          line-height: 14px;
          color: $scarlet;
          text-align: center;
        }
        .row {
          display: flex;
          align-items: center;
          border-bottom: 1px solid $alabaster;
          &:last-child {
            border-bottom: none;
          }
          .col,
          .col-left,
          .col-right {
            padding: 2px 4px;
            .input {
              padding: 6px;
              width: 68px;
              font-weight: 600;
              font-size: 12px;
              line-height: 16px;
              border: 1px solid $alabaster;
              border-radius: 5px;
              &:focus {
                outline: 0;
                border-color: $tabasco;
              }
              &::placeholder {
                color: $text;
              }
            }
            > .text {
              font-weight: 600;
              font-size: 12px;
              line-height: 16px;
              margin: 5px 0;
              span {
                color: $tabasco;
              }
            }
          }
          .col {
            flex: 1 0 0!important;
          }
          .col-left {
            padding-left: 0;
            text-align: left;
            flex-grow: 1;
            flex-basis: 0;
          }
          .col-right {
            padding-right: 0;
            text-align: right;
            flex: 0 0 auto;
          }
        }
        .button-makebet {
          margin: 0;
          padding: 10px;
          width: 100%;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: $white;
          background: $chileanFire;
          border-radius: 10px;
          &:disabled {
            pointer-events: none;
            background: $blackSqueeze;
          }
        }
        .button-radio {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          padding: 8px;
          margin-bottom: 5px;
          color: $mystic;
          background: $blackSqueeze;
          border-radius: 10px;
          &.active {
            background: $redGradient;
            color: $white;
          }
          &.active {
            &::before {
              background: $redGradient;
            }
          }
          &::before {
            content: '';
            width: 12px;
            height: 12px;
            margin-right: 8px;
            border: 4px solid $white;
            background: $white;
            border-radius: 50%;
          }
          .text {
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
          }
        }
        .success {
          display: flex;
          align-items: center;
          justify-content: center;
          color: $bermuda;
          .icon {
            margin-top: -5px;
            margin-right: 8px;
            width: 14px;
            height: 7px;
            border-left: 2px solid $bermuda;
            border-bottom: 2px solid $bermuda;
            transform: rotate(-45deg);
          }
          .text {
            font-weight: 700;
            font-size: 14px;
            line-height: 32px;
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .cart-wrap {
      .cart {
        .cart-head {
          .icon-file {
            margin-right: 8px;
          }
          .text {
            font-size: 14px;
            line-height: 24px;
          }
        }
        .cart-body {
          .cart-items {
            padding-top: 32px;
            .cart-h {
              padding: 5px 15px;
              height: 24px;
              .text {
                font-size: 10px;
                &:nth-child(1) {
                  padding-left: 24px;
                  width: calc(100% - 114px);
                }
                &:nth-child(2) {
                  width: 54px;
                  text-align: center;
                }
                &:nth-child(3) {
                  width: 60px;
                  text-align: center;
                }
              }
            }
          }
          .cart-item {
            margin-bottom: 4px;
            height: 40px;
            .icon-close {
              width: 20px;
              height: 20px;
            }
            .teams {
              font-size: 10px;
              line-height: 12px;
            }
            .bet {
              margin-right: 5px;
              padding: 2px 4px;
              width: 54px;
              font-size: 10px;
              line-height: 12px;
              height: 32px;
              .text {
                max-height: 24px;
              }
            }
            .rate {
              padding: 3px;
              width: 60px;
              height: 32px;
              font-size: 14px;
              span {
                font-size: 8px;
                line-height: 14px;
              }
            }
          }
          .row {
            .col-left,
            .col-right {
              padding: 0 3px;
              .input {
                padding: 2px 6px;
                width: 44px;
                font-size: 10px;
                line-height: 14px;
              }
              > .text {
                font-size: 10px;
                line-height: 14px;
                margin: 4px 0;
              }
            }
          }
          .button-makebet {
            padding: 8px;
            font-size: 11px;
            border-radius: 8px;
          }
          .button-radio {
            padding: 3px 5px;
            margin-bottom: 0;
            border-radius: 6px;
            &:hover,
            &.active {
              background: $redGradient;
              color: $white;
            }
            &::before {
              content: '';
              width: 8px;
              height: 8px;
              margin-right: 6px;
              border: 3px solid $white;
              background: $white;
              border-radius: 50%;
            }
            .text {
              font-size: 11px;
              line-height: 15px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .cart-wrap {
      .cart {
        .cart-head {
          padding: 10px 15px;
          .icon-file {
            font-size: 20px;
            margin-right: 10px;
          }
          .text {
            font-size: 16px;
            line-height: 32px;
          }
        }
        .cart-body {
          padding: 8px;
          .cart-items {
            margin: -8px -10px 0;
            padding: 40px 10px 0;
            .cart-h {
              padding: 10px 15px;
              height: 32px;
              .text {
                font-size: 13px;
                line-height: 14px;
                &:nth-child(1) {
                  padding-left: 28px;
                  width: calc(100% - 142px);
                }
                &:nth-child(2) {
                  width: 66px;
                }
                &:nth-child(3) {
                  width: 76px;
                }
              }
            }
          }
          .cart-item {
            margin-bottom: 8px;
            padding: 4px;
            height: 48px;
            .icon-close {
              width: 24px;
              height: 24px;
              font-size: 8px;
              margin-right: 14px;
            }
            .icon {
              width: 28px;
              height: 28px;
              font-size: 20px;
              margin-right: 8px;
            }
            .teams {
              font-size: 12px;
              line-height: 14px;
            }
            .bet {
              margin-right: 5px;
              padding: 5px;
              width: 66px;
              font-size: 12px;
              line-height: 14px;
              height: 40px;
              .text {
                max-height: 28px;
              }
            }
            .rate {
              padding: 5px;
              width: 76px;
              height: 40px;
              font-size: 16px;
              span {
                font-size: 10px;
                line-height: 18px;
              }
            }
          }
          .row {
            .col-left,
            .col-right {
              padding: 3px 6px;
              .input {
                padding: 6px 10px;
                width: 88px;
                font-size: 12px;
                line-height: 16px;
              }
              > .text {
                font-size: 12px;
                line-height: 16px;
              }
            }
          }
          .button-makebet {
            padding: 15px;
            font-size: 12px;
            line-height: 18px;
          }
          .button-radio {
            padding: 8px;
            margin-bottom: 5px;
            border-radius: 10px;
            .text {
              font-size: 14px;
            }
            &::before {
              width: 12px;
              height: 12px;
              margin-right: 8px;
              border: 4px solid $white;
            }
          }
          .text-info {
            font-size: 12px;
            line-height: 16px;
          }
          .success {
            padding: 10px;
            .icon {
              margin-top: -7px;
              margin-right: 10px;
              width: 18px;
              height: 9px;
            }
            .text {
              font-size: 18px;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
</style>
