<template lang="pug">
  .home
    p.p Мы за доли секунд находим самые высокие коэффициенты и агрегируем их в одном удобном интерфейсе
    slider
    .navbar-supertop
      button.supertop-hint(
        :class="{active: !filterSports.length}"
        @click="filterSports = []"
      )
        i.icon-flame
        span.text Супертоп
      button.nav-supertop(
        v-for="sport in sports"
        :key="sport.name"
        :class="{active: getIndexFilter(sport.name) != -1}"
        @click="setFilterSports(sport.name)"
      )
        i(
          :class="`icon-${sport.name}`"
        )
        span.text {{ sport.title }}
    .panel-info Мы нашли самые высокие коэффициенты на ближайщие ТОП-матчи
    template(
      v-if="!load"
    )
      matches(
        v-for="sport in sports"
        v-if="!filterSports.length || getIndexFilter(sport.name) != -1"
        :key="sport.name"
        :title="sport.title"
        :name="sport.name"
        :color="sport.color"
        :matches="[matches[1]]"
      )
    v-preloader(
      v-else
    )
   
</template>

<script>
  import { mapState } from 'vuex'
  import Matches from '@/components/Matches'
  import Preloader from '@/components/Preloader'

  export default {
    props: ['name'],
    components: {
      Matches,
      'v-preloader': Preloader
    },
    data: () => ({
      load: true,
      filterSports: []
    }),
    computed: {
      ...mapState([
        'sports',
        'matches'
      ])
    },
    mounted() {
      setTimeout(() => {
        this.load = false
      },2000)
    },
    methods: {
      getIndexFilter(name) {
        return this.filterSports.findIndex(item => name == item)
      },
      setFilterSports(name) {
        let index = this.getIndexFilter(name)
        if (index !== -1) {
          this.filterSports.splice(index, 1)
        } else {
          this.filterSports.push(name)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .home {
    .preloader {
      margin: 50px auto;
      width: 280px;
      height: auto;
      display: block;
    }
    .panel-info {
      font-weight: 600;
      font-size: 9px;
      line-height: 15px;
      color: $casper;
      background-color: $swamp;
      border-radius: 6px;
      padding: 5px;
      text-align: center;
      margin-bottom: 5px;
    }
    .p {
      font-weight: 300;
      font-size: 9px;
      line-height: 15px;
      color: $casper;
      text-align: center;
      margin-top: 0;
      margin-bottom: 5px;
    }
    .navbar-supertop {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 5px;
      user-select: none;
      .supertop-hint {
        display: block;
        max-width: 40px;
        padding: 3px;
        text-align: center;
        text-decoration: none;
        &.active {
          .icon-flame {
            color: $tabasco;
          }
          .text {
            color: $white;
          }
        }
        .icon-flame {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          width: 26px;
          height: 26px;
          font-size: 14px;
          color: $shuttleGray;
          border-radius: 5px;
        }
        .text {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          text-overflow: ellipsis;
          font-weight: 700;
          font-size: 9px;
          line-height: 19px;
          color: $mystic;
        }
      }
      .nav-supertop {
        display: block;
        max-width: 40px;
        padding: 3px;
        text-align: center;
        text-decoration: none;
        &.active {
          i {
            color: $white;
            background: $redGradient;
          }
        }
        i {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          width: 26px;
          height: 26px;
          font-size: 14px;
          color: $shuttleGray;
          border-radius: 5px;
        }
        .text {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          text-overflow: ellipsis;
          font-size: 9px;
          line-height: 19px;
          color: $mystic;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .home {
      .panel-info {
        font-size: 12px;
        line-height: 19px;
        margin-bottom: 12px;
        padding: 12px;
      }
      .p {
        font-size: 12px;
        line-height: 19px;
        margin-bottom: 12px;
      }
      .navbar-supertop {
        margin-bottom: 12px;
        .supertop-hint {
          max-width: none;
          .icon-flame {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }
          .text {
            font-size: 11px;
            line-height: 21px;
          }
        }
        .nav-supertop {
          i {
            width: 32px;
            height: 32px;
            font-size: 16px
          }
          .text {
            font-size: 11px;
            line-height: 21px;
          }
        }
      }
    }
  }
  @media (min-width: 1280px) {
    .home {
      .p {
        margin-bottom: 24px;
      }
      .navbar-supertop {
        justify-content: flex-end;
        .supertop-hint {
          display: flex;
          align-items: center;
          .text {
            margin-top: 4px;
          }
        }
        .nav-supertop {
          max-width: none;
          &:hover {
            i {

              color: $white;
            }
          }
          .text {
            display: none;
          }
        }
      }
    }
  }
  @media (min-width: 1920px) {
    .home {
      .panel-info {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 16px;
        padding: 20px;
      }
      .p {
        font-size: 16px;
        line-height: 28px;
      }
      .navbar-supertop {
        margin-bottom: 24px;
        .supertop-hint {
          .icon-flame {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
          .text {
            font-size: 15px;
            line-height: 24px;
          }
        }
        .nav-supertop {
          i {
            width: 40px;
            height: 40px;
            font-size: 20px
          }
        }
      }
    }
  }
</style>
