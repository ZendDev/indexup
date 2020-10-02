<template lang="pug">
  .line
    slider
    .navbar(
      v-if="!isOpenSubnavbar"
    )
      .navbar-category
        .navbar-item
          router-link.item-link(
            to="/line/football/match"
          )
            span.text Лига чемпионов
            span.count 1
        .navbar-item
          router-link.item-link(
            to="/line/football/match"
          )
            span.text Кубок европы
            span.count 2
        .navbar-item
          router-link.item-link(
            to="/line/football/match"
          )
            span.text АПЛ
        .navbar-item
          router-link.item-link(
            to="/line/football/match"
          )
            span.text Испанская примьера
            span.count 2
        .navbar-item
          router-link.item-link(
            to="/line/football/match"
          )
            span.text UFC
            span.count 1
      .navbar-category
        .navbar-item(
          v-for="(category, index) in sports"
          :key="index"
          :class="{ active: isCurrCategory(category), disabled: !matches.length }"
        )
          button.item-control(
            @click="toggleSubnavbar(category)"
          )
            i.icon(
              :class="`icon-${category.name}`"
            )
            span.text {{ category.title }}
            span.count {{ matches.length }}
    .subnavbar(
      v-show="isOpenSubnavbar"
    )
      button.btn-back(
        @click="closeSubnavbar"
      )
        i.icon-left
        span.text Виды спорта
      template(
        v-if="currCategory"
      )
        .subnavbar-hint
          i.icon(
            v-if="currCategory.name"
            :class="`icon-${currCategory.name}`"
          )
          span.text {{ currCategory.title }}
          span.count {{ matches.length }}
        .subnavbar-item(
          v-for="(country, index) in countries"
          :key="index"
          :class="{ active: isCurrCountry(country) }"
        )
          button.item-control(
            @click="setCurrCountry(country)"
          )
            img.img(
              :src="country.img"
              :alt="country.title"
            )
            span.text {{ country.title }}
            i.icon-down
          .item-content(
            v-if="isCurrCountry(country)"
          )
            router-link.nav-link(
              v-for="(match, index) in matches"
              :key="index"
              :to="`/line/${currCategory.name}/match`"
            ) {{ match.title }}
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    props: ['category'],
    data: () => ({
      isOpenSubnavbar: false,
      currCategory: null,
      currCountry: null,
      countries: [
        {
          title: 'Канада',
          img: '/image/country/canada.svg'
        },
        {
          title: 'Россия',
          img: '/image/country/russia.svg'
        },
        {
          title: 'США',
          img: '/image/country/usa.svg'
        }
      ],
      matches: [
        {
          title: 'Барселона — Атлетико Мадрит'
        },
        {
          title: 'Барселона А — Атлетико Мадрит А'
        },
        {
          title: 'Барселона Б — Атлетико Мадрит Б'
        },
        {
          title: 'Барселона В — Атлетико Мадрит В'
        }
      ]
    }),
    computed: {
      ...mapState([
        'sports'
      ]),
      ...mapGetters([
        'isDesktop'
      ])
    },
    watch: {
      isDesktop(newValue, oldValue) {
        if (this.isDesktop) this.$router.push('/')
      }
    },
    mounted() {
      if (this.isDesktop) this.$router.replace('/404')
      if (this.category) {
        const category = this.sports.find(item => {
          return this.category == item.name
        })
        this.openSubnavbar(category)
      }
    },
    methods: {
      toggleSubnavbar(value) {
        if (!this.isCurrCategory(value)) {
          this.openSubnavbar(value)
        } else {
          this.closeSubnavbar(value)
        }
      },
      openSubnavbar(value) {
        this.isOpenSubnavbar = true
        if (!this.isCurrCategory(value)) this.currCountry = null
        this.currCategory = value
      },
      closeSubnavbar(value) {
        this.isOpenSubnavbar = false
        this.currCountry = null
        this.currCategory = null
      },
      isCurrCategory(value) {
        return Object.is(this.currCategory, value)
      },
      isCurrCountry(value) {
        return Object.is(this.currCountry, value)
      },
      setCurrCountry(value) {
        if (!this.isCurrCountry(value)) {
          this.currCountry = value
        } else {
          this.currCountry = null
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .line {
    flex: 0 0 100%;
    max-width: 100%;
    user-select: none;
    .navbar {
      padding: 0 8px;
      background: $swamp;
      border-radius: 10px;
      .navbar-item {
        position: relative;
        min-width: 100%;
        user-select: none;
        overflow: hidden;
        border-radius: 10px;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0;
        }
        &.disabled {
          pointer-events: none;
          opacity: .4;
        }
        &.active {
          .item-control {
            background: $redGradient;
          }
        }
        .item-control,
        .item-link {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: flex-start;
          padding: 8px;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          background: transparent;
          cursor: pointer;
          text-decoration: none;
          color: $white;
          &:hover {
            background: $redGradient;
          }
          .icon {
            font-size: 14px;
            margin-right: 15px;
          }
          .count {
            font-weight: 500;
            margin-right: 4px;
            margin-left: auto;
          }
        }
      }
    }
    .subnavbar {
      .btn-back {
        padding: 0 5px;
        margin-bottom: 15px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        color: $white;
        .icon-left {
          margin-right: 6px;
          color: $tabasco;
        }
      }
      .subnavbar-hint {
        padding: 0 5px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        .icon {
          margin-right: 15px;
          font-size: 24px;
        }
        .text {
          max-width: calc(100% - 74px);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .count {
          margin-left: 15px;
          color: $raven;
        }
      }
      .subnavbar-item {
        margin-bottom: 8px;
        overflow: hidden;
        border-radius: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        &.active {
          .item-control .icon-down {
            top: calc(50% - 7px);
            transform: rotate(180deg);
          }
        }
        .item-control {
          display: flex;
          width: 100%;
          padding-right: 35px;
          align-items: center;
          justify-content: flex-start;
          padding: 8px;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          background: $swamp;
          cursor: pointer;
          .img {
            display: block;
            width: 20px;
            height: 20px;
            margin-right: 15px;
            box-shadow: 0px 7px 15px rgba(93, 6, 3, .4);
          }
          .text {
            max-width: calc(100% - 74px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .icon-down {
            position: absolute;
            top: calc(50% - 4px);
            right: 16px;
            font-size: 12px;
            color: $tabasco;
          }
        }
        .item-content {
          padding: 0 8px;
          color: $swamp;
          background-color: $white;
          overflow: hidden;
        }
      }
    }
    .navbar-category {
      padding-top: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid $mirage;
      &:last-child {
        border-bottom: none;
      }
    }
    .nav-link,
    .button-country {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 8px;
      margin-top: 8px;
      margin-bottom: 8px;
      height: 34px;
      font-weight: 600;
      font-size: 12px;
      color: $swamp;
      background: $catskillWhite;
      border-radius: 10px;
      text-decoration: none;
      &:hover {
        color: $white;
        background: $redGradient;
      }
      .img {
        display: block;
        width: 14px;
        height: 14px;
        margin-right: 10px;
        border-radius: 50%;
        box-shadow: 0px 7px 15px rgba($crimson, .4);
      }
      .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .button-country {
      font-size: 14px;
      &.active {
        color: $white;
        background: $redGradient;
      }
    }
  }
</style>
