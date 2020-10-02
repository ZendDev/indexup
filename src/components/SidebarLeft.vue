<template lang="pug">
  aside.sidebar-left
    .navbar
      .navbar-search
        .search-filter
          button.search-filter-all.active
            span Все
          .search-filter-time(
            @click="listOpen = !listOpen"
          )
            span Время
            i.icon-down
            .list(
              :class="{ open: listOpen }"
            )
              button.item Ближайший час
              button.item Ближайшие 2 часа
              button.item Ближайшие 4 часа
              button.item Ближайшие 6 часов
              button.item Ближайшие 12 часов
              button.item Ближайший день
          .search-filter-date
            span Дата
            i.icon-down
        .search-field(
          :class="{ active: search }"
        )
          i.icon-search
          input.search-field-control(
            v-model="search"
            type="text"
            placeholder="Поиск"
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
          .item-content(
            v-if="isCurrCategory(category)"
          )
            .wrap
              .item-hint Страны
              button.button-country(
                v-for="(country, index) in countries"
                :key="index"
                :class="{ active: isCurrCountry(country) }"
                @click="setCurrCountry(country)"
              )
                img.img(
                  :src="country.img"
                  :alt="country.title"
                )
                span.text {{ country.title }}
            .wrap(
              v-if="currCountry"
            )
              .item-hint Турниры
              router-link.nav-link(
                v-for="(match, index) in matches"
                :key="index"
                :to="`/line/${currCategory.name}/match`"
              )
                span.text {{ match.title }}
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data: () => ({
      listOpen: false,
      isOpenSubnavbar: false,
      search: '',
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
      ])
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
        if (!this.isCurrCategory(value)) {
          this.currCountry = null
        }
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

  .sidebar-left {
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

  @media (min-width: 1280px) {
    .sidebar-left {
      flex: 0 0 235px;
      max-width: 235px;
      .navbar {
        .navbar-item {
          margin-left: -8px;
          margin-right: -8px;
          .item-control,
          .item-link {
            padding: 12px 16px;
          }
          .item-content {
            padding: 0 8px;
            color: $swamp;
            background-color: $white;
            overflow: hidden;
            .wrap {
              border-bottom: 1px solid $catskillWhite;
              &:last-child {
                border-bottom: none;
              }
            }
            .item-hint {
              margin-top: 8px;
              margin-bottom: 8px;
              font-weight: 300;
              font-size: 10px;
              line-height: 10px;
            }
          }
        }
      }
      .navbar-search {
        padding-top: 8px;
        .search-filter {
          display: flex;
          .search-filter-all,
          .search-filter-time,
          .search-filter-date {
            position: relative;
            width: 100%;
            flex-basis: 0;
            flex-grow: 1;
            min-width: 0;
            max-width: 100%;
            margin-left: 8px;
            margin-bottom: 8px;
            font-weight: 600;
            font-size: 12px;
            line-height: 20px;
            color: $raven;
            border-radius: 10px;
            cursor: pointer;
            &:hover,
            &.active {
              background: $redGradient;
              color: $white;
            }
            span {
              position: relative;
            }
            .list {
              display: none;
              position: absolute;
              top: calc(100% + 5px);
              right: 0;
              padding: 8px 0;
              background-color: $white;
              box-shadow: 0px 7px 15px rgba(93,6,3,.4);
              border-radius: 5px;
              overflow: hidden;
              &.open {
                display: block;
                z-index: 500;
              }
              .item {
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
          .search-filter-all {
            padding: 7px 14px;
            margin-left: 0;
            max-width: 55px;
            background: transparent;
            border: 1px solid $mirage;
          }
          .search-filter-time,
          .search-filter-date {
            padding: 7px 16px 7px 8px;
            background: $mirage;
            border: 1px solid transparent;
            &::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              border-radius: inherit;
              background: $swamp;
            }
            .icon-down {
              position: absolute;
              top: calc(50% - 4px);
              right: 8px;
              font-size: 10px;
              pointer-events: none;
            }
          }
        }
        .search-field {
          position: relative;
          &.active {
            .icon-search,
            .search-field-control {
              color: $white
            }
          }
          .search-field-control {
            padding: 13px 8px 13px 40px;
            width: 100%;
            height: 48px;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: $raven;
            background-color: transparent;
            border-top: 1px solid $mirage;
            border-right: 1px solid transparent;
            border-bottom: 1px solid $mirage;
            border-left: 1px solid transparent;
            &:focus {
              outline: 0;
            }
            &::placeholder {
              color: $raven;
            }
          }
          .icon-search {
            position: absolute;
            top: calc(50% - 8px);
            left: 8px;
            font-size: 16px;
            color: $raven;
            pointer-events: none;
          }
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .sidebar-left {
      flex: 0 0 359px;
      max-width: 359px;
      .navbar {
        .navbar-item {
          margin: 0;
          .item-link {
            padding: 8px;
            font-size: 14px;
            line-height: 24px;
          }
          .item-control {
            padding: 8px;
            font-size: 16px;
            line-height: 32px;
            .icon {
              font-size: 20px;
              margin-right: 20px;
            }
          }
          .item-content {
            .item-hint {
              font-size: 12px;
              line-height: 12px;
            }
          }
        }
      }
      .navbar-search {
        .search-filter {
          .search-filter-all,
          .search-filter-time,
          .search-filter-date {
            font-size: 14px;
          }
          .search-filter-all {
            max-width: 74px;
          }
          .search-filter-time,
          .search-filter-date {
            padding: 7px 36px 7px 16px;
            .icon-down {
              top: calc(50% - 5px);
              right: 16px;
              font-size: 12px;
            }
          }
        }
      }
      .nav-link {
        &:not(button) {
          font-size: 14px;
        }
        .img {
          margin-right: 15px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
</style>
