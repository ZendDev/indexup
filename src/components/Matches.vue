<template lang="pug">

  .matches
    .matches-head
      i(
        :class="`icon-${name}`"
        :style="{ 'background-color': color }"
      )
      span.text {{ title }}
      .tabs
        button.tabs-control(
          v-if="isMobile"
          :class="{open: openRate}"
          @click="openRate = !openRate"
        )
          span.text {{currRate.text}}
          span.icon-down
        .tabs-content(
          v-if="!isMobile || openRate"
        )
          button.tabs-item(
            v-for="rate in rates"
            :key="rate.name"
            :class="{active: isSame(rate, currRate)}"
            @click="switchRate(rate)"
          ) {{rate.text}}
    .matches-body
      .matches-info(
        v-if="!isMobile"
      )
        span.text Дата
        span.text Событие
        span.text П1
        span.text Х
        span.text П2
      router-link.match(
        v-for="(match, index) in matches"
        :key="index"
        :to="matchPath"
      )
        .match-head
          .match-title
            span.text
              img.img(
                :src="match.teams[0].image"
                :alt="match.teams[0].title"
              )
              | {{ match.teams[0].title }}
            span.text
              img.img(
                :src="match.teams[1].image"
                :alt="match.teams[1].title"
              )
              | {{ match.teams[1].title }}
          .match-live(
            v-if="match.live"
          )
            .large Live
            .small
              | 83 минута
              br
              | 21:30
          .match-time(
            v-else
          )
            .large {{ match.time }}
            .small Сегодня

        .match-body
          .match-info(
            v-if="isMobile"
          )
            span.text П1
            span.text Х
            span.text П2
          .indexup
            .indexup-hint Мы нашли
            .indexup-group
              .indexup-item(
                v-for="n in 3"
                :key="n"
                @click.prevent.stop="addToCart"
              )
                span.text {{ match.rates[currRate.name][n - 1] }}↑
                span.label
                  b +100%
                  br.mobile-none
                  span.mobile-none к выиграшу
          .bookmakers
            .bookmakers-hint Букмекеры России
            .bookmakers-group
              .bookmakers-item(
                v-for="n in 3"
                :key="n"
              )  {{ match.rusRates[currRate.name][n - 1] }}
        .match-foot
          .count +1245
      router-link.match(
        v-for="(match, index) in matches"
        :key="index"
        :to="matchPath"
      )
        .match-head
          .match-title
            span.text
              img.img(
                :src="match.teams[0].image"
                :alt="match.teams[0].title"
              )
              | {{ match.teams[0].title }}
            span.text
              img.img(
                :src="match.teams[1].image"
                :alt="match.teams[1].title"
              )
              | {{ match.teams[1].title }}
          .match-live(
            v-if="match.live"
          )
            .large Live
            .small
              | 83 минута
              br
              | 21:30
          .match-time(
            v-else
          )
            .large {{ match.time }}
            .small Сегодня

        .match-body
          .match-info(
            v-if="isMobile"
          )
            span.text П1
            span.text Х
            span.text П2
          .indexup
            .indexup-hint Мы нашли
            .indexup-group
              .indexup-item(
                v-for="n in 3"
                :key="n"
                @click.prevent.stop="addToCart"
              )
                span.text {{ match.rates[currRate.name][n - 1] }}↑
                span.label
                  b +100%
                  br.mobile-none
                  span.mobile-none к выиграшу
          .bookmakers
            .bookmakers-hint Букмекеры России
            .bookmakers-group
              .bookmakers-item(
                v-for="n in 3"
                :key="n"
              )  {{ match.rusRates[currRate.name][n - 1] }}
        .match-foot
          .count +1245


