<template>
<div class="popup__form">
    <form action="#">
    <label class="ui-label">Имя</label>
    <div class="ui-field">
        <input class="ui-input is-success" type="text" placeholder="Александр" />
    </div>
    <label class="ui-label">Телефон</label>
    <div class="ui-field">
        <input class="ui-input is-error" type="tel" placeholder="+7 (910) 349-23-55" />
    </div>
    <span class="ui-validate">Номер телефона должен состоять из 10 цифр (ХХХ) ХХХ - ХХ - ХХ</span>
    <label class="ui-label">E-mail</label>
    <div class="ui-field">
        <input class="ui-input is-error" type="email" placeholder="ramis@gmail.ru" />
    </div>
    <span class="ui-validate">Укажите правильный email</span><label class="ui-label">Пароль</label>
    <div class="ui-field">
        <span class="ui-visibility">
            <svg class="icon-invisible" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 469.44 469.44">
                <path fill="currentColor" d="M231.147,160.373l67.2,67.2l0.32-3.52c0-35.307-28.693-64-64-64L231.147,160.373z"/>
                <path fill="currentColor" d="M234.667,117.387c58.88,0,106.667,47.787,106.667,106.667c0,13.76-2.773,26.88-7.573,38.933l62.4,62.4c32.213-26.88,57.6-61.653,73.28-101.333c-37.013-93.653-128-160-234.773-160c-29.867,0-58.453,5.333-85.013,14.933l46.08,45.973C207.787,120.267,220.907,117.387,234.667,117.387z"/>
                <path fill="currentColor" d="M21.333,59.253l48.64,48.64l9.707,9.707C44.48,145.12,16.64,181.707,0,224.053c36.907,93.653,128,160,234.667,160c33.067,0,64.64-6.4,93.547-18.027l9.067,9.067l62.187,62.293l27.2-27.093L48.533,32.053L21.333,59.253z M139.307,177.12l32.96,32.96c-0.96,4.587-1.6,9.173-1.6,13.973c0,35.307,28.693,64,64,64c4.8,0,9.387-0.64,13.867-1.6l32.96,32.96c-14.187,7.04-29.973,11.307-46.827,11.307C175.787,330.72,128,282.933,128,224.053C128,207.2,132.267,191.413,139.307,177.12z"/>
            </svg>
        </span>
        <input class="ui-input is-error" type="password" placeholder="ramis@gmail.ru" />
    </div>
    <span class="ui-validate">Минимум 8 символов, вкл. цифры и большие буквы</span>
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