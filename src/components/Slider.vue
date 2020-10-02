<template lang="pug">
  .slider(
    v-if="!isMobile"
  )
    .slides(
      :class="{'move-left': moveLeft, 'move-right': moveRight}"
    )
      .slide(
        v-for="(item, index) in items"
        :class="{curr: isCurr(index), next: isNext(index), prev: isPrev(index)}"
      )
        router-link(
          to="/"
        )
          img.img(
            :src="item.image"
            alt=""
          )
    .control
      .dots
        .dot(
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index == curr }"
          @click="slide(index, 400)"
        )
      .prev(
        @click="prev"
      )
        .icon-left
      .next(
        @click="next"
      )
        .icon-right
  .slider(
    v-else
  )
    swipe.slides(
      :options="{startSlide: 0, speed: 400, auto: 4000, callback: setCurr}"
    )
      swipe-item.slide(
        v-for="(item, index) in items"
        :key="index"
      )
        router-link(
          to="/"
        )
          img.img(
            :src="item.image"
            alt=""
          )
    .control
      .dots
        .dot(
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index == curr }"
          @click="swipeSlide(index, 400)"
        )
      .prev(
        @click="swipePrev"
      )
        .icon-left
      .next(
        @click="swipeNext"
      )
        .icon-right
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data: () => ({
      curr: 0,
      moveLeft: false,
      moveRight: false,
      animated: false,
      items: [
        {
          image: '/image/slide.png'
        },
        {
          image: '/image/uTvHTFj.jpeg'
        },
        {
          image: '/image/slide.png'
        },
        {
          image: '/image/uTvHTFj.jpeg'
        }
      ]
    }),
    computed: {
      ...mapGetters([
        'isMobile'
      ])
    },
    methods: {
      setCurr(index, slide) {
        this.curr = index
      },
      swipeSlide(index, duration) {
        this.$nextTick(() => {
          this.$children[0].slide(index, duration)
        })
      },
      swipePrev() {
        this.$nextTick(() => {
          this.$children[0].prev()
        })
      },
      swipeNext() {
        this.$nextTick(() => {
          this.$children[0].next()
        })
      },
      isCurr(index) {
        return index == this.curr
      },
      isPrev(index) {
        let prev
        if (this.curr > 0) {
          prev = this.curr - 1
        } else {
          prev = this.items.length - 1
        }
        return prev == index
      },
      isNext(index) {
        let next
        if (this.curr < this.items.length - 1) {
          next = this.curr + 1
        } else {
          next = 0
        }
        return next == index
      },
      slide(index, duration) {
        this.$nextTick(() => {
          this.$children[0].slide(index, duration)
        })
      },
      animate(move) {
        this.animated = true
        if (move == 'left') this.moveLeft = true
        if (move == 'right') this.moveRight = true
        setTimeout(() => {
          this.animated = false
          this.moveLeft = false
          this.moveRight = false
        }, 1000)
      },
      prev() {
        if (!this.animated) {
          if (this.curr > 0) {
            --this.curr
          } else {
            this.curr = this.items.length - 1
          }
          this.animate('right')
        }
      },
      next() {
        if (!this.animated) {
          if (this.curr < this.items.length - 1) {
            ++this.curr
          } else {
            this.curr = 0
          }
          this.animate('left')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/_variables.scss';

  .slider {
    position: relative;
    width: 100%;
    margin: 0 auto 5px;
    .slides {
      position: relative;
      z-index: 1;
      width: 100%;
      overflow: hidden;
      .slide {
        .img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
    .control {
      text-align: center;
    }
    .prev,
    .next {
      display: none;
    }
    .dots {
      display: inline-flex;
      padding: 5px;
      .dot {
        margin: 5px;
        width: 10px;
        height: 10px;
        background: #011520;
        border-radius: 50%;
        cursor: pointer;
        &.active {
          background: $redGradient;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .slider {
      position: relative;
      max-width: 740px;
      margin-bottom: 12px;
      .slides {
        position: relative;
        width: 100%;
        height: 208px;
        &.move-left {
          .prev {
            z-index: 20;
          }
          .next {
            z-index: 10;
          }
        }
        &.move-right {
          .prev {
            z-index: 10;
          }
          .next {
            z-index: 20;
          }
        }
        .slide {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 470px;
          height: 208px;
          transform: translate(-50%,-50%) scale(.5);
          transition: transform 1s;
          .img {
            display: block;
            width: 470px;
            height: 208px;
          }
        }
        .curr {
          transform: translate(-50%,-50%) scale(1);
          z-index: 30;
        }
        .prev {
          transform: translate(calc(-50% - 200px),-50%) scale(.7);
        }
        .next {
          transform: translate(calc(-50% + 200px),-50%) scale(.7);
        }
      }
      .control {
        .prev,
        .next {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          position: absolute;
          top: calc(50% - 20px);
          z-index: 50;
          width: 40px;
          height: 40px;
          background-color: $black;
          opacity: .7;
          border-radius: 50%;
          cursor: pointer;
        }
        .prev {
          left: calc(50% - 255px);
        }
        .next {
          right: calc(50% - 255px);
        }
        .dots {
          display: none;
        }
      }
    }
  }
  @media (min-width: 1280px) {
    .slider {
      margin-bottom: 24px;
    }
  }
  @media (min-width: 1920px) {
    .slider {
      max-width: 100%;
      .slides {
        height: 310px;
        .slide {
          width: 470px;
          height: 310px;
          .img {
            display: block;
            width: 700px;
            height: 310px;
          }
        }
        .prev {
          transform: translate(calc(-50% - 250px),-50%) scale(.7);
        }
        .next {
          transform: translate(calc(-50% + 250px),-50%) scale(.7);
        }
      }
      .control {
        .prev,
        .next {
          font-size: 18px;
          top: calc(50% - 30px);
          width: 60px;
          height: 60px;
        }
        .prev {
          left: calc(50% - 380px);
        }
        .next {
          right: calc(50% - 380px);
        }
      }
    }
  }
</style>
