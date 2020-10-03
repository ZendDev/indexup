<template>
<div class="popup" v-if="value">
   <button class="popup__close" @click="$emit('input', !value)">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1 19.9L19.9 1M1 1L19.9 19.9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
   </button>
   <div class="popup__content">
      <figure class="popup__logo">
         <img src="/image/logo-indexup.svg" alt="" />
      </figure>
      <p class="popup__caption">Зарегистрируй аккаунт и получи <br/> <mark>+200%</mark> на первый депозит!</p>
      <ul class="register-type">
        <li v-bind:class="{active: activeReg === 1}">
          <a v-on:click.prevent="activeReg = 1" href="#">Быстро в 1 клик</a>
        </li>
        <li v-bind:class="{active: activeReg === 2}">
          <a v-on:click.prevent="activeReg = 2" href="#">Через соц. сети</a>
        </li>
        <li v-bind:class="{active: activeReg === 3}">
          <a v-on:click.prevent="activeReg = 3" href="#">Стандарт</a>
        </li>
      </ul>
      <Fast v-if="activeReg === 1" />
      <Social v-if="activeReg === 2" />
      <Standart v-if="activeReg === 3" />
   </div>
</div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import Standart from "@/components/RegisterStep/Standart.vue"
  import Fast from "@/components/RegisterStep/Fast.vue"
  import Social from "@/components/RegisterStep/Social.vue"
  export default {
    props: ['value'],
    components: {
      Standart,
      Fast,
      Social
    },
    data: () => ({
      activeReg: 1,
      isActive: false
    }),
    methods: {
      ...mapMutations([
        'setOpenPopupConfirmPhone'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @media (max-width: 500px) {
    .popup__caption{
      font-size: 20px;
    }
    .register-type li a{
      font-size:14px;
    }
    .register-type li:first-child{
      margin-left:0;
    }
    .register-type li:last-child{
      margin-right:0;
    }
    .ui-cupon{
      height:40px;
    }
    .ui-field_group input {
        width: 190px;
    }
  }
</style>

