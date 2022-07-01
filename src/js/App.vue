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
          <img src="../img/kocher_yanis.jpg" alt="Yanis KOCHER - Développeur web full-stack" class="vh-100 w-100">
        </div>

        <div class="container h-100 d-flex align-items-center">
          <h1 class="text-white text-start ps-2 ps-md-0 mb-0">
            <span class="d-block">Je suis</span>
            <strong>Yanis Kocher</strong>
            <span class="d-block text-primary"><strong>Développeur full-stack</strong></span>
          </h1>
        </div>
      </div>
    </section>

    <!-- Technology section -->
    <section id="technologies" class="section">
      <div class="container">
        <h2 class="mb-3 mb-md-5">Mes technologies</h2>
        <div class="d-flex flex-wrap">
          <div v-for="(technologie, i) in technologies" :key="i" class="col-4 mb-4">
            <div :id="technologie.icon" class="d-block mx-auto position-relative">
              <font-awesome-icon :icon="['fa-brands', technologie.icon]" class="d-block mx-auto" />
              <font-awesome-icon :icon="['fa-brands', technologie.icon]" class="position-absolute top-0 start-0" />
            </div>
            <p class="text-center m-0"><strong>{{technologie.label}}</strong></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Route section -->
    <section id="parcours" class="section">
      <div class="container">
        <h2 class="mb-3 mb-md-5">Mon parcours</h2>
        <ExperiencesPart />
      </div>
    </section>
    
    <!-- Projects section -->
    <!-- <section id="projets" class="section">Some section</section> -->
    
    <!-- Contact section -->
    <section id="contact" class="section">
      <div class="container d-md-flex align-items-center vh-100">
        <div class="d-flex flex-column flex-md-row">
          <div id="contact_informations" class="col-12 col-md-6 col-xl-4">
          <h2 class="mt-5 mt-md-0">Coordonnées</h2>
          <ul class="p-0">
            <li class="mb-1"><font-awesome-icon :icon="['fa-solid', 'at']" class="me-2 text-center" />Email : <a href="mailto:contact@yaniskocher.fr"><strong>contact@yaniskocher.fr</strong></a></li>
            <li class="mb-1"><font-awesome-icon :icon="['fa-solid', 'phone']" class="me-2 text-center" />Téléphone : <a href="tel:0781999003">07.81.99.90.03</a></li>
            <li class="mb-1">
              <font-awesome-icon :icon="['fa-solid', 'map-marker-alt']" class="me-2 text-center" />
              <p class="d-inline-block m-0">34, rue du Général de Gaulle</p>
              <p class="m-0" style="padding-start: 1.25rem">67640 Lipsheim</p>  
            </li>
            <li class="mb-1"><font-awesome-icon :icon="['fa-brands', 'github']" class="me-2 text-center" />GitHub : <a href="https://github.com/YanisKocher"><strong>YanisKocher</strong></a></li>
            <li><font-awesome-icon :icon="['fa-brands', 'linkedin']" class="me-2 text-center" />Linkedin : <a href="https://www.linkedin.com/in/yanis-kocher-683492184/"><strong>Yanis Kocher</strong></a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-xl-8">
          <h2>Envoyer un message</h2>
          <ContactForm />
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ExperiencesPart from './components/ExperiencesPart.vue';
import ContactForm from './components/ContactForm.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    ExperiencesPart,
    ContactForm
  },

  data() {
    return {
      technologies: [
        {
          'label': 'HTML5',
          'icon': 'html5'
        },
        {
          'label': 'CSS3',
          'icon': 'css3'
        },
        {
          'label': 'SASS',
          'icon': 'sass'
        },
        {
          'label': 'JS',
          'icon': 'js'
        },
        {
          'label': 'PHP',
          'icon': 'php'
        },
        {
          'label': 'Laravel',
          'icon': 'laravel'
        },
        {
          'label': 'VueJS',
          'icon': 'vuejs'
        },
        {
          'label': 'Bootstrap',
          'icon': 'bootstrap'
        },
        {
          'label': 'Figma',
          'icon': 'figma'
        }
      ]
    }
  },

  mounted() {
    this.test = document.querySelector('#hey .container').offsetHeight;
  }
}
</script>