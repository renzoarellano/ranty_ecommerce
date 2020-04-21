<template>
  <div class="row">
    <ul class="nav-list col-12 col-md-8 np">
      <li class="nav-item"><nuxt-link to="/">Inicio</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/about">Nosotros</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/services">Catálogo</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/contact">Contacto</nuxt-link></li>
    </ul>
    <ul class="nav-list col-12 col-md-4 np">
      <li class="nav-item">
        <nuxt-link to="/login"
          >Iniciar Sesión
          <font-awesome-icon class="userIcon" :icon="['fas', 'user']"
        /></nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-item {
  margin: 0 10px;
}
.nav-item a {
  text-decoration: none;
  color: #fefefe;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
.nav-item a:hover,
.nav-item a:active {
  color: #b4b4b4;
  transition: 0.4;
}
@media (max-width: 767px) {
  .nav-list {
    display: block;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }
}
.userIcon {
  color: white;
  margin-left: 10px;
  font-size: 20px;
}
</style>
