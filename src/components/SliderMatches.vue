<template lang="pug">
  .slider-matches
    .slider-head
      .icon.icon-football
      .text {{ matches[curr].title }}
      .control
        .icon-left(
          @click="prevMatch"
        )
        .icon-right(
          @click="nextMatch"
        )
    .slider-body
      .match-info
        .team
          img.img(
            :src="matches[curr].teams[0].image"
            :alt="matches[curr].teams[0].title"
          )
          .text {{ matches[curr].teams[0].title }}
        .datetime
          .time {{ matches[curr].time }}
          .date Сегодня
        .team
          img.img(
            :src="matches[curr].teams[1].image"
            :alt="matches[curr].teams[1].title"
          )
          .text {{ matches[curr].teams[1].title }}
      .bet-wrap
        .bet-info
          .text Победа 1
          .text Ничья
          .text Победа 2
        .bet-group
          .bet-title Мы нашли
          button.button(
            v-for="(item, index) in matches[curr].rates.result"
            :key="index"
          )
            span.text {{item}}↑
            span.label
              b.text +100%
              span.text к выиграшу
        .bookmakers
          .bookmakers-title Букмекеры России
          .bookmakers-group
            .text(
              v-for="(item, index) in matches[curr].rusRates.result"
              :key="index"
            ) {{ item }}
        router-link.button-more(
          :to="matches[curr].url"
        )
          span.text Все коэффициенты
          span.icon →
</template>

