<template>
  <div class="container navbar_container position-fixed start-50">
    <NavBar />
  </div>
  <div id="pagepiling" class="vh-100">
    <!-- First section -->
    <div id="hey" class="section">
      <div class="filter position-absolute start-0 top-0 vh-100 w-100"></div>
      <div class="col-6 position-absolute end-0">
        <img src="./img/kocher_yanis.jpg" alt="" class="vh-100 w-100">
      </div>

      <div class="container h-100 d-flex align-items-center">
        <h1 class="text-white text-start">
          <span class="d-block">Je suis</span>
          Yanis Kocher
          <span class="d-block text-primary">Développeur full-stack</span>
        </h1>
      </div>
    </div>

    <!-- Technology section -->
    <div id="technologies" class="section bg-info">Some section</div>

    <!-- Route section -->
    <div id="parcours" class="section bg-danger">Some section</div>
    
    <!-- Projects section -->
    <div id="projets" class="section bg-light">Some section</div>
    
    <!-- Contact section -->
    <div id="contact" class="section bg-warning">Some section</div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>