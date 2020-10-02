<template lang="pug">
  .layout(
    v-if="value"
    @click.self="$emit('input', !value)"
  )
    .alert
      .alert-head
        .title Вывод приостановлен!
        .icon-close(
          @click="$emit('input', !value)"
        )
      .alert-body
        p Вывод доступен только пользоавтелям прошедшим верификацию, а также сделавшим ставку всего депозита с коэффициентом не ниже, чем 1.2 Подробности читайте  в разделе <a href="/">«Правила»</a>
</template>

<script>
  export default {
    props: ['value']
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .layout {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 500;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: rgba(0,0,0,.4);
    overflow: auto;
  }
  .alert {
    max-width: 580px;
    border-radius: 6px;
    overflow: hidden;
    .alert-head {
      position: relative;
      padding: 16px;
      color: $white;
      background: $redBerry url('/image/bgalert.png') no-repeat 0 0;
      .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 32px;
        text-align: center;
      }
      .icon-close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        cursor: pointer;
        font-size: 12px;
        color: #C68D8B;
      }
    }
    .alert-body {
      padding: 16px;
      color: $text;
      background-color: $white;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      p {
        margin-top: 0;
        margin-bottom: 16px;
      }
      a {
        color: $redBerry;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .alert {
      border-radius: 10px;
      .alert-head {
        padding: 23px;
        .title {
          font-size: 26px;
          line-height: 46px;
        }
        .icon-close {
          padding: 14px;
          font-size: 16px;
        }
      }
      .alert-body {
        padding: 23px;
        font-size: 18px;
        line-height: 30px;
        p {
          margin-bottom: 23px;
        }
      }
    }
  }
</style>
