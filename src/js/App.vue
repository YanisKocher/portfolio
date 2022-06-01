<template>
  <div class="container navbar_container position-fixed start-50">
    <NavBar />
  </div>
  <div id="pagepiling" class="vh-100">
    <!-- First section -->
    <div id="hey" class="section">
      <div class="position-relative h-100">
        <div class="filter position-absolute start-0 top-0 vh-100 w-100"></div>
        <div class="col-6 position-absolute end-0">
          <img src="../img/kocher_yanis.jpg" alt="" class="vh-100 w-100">
        </div>

        <div class="container h-100 d-flex align-items-center">
          <h1 class="text-white text-start">
            <span class="d-block">Je suis</span>
            Yanis Kocher
            <span class="d-block text-primary">Développeur full-stack</span>
          </h1>
        </div>
      </div>
    </div>

    <!-- Technology section -->
    <div id="technologies" class="section bg-info">Some section</div>

    <!-- Route section -->
    <div id="parcours" class="section bg-danger">Some section</div>
    
    <!-- Projects section -->
    <div id="projets" class="section bg-light">Some section</div>
    
    <!-- Contact section -->
    <div id="contact" class="section">
      <div class="container">
        <h2>Coordonnées</h2>
        <ul class="p-0">
          <li class="mb-1"><i class="fas fa-at me-2 text-center"></i>Email : <a href="mailto:contact@yaniskocher.fr">contact@yaniskocher.fr</a></li>
          <li class="mb-1"><i class="fas fa-phone-alt me-2 text-center"></i>Téléphone : <a href="tel:0781999003">07.81.99.90.03</a></li>
          <li class="mb-1">
            <i class="fas fa-map-marker-alt me-2 text-center"></i>
            <p class="d-inline-block m-0">34, rue du Général de Gaulle</p>
            <p class="m-0 ps-4">67640 Lipsheim</p>  
          </li>
          <li class="mb-1"><i class="fab fa-github me-2 text-center"></i>GitHub : <a href="https://github.com/YanisKocher">YanisKocher</a></li>
          <li><i class="fab fa-linkedin-in me-2 text-center"></i>Linkedin : <a href="https://www.linkedin.com/in/yanis-kocher-683492184/">Yanis Kocher</a></li>
        </ul>

        <h2 class="mt-4">Envoyer un message</h2>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import ContactForm from './components/ContactForm.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    ContactForm
  }
}
</script>