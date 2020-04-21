<template>
  <swiper ref="mySwiper" class="sliderContainer" :options="swiperOptions">
    <swiper-slide>
      <img
        class="slideImage"
        src="~/assets/images/banner.jpg"
        alt="Banner Ejemplo"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="slideImage"
        src="~/assets/images/banner.jpg"
        alt="Banner Ejemplo"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="slideImage"
        src="~/assets/images/banner.jpg"
        alt="Banner Ejemplo"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="slideImage"
        src="~/assets/images/banner.jpg"
        alt="Banner Ejemplo"
      />
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: 'Carrousel',
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: {
          enabled: true
        },
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(1, 300, false)
  }
}
</script>

<style scoped>
.slideImage {
  width: 100%;
  max-height: 800px;
}
.sliderContainer {
  width: 100%;
}
</style>
