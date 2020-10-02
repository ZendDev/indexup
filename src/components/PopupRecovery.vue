<template lang="pug">
  .popup(v-if="value" )
    button.popup__close(@click="$emit('input', !value)")
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 19.9L19.9 1M1 1L19.9 19.9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    .popup__content
      
      figure.popup__logo
        img(src="/image/logo-indexup.svg" alt="")

      p.popup__caption Восстановление пароля

      .popup__form
        form(action="#")

          .ui-confirm

            .ui-confirm__email(v-if="isRecovery")
              label.ui-label E-mail
              .ui-field
                input(type="email" placeholder="ramis@gmail.ru").ui-input

              .ui-spacer-10

              button.ui-btn.ui-btn--red.ui-btn--fullwidth(@click.prevent="isRecovery = !isRecovery") Выслать ссылку
            .ui-confirm__password(v-else)

              label.ui-label Введите новый пароль
              .ui-field
                span.ui-visibility
                  <svg class="icon-invisible" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 469.44 469.44">
                    <path fill="currentColor" d="M231.147,160.373l67.2,67.2l0.32-3.52c0-35.307-28.693-64-64-64L231.147,160.373z"/>
                    <path fill="currentColor" d="M234.667,117.387c58.88,0,106.667,47.787,106.667,106.667c0,13.76-2.773,26.88-7.573,38.933l62.4,62.4c32.213-26.88,57.6-61.653,73.28-101.333c-37.013-93.653-128-160-234.773-160c-29.867,0-58.453,5.333-85.013,14.933l46.08,45.973C207.787,120.267,220.907,117.387,234.667,117.387z"/>
                    <path fill="currentColor" d="M21.333,59.253l48.64,48.64l9.707,9.707C44.48,145.12,16.64,181.707,0,224.053c36.907,93.653,128,160,234.667,160c33.067,0,64.64-6.4,93.547-18.027l9.067,9.067l62.187,62.293l27.2-27.093L48.533,32.053L21.333,59.253z M139.307,177.12l32.96,32.96c-0.96,4.587-1.6,9.173-1.6,13.973c0,35.307,28.693,64,64,64c4.8,0,9.387-0.64,13.867-1.6l32.96,32.96c-14.187,7.04-29.973,11.307-46.827,11.307C175.787,330.72,128,282.933,128,224.053C128,207.2,132.267,191.413,139.307,177.12z"/>
                  </svg>
                input(type="password" placeholder="ramis@gmail.ru").ui-input
              label.ui-label Повторите новый пароль
              .ui-field
                span.ui-visibility
                  <svg class="icon-invisible" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 469.44 469.44">
                    <path fill="currentColor" d="M231.147,160.373l67.2,67.2l0.32-3.52c0-35.307-28.693-64-64-64L231.147,160.373z"/>
                    <path fill="currentColor" d="M234.667,117.387c58.88,0,106.667,47.787,106.667,106.667c0,13.76-2.773,26.88-7.573,38.933l62.4,62.4c32.213-26.88,57.6-61.653,73.28-101.333c-37.013-93.653-128-160-234.773-160c-29.867,0-58.453,5.333-85.013,14.933l46.08,45.973C207.787,120.267,220.907,117.387,234.667,117.387z"/>
                    <path fill="currentColor" d="M21.333,59.253l48.64,48.64l9.707,9.707C44.48,145.12,16.64,181.707,0,224.053c36.907,93.653,128,160,234.667,160c33.067,0,64.64-6.4,93.547-18.027l9.067,9.067l62.187,62.293l27.2-27.093L48.533,32.053L21.333,59.253z M139.307,177.12l32.96,32.96c-0.96,4.587-1.6,9.173-1.6,13.973c0,35.307,28.693,64,64,64c4.8,0,9.387-0.64,13.867-1.6l32.96,32.96c-14.187,7.04-29.973,11.307-46.827,11.307C175.787,330.72,128,282.933,128,224.053C128,207.2,132.267,191.413,139.307,177.12z"/>
                  </svg>
                input(type="password" placeholder="ramis@gmail.ru").ui-input

              .ui-spacer-10

              button.ui-btn.ui-btn--red.ui-btn--fullwidth(@click.prevent="isRecovery = !isRecovery") Сохранить

          
 
</template>

<script>
  export default {
    data: () => ({
      isRecovery: true
    }),
    props: ['value']

  }
</script>

