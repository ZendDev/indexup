<template lang="pug">
  .match
    button.button-back(
      v-if="!isDesktop"
      @click="goToBack"
    )
      i.icon-left
      span.text {{ currSport.title }}
    .jumbotron
      video#video(
        v-if="isDesktop"
        autoplay
        muted
        loop
      )
        source(
          src="/video/1034352398-hd.mp4"
          type="video/mp4"
        )
      .wrap
        .title
          span.text Манчестер Юнайтед
          img.img(
            src="/image/teamlarge1.svg"
            alt="Манчестер Юнайтед"
          )
        .datetime
          .time 19:30
          .date 15 января
        .title
          span.text Челси
          img.img(
            src="/image/teamlarge2.svg"
            alt="Челси"
          )
    .tabs
      button.tabs-item(
        v-for="rate in rates"
        :key="rate.name"
        :class="{active: isSame(rate, currRate)}"
        @click="switchRate(rate)"
      ) {{rate.text}}
    template(
      v-if="currRate.name == 'main'"
    )
      accordion(
        :open="true"
        title="Результат. Основное время"
      )
        .button-group.colmax
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. победа
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Ничья
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Челси победа
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. не проигрывает
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Не будет ничьи
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Челси не проигрывает
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
      accordion(
        :open="true"
        title="Фора. Основное время"
      )
        .button-group
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
        
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
      accordion(
        :open="true"
        title="Тотал. Основное время"
      )
        .button-group
          button.button(
            @click="addToCart"
          )
            span.text Чет
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Нечет
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
    template(
      v-if="currRate.name == 'handicap'"
    )
      accordion(
        :open="true"
        title="Фора. Основное время"
      )
        .button-group
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
        .button-group
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. (+1,5)
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
    template(
      v-if="currRate.name == 'total'"
    )
      accordion(
        :open="true"
        title="Тотал. Основное время"
      )
        .button-group
          button.button(
            @click="addToCart"
          )
            span.text Чет
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Нечет
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
    template(
      v-if="currRate.name == 'goal'"
    )
      accordion(
        :open="true"
        title="Результат. Основное время"
      )
        .button-group.colmax
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. победа
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Ничья
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Челси победа
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Манчестер Юн. не проигрывает
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Не будет ничьи
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
          button.button(
            @click="addToCart"
          )
            span.text Челси не проигрывает
            span.label
              span.text
                b +15%
                br.mobile-none
                span.mobile-none к выиграшу
                span.tooltip
                  | Мы нашли самые высокие
                  br
                  | коэффициенты на
                  br
                  | ближайщие ТОП-матчи
              span.text 1.40
              span.text 1.55↑
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import Accordion from '@/components/Accordion'

  export default {
    props: ['name', 'id'],
    components: {
      Accordion
    },
    data: () => ({
      currSport: null,
      currRate: {name: 'main', text: 'Главная'},
      rates: [
        {name: 'main', text: 'Главная'},
        {name: 'handicap', text: 'Форы'},
        {name: 'total', text: 'Тоталы'},
        {name: 'goal', text: 'Голы'}
      ],
    }),
    computed: {
      ...mapState([
        'sports',
        'cart'
      ]),
      ...mapGetters([
        'isDesktop'
      ])
    },
    created() {
      this.currSport = this.sports.find(item => this.name == item.name)
      if (!this.currSport) this.$router.replace('/')
    },
    methods: {
      ...mapMutations([
        'addToCart'
      ]),
      goToBack() {
        this.$router.push({
          name: 'line',
          params: {
            category: this.name
          }
        })
      },
      isSame(a, b) {
        return JSON.stringify(a) === JSON.stringify(b)
      },
      switchRate(rate) {
        this.currRate = rate
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .match {
    #video {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      height: auto;
      transform: translate(-50%, -50%);
    }
    .button-back {
      margin-bottom: 5px;
      .icon-left {
        margin-right: 8px;
        font-size: 12px;
        color: $tabasco;
      }
      .text {
        font-weight: 600;
        font-size: 10px;
        line-height: 24px;
        color: $white;
      }
    }
    .jumbotron {
      position: relative;
      width: 100%;
      height: 124px;
      background-image: url('/video/1034352398-hd.gif');
      background-position: 50% 50%;
      background-size: cover;
      margin-bottom: 10px;
      user-select: none;
      border-radius: 10px;
      background-color: $swamp;
      overflow: hidden;
      .title {
        display: flex;
        align-items: center;
        width: 110px;
        position: absolute;
        top: calc(50% - 15px);
        height: 30px;
        overflow: hidden;
        .text {
          font-weight: bold;
          font-size: 10px;
          line-height: 15px;
        }
        .img {
          position: absolute;
          top: 0;
          display: block;
          width: 30px;
          height: 30px;
        }
        &:first-child {
          right: calc(50% + 35px);
          padding-right: 40px;
          .text {
            text-align: right;
          }
          .img {
            right: 0;
          }
        }
        &:last-child {
          left: calc(50% + 35px);
          padding-left: 40px;
          .text {
            text-align: left;
          }
          .img {
            left: 0;
          }
        }
      }
      .datetime {
        position: absolute;
        top: calc(50% - 15px);
        left: calc(50% - 35px);
        width: 70px;
        text-align: center;
        .time {
          font-size: 13px;
          line-height: 15px;
          color: $white;
        }
        .date {
          font-size: 9px;
          line-height: 15px;
          color: $nepal;
        }
      }
    }
    .tabs {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      margin: 0 -10px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid $swamp;
      margin-bottom: 18px;
      .tabs-item {
        padding: 2px 10px;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        color: $raven;
        &:hover,
        &.active {
          color: $white;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 100%;
            height: 5px;
            background: $redGradient;
            border-radius: 2px;
          }
        }
      }
    }
    .accordion {
      margin-bottom: 8px;
      // ::v-deep .accordion-content {
      //   padding: 8px 10px 0 10px;
      // }

      
      * {
        user-select: initial;
      }
    }
    .button-group {
      .button {
        position: relative;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 8px;
        width: 100%;
        height: 50px;
        padding: 6px;
        color: $text;
        background-color: $catskillWhite;
        border-radius: 10px;
        user-select: initial;
        &:active {
          color: $white;
          background-color: $swamp;
          > .label {
            .text:nth-child(1),
            .text:nth-child(2),
            .text:nth-child(3) {
              color: $white;
              background-color: $swamp;
              box-shadow: none;
            }
          }
        }
        > .text {
          margin: 5px 10px;
          width: 100%;
          max-height: 30px;
          font-weight: 600;
          font-size: 12px;
          line-height: 15px;
          text-align: left;
          overflow: hidden;
        }
        > .label {
          position: relative;
          padding: 5px 70px 5px 5px;
          .text:nth-child(1),
          .text:nth-child(2) {
            position: relative;
            display: block;
            width: 50px;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
          }
          .text:nth-child(2) {
            position: relative;
            font-size: 9px;
            color: $raven;
            text-decoration: line-through;
          }
          .text:nth-child(3) {
            position: absolute;
            top: 0;
            right: 0;
            width: 64px;
            padding: 10px;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: $white;
            box-shadow: 0px 7px 15px rgba(93,6,3,.4);
            border-radius: 10px;
            background-color: $woodBark;
            text-align: center;
          }
        }
        .tooltip {
          display: none;
          padding: 9px 14px;
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          background-color: $swamp;
          color: $white;
          z-index: 500;
          width: 218px;
          font-weight: 600!important;
          font-size: 14px!important;
          line-height: 24px;
          box-shadow: 0px 7px 15px rgba(93, 6, 3, 0.4);
          border-radius: 10px;
          text-align: left;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .match {
      .button-back {
        .text {
          font-size: 14px;
        }
      }
      .accordion {
        margin-bottom: 10px;
      }
      .tabs {
        justify-content: flex-start;
        padding: 5px;
        margin: 0 0 10px;
        background-color: $swamp;
        border-radius: 10px;
        border: none;
        .tabs-item {
          margin-right: 25px;
          padding: 8px 15px;
          font-size: 15px;
          color: $white;
          &:hover,
          &.active {
            background: $redGradient;
            color: $white;
            border-radius: 6px;
            &::before {
              content: none;
            }
          }
        }
      }
      .jumbotron {
        margin-bottom: 7px;
        .title {
          width: 250px;
          top: calc(50% - 30px);
          height: 60px;
          .text {
            font-size: 22px;
            line-height: 30px;
          }
          .img {
            width: 60px;
            height: 60px;
          }
          &:first-child {
            right: calc(50% + 50px);
            padding-right: 75px;
            .text {
              text-align: right;
            }
            .img {
              right: 0;
            }
          }
          &:last-child {
            left: calc(50% + 50px);
            padding-left: 75px;
            .text {
              text-align: left;
            }
            .img {
              left: 0;
            }
          }
        }
        .datetime {
          top: calc(50% - 24px);
          left: calc(50% - 50px);
          width: 100px;
          .time {
            font-size: 20px;
            line-height: 24px;
          }
          .date {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
      .button-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .button {
          position: relative;
          margin-right: 5px;
          margin-left: 5px;
          padding: 8px 220px 8px 16px;
          max-width: calc(50% - 10px);
          &:hover,
          &:active {
            color: $white;
            background-color: $swamp;
            > .label {
              background-color: transparent;
              .text:nth-child(1),
              .text:nth-child(2),
              .text:nth-child(3) {
                color: $white;
                background-color: $swamp;
                box-shadow: none;
              }
            }
          }
          > .text {
            margin: 0;
            font-size: 14px;
            line-height: 15px;
          }
          > .label {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            padding: 0;
            width: 205px;
            height: 50px;
            background-color: $redBerry;
            border-radius: 10px;
            .text:nth-child(1) {
              padding-top: 10px;
              padding-bottom: 10px;
              width: 85px;
              font-size: 13px;
              line-height: 14px;
              color: $white;
              background-color: $woodBark;
              box-shadow: 0px 7px 15px rgba(93,6,3,.4);
              border-radius: 10px;
              order: 3;
              span {
                font-weight: 400;
                font-size: 11px;
              }
            }
            .text:nth-child(2) {
              width: 62px;
              font-size: 16px;
              color: $tonyspink;
              order: 2;
            }
            .text:nth-child(3) {
              position: static;
              top: auto;
              right: auto;
              padding: 0;
              width: 58px;
              font-size: 18px;
              line-height: 20px;
              text-align: right;
              background-color: transparent;
              box-shadow: none;
              order: 1;
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    .match {
      .button-group {
        &.colmax {
          .button {
            max-width: calc(33.333% - 10px);
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .match {
      .button-group {
        &.colmax {
          .button {
            max-width: calc(50% - 10px);
          }
        }
        .button {
          > .label {
            .text:nth-child(1):hover {
              .tooltip {
                display: block;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1600px) {
    .match {
      .button-group {
        &.colmax {
          .button {
            max-width: calc(33.333% - 10px);
          }
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .match {
      .jumbotron {
        height: 180px;
        margin-bottom: 10px;
      }
      .accordion {
        margin-bottom: 12px;
        ::v-deep .accordion-content {
          padding: 9px 5px 0 5px;
        }
      }
      .button-group {
        .button {
          margin-bottom: 9px;
          &:active {
            .tooltip {
              display: none;
            }
          }
          > .label {
            width: 188px;
          }
        }
      }
    }
  }

  // Edits

  @media (min-width: 1280px) and (max-width: 1399px) {
      
      .match {
        .button-group {

          justify-content: flex-start;

          &.colmax {
            .button {
              max-width: calc(33.333% - 10px);
            }
          }

          .button {
            padding: 8px 108px 8px 16px;
            // max-width: calc(33.333% - 10px);
            & > .text {
              font-size: 13px;
            }
            & > .label {
              width: 100px;
              justify-content: flex-end;

              .text {
                &:nth-child(1) {

                  width: 50px;
                  height: 50px;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  font-size: 16px;
                  line-height: 1;
                  font-weight: 300;

                  br, span {
                    display: none;
                  }

                }
                &:nth-child(2) {
                  position: absolute;
                  bottom: 5px;
                  left: 0;
                  height: 25px;
                  width: 50px;

                  display: flex;
                  align-items: center;
                  justify-content: center;

                  font-size: 12px;
                  line-height: 1;
                  font-weight: 400;
                  
                }
                &:nth-child(3) {

                  position: absolute;
                  top: 5px;
                  left: 0;
                  height: 20px;
                  width: 50px;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  font-size: 14px;
                  line-height: 1;
                  font-weight: 400;
                  
                }
              }
            }
          }

        }
      }
    
  }
  

  @media (min-width: 1400px) {
     .match {

      .button-group {
          justify-content: flex-start;
          &.colmax {
            .button {
              max-width: calc(33.333% - 10px);
            }
          }

          .button {
            // max-width: calc(33.333% - 10px);
          }
        }
      }
  }

  @media (min-width: 1400px) and (max-width: 1599px) {


    .match {

      .button-group {
        justify-content: flex-start;
        &.colmax {
          .button {
            max-width: calc(33.333% - 10px);
          }
        }

        .button {
          // max-width: calc(33.333% - 10px);
          padding-right: 156px;
          & > .label {
              width: 140px;
              justify-content: flex-end;

              .text {
                &:nth-child(1) {
                  width: 80px;
                }
                &:nth-child(2) {
                  position: absolute;
                  bottom: 5px;
                  left: 0;
                  height: 25px;
                  width: 60px;

                  display: flex;
                  align-items: center;
                  justify-content: center;
                  
                }
                &:nth-child(3) {

                  position: absolute;
                  top: 5px;
                  left: 0;
                  height: 20px;
                  width: 60px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  
                }
              }
            }

        }
      }
    }

  }


</style>