</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    props: {
      name: String,
      title: String,
      color: String,
      matches: Array
    },
    data: () => ({
      currRate: {name: 'result', text: 'Исходы'},
      rates: [
        {name: 'result', text: 'Исходы'},
        {name: 'double', text: 'Двойные шансы'},
        {name: 'total', text: 'Тоталы'},
        {name: 'handicap', text: 'Форы'}
      ],
      openRate: false,
    }),
    computed: {
      ...mapGetters([
        'isMobile'
      ]),
      matchPath() {
        const section = this.$route.path !== '/' ? this.$route.path : `/line/${this.name}`
        return `${section}/match`
      }
    },
    methods: {
      ...mapMutations([
        'addToCart'
      ]),
      isSame(a, b) {
        return JSON.stringify(a) === JSON.stringify(b)
      },
      switchRate(rate) {
        this.openRate = false
        this.currRate = rate
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .matches {
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 8px;
    .matches-head {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 4px;
      background-color: $swamp;
      i {
        flex: 0 0 26px;
        padding: 6px;
        margin-right: 10px;
        font-size: 14px;
        max-width: 26px;
        height: 26px;
        border-radius: 6px;
      }
      > .text {
        font-size: 12px;
        line-height: 24px;
        font-weight: 700;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tabs {
        display: flex;
        position: relative;
        margin-left: auto;
        height: 100%;
        .tabs-control {
          position: relative;
          padding: 0 32px 0 10px;
          font-weight: 300;
          font-size: 10px;
          line-height: 24px;
          &.open {
            .icon-down {
              transform: rotate(180deg);
            }
            ~ .tabs-content {
              display: block;
              z-index: 500;
            }
          }
          .icon-down {
            position: absolute;
            top: calc(50% - 6px);
            right: 4px;
            font-size: 12px;
            color: $tabasco;
          }
        }
        .tabs-content {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          padding: 8px 0;
          background-color: $white;
          box-shadow: 0px 7px 15px rgba(93,6,3,.4);
          border-radius: 5px;
          overflow: hidden;
        }
        .tabs-item {
          position: relative;
          display: flex;
          justify-content: flex-start;
          padding: 0 15px;
          width: 100%;
          font-weight: 300;
          font-size: 10px;
          line-height: 24px;
          color: $text;
          white-space: nowrap;
          &:hover,
          &.active {
            background-color: $catskillWhite;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 100%;
              background: $redGradient;
            }
          }
        }
      }
    }
    .matches-info {
      display: none;
    }
    .match {
      display: block;
      text-decoration: none;
      margin: 0 0 10px;
      &:last-child {
        margin: 0;
      }
      .match-head {
        display: flex;
        align-items: center;
        padding: 3px 10px;
        background-color: $white;
        color: $text;
        .match-title {
          font-weight: 600;
          font-size: 10px;
          line-height: 20px;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .img {
            display: none;
          }
          .text {
            &:first-child {
              &::after {
                content: ' — '
              }
            }
          }
        }
        .match-live,
        .match-time {
          position: relative;
          display: flex;
          align-items: center;
          margin-left: auto;
          white-space: nowrap;
          .large {
            position: relative;
            font-weight: 700;
            font-size: 12px;
            line-height: 20px;
            margin-left: 10px;
            margin-right: 10px;
          }
          .small {
            text-align: center;
            font-weight: 400;
            font-size: 8px;
            line-height: 10px;
            color: $nepal;
          }
        }
        .match-live {
          padding-left: 10px;
          .large::before {
            content: '';
            position: absolute;
            top: calc(50% - 2px);
            left: -10px;
            background-color: $thunderbird;
            width: 4px;
            height: 4px;
            border-radius: 50%;
          }
        }
      }
      .match-body {
        .match-info {
          display: flex;
          background-color: $swamp;
          color: $white;
          font-weight: 600;
          font-size: 8px;
          line-height: 14px;
          .text {
            flex: 0 0 33.333%;
            max-width: 33.333%;
            text-align: center;
          }
        }
        .indexup-hint,
        .bookmakers-hint {
          padding: 0 10px;
          background-color: $white;
          color: $text;
          font-weight: 600;
          font-size: 10px;
          line-height: 16px;
        }
        .indexup-group {
          display: flex;
          background-color: $catskillWhite;
          color: $woodBark;
          .indexup-item {
            display: flex;
            padding: 7px 10px;
            flex: 0 0 33.333%;
            &:hover {
              .text {
                background-color: $swamp;
                border-color: $swamp;
                color: $white;
                border-radius: 6px 0 0 6px;
              }
              .label {
                background-color: $swamp;
                border-color: $swamp;
                color: $white;
                border-radius:  0 6px 6px 0;
                box-shadow: none;
              }
            }
            .text {
              flex: 1 0 0;
              max-width: 100%;
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
              padding: 0 5px;
            }
            .label {
              flex: 0 0 44px;
              max-width: 44px;
              text-align: center;
              padding: 6px;
              font-size: 10px;
              line-height: 12px;
              background-color: $woodBark;
              color: $white;
              box-shadow: 0px 7px 15px rgba(93,6,3,.4);
              border-radius: 6px;
            }
          }
        }
        .bookmakers-group {
          display: flex;
          background-color: $catskillWhite;
          color: $text;
          .bookmakers-item {
            display: flex;
            justify-content: center;
            padding: 6px 10px;
            flex: 0 0 33.333%;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            text-decoration: line-through;
          }
        }
      }
      .match-foot {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    .matches {
      margin-bottom: 10px;
      .matches-head {
        padding: 0;
        margin-bottom: 5px;
        border-radius: 6px;
        i {
          flex: 0 0 54px;
          padding: 18px;
          margin-right: 25px;
          font-size: 20px;
          max-width: 54px;
          height: 54px;
        }
        > .text {
          font-size: 18px;
        }
        .tabs {
          .tabs-content {
            display: flex;
            position: static;
            top: auto;
            right: auto;
            padding: 0 8px;
            background-color: transparent;
            box-shadow: none;
            border-radius: 0;
          }
          .tabs-item {
            padding: 19px 2px;
            margin: 0 10px; 
            width: auto;
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: $white;
            &:hover,
            &.active {
              background-color: transparent;
              &::before {
                top: auto;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
              }
            }
          }
        }
      }
      .matches-info {
        display: flex;
        padding: 5px 62px 5px 10px;
        margin-bottom: 5px;
        background-color: $swamp;
        border-radius: 6px;
        .text {
          padding: 0 5px;
          font-weight: 600;
          font-size: 10px;
          line-height: 20px;
          flex-basis: 0;
          flex-grow: 1;
          min-width: 0;
          max-width: 100%;
          text-align: center;
          &:nth-child(1) {
            flex: 80px;
            max-width: 80px;
            text-align: left;
          }
          &:nth-child(2) {
            flex: 215px;
            max-width: 215px;
            text-align: left;
          }
        }
      }
      .match {
        display: flex;
        padding: 6px;
        margin-bottom: 5px;
        overflow: hidden;
        background-color: $white;
        border-radius: 6px;
        .match-head {
          display: flex;
          flex: 0 0 230px;
          max-width: 230px;
          padding: 6px 9px;
          background-color: $white;
          color: $text;
          .match-title {
            position: relative;
            padding: 0;
            width: 100%;
            font-size: 12px;
            &::before {
              content: '';
              position: absolute;
              top: 24px;
              left: 10px;
              width: 2px;
              height: 7px;
              background: $redGradient;
            }
            .img {
              position: absolute;
              top: 0;
              left: 0;
              display: block;
              width: 20px;
              height: 20px;
              margin-right: 10px;
            }
            .text {
              position: relative;
              display: block;
              padding-left: 30px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 100%;
              &:first-child {
                margin-bottom: 16px;
                &::after {
                  content: none;
                }
              }
            }
          }
          .match-live,
          .match-time {
            display: block;
            flex: 0 0 54px;
            max-width: 54px;
            margin-right: 6px;
            margin-left: 0;
            text-align: center;
            order: -1;
            .large {
              display: inline-block;
              font-weight: 700;
              font-size: 14px;
              line-height: 20px;
              margin-left: 10px;
              margin-right: 10px;
            }
            .small {
              text-align: center;
              font-weight: 400;
              font-size: 10px;
              line-height: 14px;
              color: $nepal;
            }
          }
          .match-live {
            padding-left: 0;
          }
        }
        .match-body {
          display: block;
          flex-basis: 0;
          flex-grow: 1;
          min-width: 0;
          max-width: 100%;
          overflow: hidden;
          border-radius: 6px;
          .indexup {
            display: flex;
            background-color: $redBerry;
          }
          .bookmakers {
            display: flex;
            background-color: $catskillWhite;
          }
          .indexup-hint,
          .bookmakers-hint {
            margin-right: 5px;
            flex: 0 0 70px;
            max-width: 70px;
          }
          .indexup-hint {
            padding: 10px;
            font-size: 12px;
            line-height: 14px;
            background-color: $lonestar;
            color: $white;
            border-radius: 6px 6px 0 0;
          }
          .bookmakers-hint {
            padding: 5px 10px;
            font-size: 9px;
            line-height: 11px;
            background-color: $mystic;
            color: $text;
            border-radius: 0 0 6px 6px;
          }
          .indexup-group {
            width: calc(100% - 70px);
            background-color: transparent;
            color: $white;
            .indexup-item {
              padding: 5px 5px 5px 0;
              &:hover {
                .text {
                  background-color: $tabasco;
                  border-color: $tabasco;
                }
                .label {
                  background-color: $woodBark;
                  border-color: $woodBark;
                  color: $white;
                  box-shadow: 0px 7px 15px rgba(93,6,3,.4);
                  border-radius: 6px;
                }
              }
              .text {
                flex-basis: 0;
                flex-grow: 1;
                min-width: 0;
                max-width: 100%;
                text-align: center;
                padding: 6px 25px 6px 10px;
                margin-right: 0;
                border: 1px solid $stiletto;
                border-radius: 6px;
              }
              .label {
                flex: 0 0 70px;
                text-align: center;
                margin-left: -20px;
                max-width: 70px;
              }
            }
          }
          .bookmakers-group {
            width: calc(100% - 70px);
            background-color: transparent;
            color: $text;
            .bookmakers-item {
              padding: 6px 10px;
              line-height: 20px;
            }
          }
        }
        .match-foot {
          display: block;
          flex: 0 0 auto;
          width: auto;
          max-width: 100%;
          .count {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 6px;
            width: 50px;
            height: 100%;
            background-color: $mystic;
            color: $redBerry;
            border-radius: 6px;
            font-weight: 700;
            font-size: 10px;
            line-height: 12px;
          }
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .matches {
      border-radius: 10px;
      margin-bottom: 16px;
      .matches-head {
        margin-bottom: 8px;
        border-radius: 10px;
        i {
          flex: 0 0 82px;
          padding: 28px;
          margin-right: 40px;
          font-size: 28px;
          max-width: 82px;
          height: 82px;
        }
        > .text {
          font-size: 22px;
        }
        .tabs {
          .tabs-content {
            padding: 0 16px;
          }
          .tabs-item {
            padding: 26px 8px;
            margin: 0 12px;
            font-size: 14px;
            line-height: 30px;
            &:hover,
            &.active {
              &::before {
                height: 3px;
              }
            }
          }
        }
      }
      .matches-info {
        padding: 12px 96px 12px 10px;
        margin-bottom: 8px;
        border-radius: 10px;
        .text {
          padding: 0 12px;
          font-size: 15px;
          &:nth-child(1) {
            flex: 98px;
            max-width: 98px;
          }
          &:nth-child(2) {
            flex: 338px;
            max-width: 338px;
          }
        }
      }
      .match {
        padding: 8px;
        margin-bottom: 8px;
        border-radius: 10px;
        .match-head {
          flex: 0 0 335px;
          max-width: 335px;
          padding: 8px;
          .match-title {
            font-size: 15px;
            line-height: 30px;
            &::before {
              top: 36px;
              left: 15px;
              width: 3px;
              height: 11px;
            }
            .img {
              width: 30px;
              height: 30px;
              margin-right: 15px;
            }
            .text {
              padding-left: 45px;
              &:first-child {
                margin-bottom: 26px;
              }
            }
          }
          .match-live,
          .match-time {
            flex: 0 0 96px;
            max-width: 96px;
            .large {
              font-size: 20px;
            }
            .small {
              font-size: 13px;
              line-height: 19px;
            }
          }
        }
        .match-body {
          border-radius: 10px;
          .indexup-hint,
          .bookmakers-hint {
            margin-right: 8px;
            flex: 0 0 105px;
            max-width: 105px;
          }
          .indexup-hint {
            padding: 15px;
            font-size: 18px;
            line-height: 20px;
            border-radius: 10px 10px 0 0;
          }
          .bookmakers-hint {
            padding: 8px 15px;
            font-size: 13px;
            line-height: 16px;
            border-radius: 0 0 10px 10px;
          }
          .indexup-group {
            width: calc(100% - 105px);
            .indexup-item {
              padding: 8px 8px 8px 0;
              .text {
                font-size: 20px;
                padding-top: 14px;
                padding-bottom: 14px;
                border-radius: 10px;
              }
              .label {
                flex: 0 0 100px;
                max-width: 100px;
                padding: 8px;
                font-size: 14px;
                line-height: 18px;
              }
            }
          }
          .bookmakers-group {
            width: calc(100% - 105px);
            background-color: transparent;
            color: $text;
            .bookmakers-item {
              padding: 14px;
              font-size: 18px;
            }
          }
        }
        .match-foot {
          .count {
            margin-left: 8px;
            width: 80px;
            border-radius: 10px;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
    }
  }
</style>
