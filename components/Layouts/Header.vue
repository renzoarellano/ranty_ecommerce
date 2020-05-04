<template>
  <header class="col-12">
    <div class="brand-name">
      <nuxt-link to="/">
        <img class="logoIMG" :src="logo" :alt="name" />
      </nuxt-link>
    </div>
    <div
      class="drawer-toggle"
      role="button"
      @click="$store.dispatch('toggleSidebar')"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="app-links col-6 col-md-11 col-lg-10">
      <app-links></app-links>
    </div>
  </header>
</template>
<script>
import AppLinks from '~/components/Layouts/appLinks'
export default {
  components: { AppLinks },
  props: {
    logo: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  background-color: #333;
  position: fixed;
  width: 100%;
  z-index: 99;
}
.app-links {
  justify-self: end;
}
.brand-name {
  margin: 0 10px;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: Open Sans, sans-serif;
}
.brand-name a {
  text-decoration: none;
  color: white;
}
.drawer-toggle .bar {
  width: 90%;
  height: 3px;
  background-color: white;
}
.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 45px;
  padding-right: 10px;
  cursor: pointer;
}
.logoIMG {
  max-width: 150px;
  max-height: 65px;
  margin: auto;
}
@media (max-width: 767px) {
  header {
    padding: 0 16px;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
  .logoIMG {
    max-height: 40px;
  }
}
@media (min-width: 768px) {
  header {
    padding: 8px 32px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
</style>
