<template>
  <div class="app-container">
    <Header :logo="logoLink" :name="brandName" />

    <sideBar />

    <div class="app-content">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Layouts/Header'
import Footer from '~/components/Layouts/Footer'
import sideBar from '~/components/Layouts/sideBar'

export default {
  components: {
    Header,
    Footer,
    sideBar
  },
  data() {
    return {
      logoLink: '',
      brandName: ''
    }
  },
  mounted() {
    this.logoLink =
      process.env.imagesUrl + this.$store.getters.getBrandData.logo
    this.brandName = this.$store.getters.getBrandData.name
  }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
.app-container {
  height: 100%;
  position: relative;
  grid-template: auto 1fr auto / 1fr;
}
.app-content {
  min-height: 100vh;
  align-items: center;
  justify-items: center;
}
</style>