<script>
  export default {
    props: {
      matches: Array
    },
    data: () => ({
      curr: 0
    }),
    methods: {
      prevMatch() {
        if (this.curr - 1 >= 0) {
          this.curr -= 1
        } else {
          this.curr = this.matches.length - 1
        }
      },
      nextMatch() {
        if (this.matches.length - 1 > this.curr) {
          this.curr += 1
        } else {
          this.curr = 0
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .slider-matches {
    display: none;
  }
 

  @media (min-width: 1280px) {
    .slider-matches {
      display: block;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 8px;
      .slider-head {
        padding: 5px 5px 5px 10px;
        display: flex;
        align-items: center;
        background-color: $swamp;
        .icon {
          font-size: 14px;
          margin-right: 8px;
        }
        .text {
          flex: 1 0 0;
          font-weight: 600;
          font-size: 12px;
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .control {
          display: flex;
          .icon-right,
          .icon-left {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            width: 22px;
            height: 22px;
            cursor: pointer;
            &:hover {
              color: $tabasco;
            }
          }
        }
      }
      .slider-body {
        padding: 10px 10px 0;
        color: $text;
        background-color: $white;
        .match-info {
          display: flex;
          margin-bottom: 10px;
          .datetime {
            width: 46px;
            text-align: center;
            .time {
              font-weight: 400;
              font-size: 13px;
              line-height: 15px;
              color: $text;
            }
            .date {
              font-weight: 500;
              font-size: 9px;
              line-height: 15px;
              color: $nepal;
            }
          }
          .team {
            position: relative;
            display: flex;
            align-items: center;
            flex: 1 0 0;
            padding: 2px 0;
            &:first-child {
              padding-right: 30px;
              .text {
                text-align: right;
              }
              .img {
                right: 0;
              }
            }
            &:last-child {
              padding-left: 30px;
              .text {
                text-align: left;
              }
              .img {
                left: 0;
              }
            }
            .img {
              position: absolute;
              width: 26px;
              height: 26px;
            }
            .text {
              width: 100%;
              font-weight: 600;
              font-size: 10px;
              line-height: 13px;
              max-height: 26px;
              overflow: hidden;
            }
          }
        }
        .bet-wrap {
          .bet-info {
            display: flex;
            border-top: 1px solid $alabaster;
            .text {
              flex: 1 0 0;
              padding: 5px 10px;
              font-weight: 500;
              font-size: 9px;
              line-height: 14px;
              text-align: center;
            }
          }
          .bet-group {
            position: relative;
            display: flex;
            width: 100%;
            padding-top: 32px;
            padding-left: 6px;
            background-color: $redBerry;
            border-radius: 6px 6px 0 0;
            .bet-title {
              position: absolute;
              top: 0;
              left: calc(50% - 50px);
              width: 100px;
              font-weight: 600;
              font-size: 12px;
              line-height: 24px;
              color: $white;
              text-align: center;
              background-color: $lonestar;
              border-radius: 0 0 6px 6px;
            }
            .button {
              flex: 1 0 0;
              margin-right: 6px;
              margin-bottom: 8px;
              padding: 8px 8px 48px 8px;
              border: 1px solid $tabasco;
              border-radius: 6px;
              &:hover,
              &.active {
                background-color: $tabasco;
              }
              > .text {
                font-weight: 400;
                font-size: 21px;
                line-height: 30px;
              }
              > .label {
                position: absolute;
                left: 0;
                bottom: 0;
                padding: 6px 0;
                width: 100%;
                height: 40px;
                background-color: $woodBark;
                border-radius: 6px;
                b.text {
                  display: block;
                  font-size: 12px;
                  line-height: 14px;
                }
                span.text {
                  display: block;
                  font-size: 9px;
                  line-height: 14px;
                }
              }
            }
          }
          .bookmakers {
            position: relative;
            padding-top: 24px;
            background-color: $catskillWhite;
            border-radius: 0 0 6px 6px;
            .bookmakers-title {
              position: absolute;
              top: 0;
              left: calc(50% - 50px);
              width: 100px;
              background-color: $mystic;
              border-radius: 0 0 6px 6px;
              font-weight: 600;
              font-size: 9px;
              line-height: 24px;
              text-align: center;
            }
            .bookmakers-group {
              display: flex;
              .text {
                flex: 1 0 0;
                font-weight: 400;
                font-size: 10px;
                line-height: 30px;
                text-align: center;
                text-decoration: line-through;
              }
            }
          }
          .button-more {
            display: flex;
            align-items: center;
            justify-content: center;
            color: $text;
            width: 100%;
            height: 30px;
            font-weight: 600;
            font-size: 9px;
            line-height: 18px;
            text-decoration: none;
            .icon {
              font-family: monospace;
              font-size: 18px;
              margin-left: 6px;
              color: $tabasco;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .slider-matches {
      border-radius: 10px;
      .slider-head {
        padding: 10px 10px 10px 15px;
        .icon {
          font-size: 20px;
          margin-right: 12px;
        }
        .text {
          font-size: 16px;
          line-height: 32px;
        }
        .control {
          .icon-right,
          .icon-left {
            font-size: 12px;
            width: 32px;
            height: 32px;
          }
        }
      }
      .slider-body {
        .match-info {
          .datetime {
            padding: 5px 0;
            width: 78px;
            .time {
              font-size: 20px;
              line-height: 20px;
            }
            .date {
              font-size: 13px;
              line-height: 20px;
            }
          }
          .team {
            padding: 5px 0;
            &:first-child {
              padding-right: 50px;
            }
            &:last-child {
              padding-left: 50px;
            }
            .img {
              width: 40px;
              height: 40px;
            }
            .text {
              font-size: 15px;
              line-height: 20px;
              max-height: 40px;
            }
          }
        }
        .bet-wrap {
          .bet-info {
            .text {
              font-size: 14px;
              line-height: 26px;
            }
          }
          .bet-group {
            padding-top: 48px;
            padding-left: 10px;
            border-radius: 10px 10px 0 0;
            .bet-title {
              left: calc(50% - 75px);
              width: 150px;
              font-size: 18px;
              line-height: 36px;
              border-radius: 0 0 10px 10px;
            }
            .button {
              margin-right: 10px;
              margin-bottom: 12px;
              padding: 10px 10px 70px 10px;
              border-radius: 10px;
              &:hover,
              &.active {
                background-color: $tabasco;
              }
              > .text {
                font-size: 32px;
                line-height: 48px;
              }
              > .label {
                padding: 10px 0;
                width: 100%;
                height: 60px;
                border-radius: 10px;
                b.text {
                  font-size: 18px;
                  line-height: 20px;
                }
                span.text {
                  font-size: 12px;
                  line-height: 20px;
                }
              }
            }
          }
          .bookmakers {
            padding-top: 32px;
            border-radius: 0 0 10px 10px;
            .bookmakers-title {
              left: calc(50% - 75px);
              width: 150px;
              border-radius: 0 0 10px 10px;
              font-size: 13px;
              line-height: 32px;
            }
            .bookmakers-group {
              .text {
                font-size: 14px;
                line-height: 46px;
              }
            }
          }
          .button-more {
            height: 46px;
            font-size: 14px;
            line-height: 20px;
            .icon {
              font-size: 24px;
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
</style>
