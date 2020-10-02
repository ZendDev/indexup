import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openAlertAccess: false,
    openPopupRegistration: false,
    openPopupRecovery: false,
    openPopupConfirmPhone: false,
    windowWidth: null,
    cart: [],
    matches: [
      {
        live: true,
        time: '21:00',
        title: 'Испания. Премьер-Лига',
        url: '/line/football/match',
        teams: [
          {
            image: '/image/team1.svg',
            title: 'Барселона'
          },
          {
            image: '/image/team2.svg',
            title: 'Атлетико Мадрид'
          }
        ],
        rates: {
          result: ['2.1', '1.3', '1.3'],
          double: ['2.5', '3.5', '2.5'],
          total: ['3.1', '4.5', '9.7'],
          handicap: ['6.4', '4.4', '6.4']
        },
        rusRates: {
          result: ['1.1', '1.3', '1.3'],
          double: ['1.5', '2.5', '1.5'],
          total: ['2.1', '2.5', '6.7'],
          handicap: ['4.4', '3.4', '4.4']
        }
      },
      {
        live: false,
        time: '16:00',
        title: 'Премьер-Лига. Испания.',
        url: '/line/football/match',
        teams: [
          {
            image: '/image/team2.svg',
            title: 'Атлетико Мадрид'
          },
          {
            image: '/image/team1.svg',
            title: 'Барселона'
          }
        ],
        rates: {
          result: ['3.1', '2.3', '4.3'],
          double: ['2.5', '3.5', '2.5'],
          total: ['3.1', '4.5', '9.7'],
          handicap: ['6.4', '4.4', '6.4']
        },
        rusRates: {
          result: ['2.1', '1.3', '3.3'],
          double: ['1.5', '2.5', '1.5'],
          total: ['2.1', '3.5', '6.7'],
          handicap: ['4.4', '3.4', '4.4']
        }
      },
      {
        live: false,
        time: '17:00',
        title: 'Премьер-Лига. Испания.',
        url: '/line/football/match',
        teams: [
          {
            image: '/image/team2.svg',
            title: 'Атлетико Мадрид'
          },
          {
            image: '/image/team1.svg',
            title: 'Барселона'
          }
        ],
        rates: {
          result: ['3.1', '2.3', '4.3'],
          double: ['2.5', '3.5', '2.5'],
          total: ['3.1', '4.5', '9.7'],
          handicap: ['6.4', '4.4', '6.4']
        },
        rusRates: {
          result: ['2.1', '1.3', '3.3'],
          double: ['1.5', '2.5', '1.5'],
          total: ['2.1', '3.5', '6.7'],
          handicap: ['4.4', '3.4', '4.4']
        }
      }
    ],
    sports: [
      {
        name: 'football',
        title: 'Футбол',
        color: '#03AD00'
      },
      {
        name: 'hockey',
        title: 'Хоккей',
        color: '#7DE1E9'
      },
      {
        name: 'tennis',
        title: 'Теннис',
        color: '#C9DF0B'
      },
      {
        name: 'esports',
        title: 'Киберспорт',
        color: '#6112EA'
      },
      {
        name: 'mma',
        title: 'ММА',
        color: '#B2352F'
      },
      {
        name: 'volleyball',
        title: 'Волейбол',
        color: '#FFC000'
      },
      {
        name: 'american-football',
        title: 'Американский футбол',
        color: '#00AB61'
      }
    ]
  },
  getters: {
    isDesktop(state) {
      return state.windowWidth >= 1280
    },
    isTablet(getters) {
      return !getters.isMobile && !getters.isDesktop
    },
    isMobile(state) {
      return state.windowWidth <= 767
    },
  },

  mutations: {
    setOpenAlertAccess(state, open) {
      state.openAlertAccess = open
    },
    setOpenPopupRegistration(state, open) {
      state.openPopupRegistration = open


      if ( state.openPopupRegistration || state.openPopupRecovery || state.openPopupConfirmPhone) {
        document.documentElement.classList.add('is-popup-open');
      } else {
        document.documentElement.classList.remove('is-popup-open');
      }
    },
    setOpenPopupRecovery(state, open) {
      state.openPopupRecovery = open
      if ( state.openPopupRegistration || state.openPopupRecovery || state.openPopupConfirmPhone) {
        document.documentElement.classList.add('is-popup-open');
      } else {
        document.documentElement.classList.remove('is-popup-open');
      }
    },
    setOpenPopupConfirmPhone(state, open) {
      state.openPopupConfirmPhone = open

      if ( state.openPopupRegistration || state.openPopupRecovery || state.openPopupConfirmPhone) {
        document.documentElement.classList.add('is-popup-open');
      } else {
        document.documentElement.classList.remove('is-popup-open');
      }
    },
    setWindowWidth(state, width) {
      state.windowWidth = width
    },
    addToCart(state, item) {
      if (!item) item = {}
      state.cart.push(item)
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
    getWindowWidth({ getters, commit }) {
      const windowWidth = window.innerWidth
      const isDesktop = windowWidth >= 1280
      commit('setWindowWidth', windowWidth)
    }
  }
})
