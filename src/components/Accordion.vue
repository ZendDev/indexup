<template lang="pug">
  .accordion(
    :class="{ open: isOpen }"
  )
    .accordion-control(
      @click="toggle"
    )
      .title(
        v-if="title"
      ) {{ title }}
      .icon-down
    .accordion-content
      slot
</template>

<script>
  export default {
    props: {
      title: String,
      open: Boolean
    },
    data: () => ({
      isOpen: false
    }),
    mounted() {
      this.isOpen = this.open
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .accordion {
    &.open {
      .accordion-control {
        border-radius: 6px 6px 0 0;
        .icon-down {
          transform: rotate(180deg);
        }
      }
      .accordion-content {
        display: block;
      }
    }
    .accordion-control {
      position: relative;
      display: flex;
      padding: 10px 32px 10px 12px;
      background-color: $swamp;
      user-select: none;
      cursor: pointer;
      border-radius: 6px;
      .title {
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon-down {
        position: absolute;
        top: calc(50% - 6px);
        right: 20px;
        font-size: 12px;
        color: $tabasco;
      }
    }
    .accordion-content {
      position: relative;
      display: none;
      padding: 10px 12px;
      background-color: $white;
      color: $text;
      border-radius: 0 0 6px 6px;
    }
  }

  @media (min-width: 768px) {
    .accordion {
      &.open {
        .accordion-control {
          border-radius: 10px 10px 0 0;
        }
      }
      .accordion-control {
        padding: 10px 40px 10px 20px;
        border-radius: 10px;
        .title {
          font-size: 16px;
        }
      }
      .accordion-content {
        padding: 8px 12px;
        border-radius: 0 0 10px 10px;
      }
    }
  }

  // Edits

  @media (min-width: 1280px) and (max-width: 1400px) {
    
    .accordion {
      .accordion-content {
        padding: 8px 3px 3px;
      }
    }
    
  }

</style>
