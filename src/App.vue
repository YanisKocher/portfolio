<template>
  <div class="position-relative h-100">
    <div class="container navbar_container position-fixed start-50">
      <NavBar />
    </div>
    <section id="hey" class="vh-100 position-relative">
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
    </section>




    <section id="parcours" class="vh-100 bg-danger">section 2</section>
    <section id="technologies" class="vh-100 bg-success">section 3</section>
    <section id="projets" class="vh-100 bg-primary">section 1</section>
    <section id="contacts" class="vh-100 bg-danger">section 2</section>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* .section_container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

section {
  scroll-snap-align: start;
} */

</style>
