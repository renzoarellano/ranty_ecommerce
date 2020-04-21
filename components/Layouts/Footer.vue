<template>
  <footer class="footerStyle">
    <div class="app-container">
      <div class="copyright">&copy; Ranty 2020</div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
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
.footerStyle {
  width: 100%;
  background-color: #232323;
  padding: 10px;
}
.copyright {
  text-align: center;
  color: white;
  font-size: 11px;
  font-family: Roboto;
  font-weight: 300;
}
</style>
