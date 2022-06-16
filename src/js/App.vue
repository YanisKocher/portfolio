<template>
  <div class="container navbar_container position-fixed">
    <NavBar />
  </div>
  <div id="pagepiling" class="vh-100">
    <!-- First section -->
    <section id="hey" class="section">
      <div class="position-relative h-100">
        <div class="filter position-absolute start-0 top-0 vh-100 w-100"></div>
        <div class="col-6 position-absolute end-0">
          <img src="../img/kocher_yanis.jpg" alt="" class="vh-100 w-100">
        </div>

        <div class="container h-100 d-flex align-items-center">
          <h1 class="text-white text-start ps-2 ps-md-0">
            <span class="d-block">Je suis</span>
            Yanis Kocher
            <span class="d-block text-primary">Développeur full-stack</span>
          </h1>
        </div>
      </div>
    </section>

    <!-- Technology section -->
    <section id="technologies" class="section bg-info">Some section</section>

    <!-- Route section -->
    <section id="parcours" class="section bg-danger">Some section</section>
    
    <!-- Projects section -->
    <section id="projets" class="section bg-light">Some section</section>
    
    <!-- Contact section -->
    <section id="contact" class="section">
      <div class="container d-md-flex flex-wrap">
        <div class="col-12 col-md-4">
          <h2>Coordonnées</h2>
          <ul class="p-0">
            <li class="mb-1"><font-awesome-icon :icon="['fa-solid', 'at']" class="me-2 text-center" />Email : <a href="mailto:contact@yaniskocher.fr">contact@yaniskocher.fr</a></li>
            <li class="mb-1"><font-awesome-icon :icon="['fa-solid', 'phone']" class="me-2 text-center" />Téléphone : <a href="tel:0781999003">07.81.99.90.03</a></li>
            <li class="mb-1">
              <font-awesome-icon :icon="['fa-solid', 'map-marker-alt']" class="me-2 text-center" />
              <p class="d-inline-block m-0">34, rue du Général de Gaulle</p>
              <p class="m-0 ps-4">67640 Lipsheim</p>  
            </li>
            <li class="mb-1"><font-awesome-icon :icon="['fa-brands', 'github']" class="me-2 text-center" />GitHub : <a href="https://github.com/YanisKocher">YanisKocher</a></li>
            <li><font-awesome-icon :icon="['fa-brands', 'linkedin']" class="me-2 text-center" />Linkedin : <a href="https://www.linkedin.com/in/yanis-kocher-683492184/">Yanis Kocher</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-8">
          <h2>Envoyer un message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
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