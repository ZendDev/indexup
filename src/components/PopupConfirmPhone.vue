<template lang="pug">
  .popup(v-if="value" )
    button.popup__close(@click="$emit('input', !value)")
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 19.9L19.9 1M1 1L19.9 19.9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    .popup__content
      
      figure.popup__logo
        img(src="/image/logo-indexup.svg" alt="")

      p.popup__caption Подтверждение телефона

      .popup__form
        form(action="#")

          label.ui-label Код из смс
          .ui-sms
            input(type="text" placeholder="").ui-input
            button.ui-btn.ui-btn--grey Получить код
            
          button.ui-btn.ui-btn--red.ui-btn--fullwidth Подтвердить номер телефона

      .popup__stopwatch
        p.ui-stopwatch #[mark 00:38] Подождите немного, прежде чем запросить новый код

 
</template>

<script>
  export default {
    props: ['value']

  }
</script>

