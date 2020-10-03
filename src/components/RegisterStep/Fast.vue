<template>
<div class="popup__form">
    <form action="#">
    <label class="ui-label">Имя</label>
    <div class="ui-field">
        <input class="ui-input is-success" type="text" placeholder="Александр" />
    </div>
    <label class="ui-label">Валюта</label>
    <div class="ui-field">
        <select class="ui-select">
            <option>Рубли</option>
            <option>Доллары</option>
        </select>
    </div>
    <label class="ui-label">Промо код</label>
    <div class="ui-field ui-field_group">
        <input class="ui-input" type="text" />
        <button class="ui-cupon">Применить</button>
    </div>
    <label class="ui-check">
        <input class="ui-check__input" type="checkbox"/>
        <span class="ui-check__checkbox">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.231515 6.78151C-0.109918 6.42012 -0.0672389 5.83287 0.316873 5.51665C0.658306 5.15527 1.21313 5.20044 1.51189 5.607L3.43245 7.95602L8.89537 0.773442C9.57823 -0.130027 10.4318 0.457228 9.74895 1.40587L4.20067 9.94365C4.15799 9.98883 4.11531 10.034 4.07263 10.0792C3.68852 10.4406 3.17637 10.3954 2.83494 9.98883L0.231515 6.78151Z" fill="currentColor"/>
            </svg>
        </span>
        Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с <a href="#">правилами</a> и <a href="#">политикой конфиденциальности</a> компании, а также подтверждаете свое совершеннолетие
    </label>
    <button class="ui-btn ui-btn--red ui-btn--fullwidth"
        @click.prevent="setOpenPopupConfirmPhone(true)">Зарегистрироваться</button>
    </form>
</div>  
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: ['value'],
    methods: {
      ...mapMutations([
        'setOpenPopupConfirmPhone'
      ])
    }
}
</script>

<style>

</style>