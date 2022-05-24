<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button class="btn btn-primary">Hey !</button> -->
  <div class="section_container vh-100">
    <section id="section1" class="vh-100 bg-primary">section 1</section>
    <section id="section2" class="vh-100 bg-danger">section 2</section>
    <section id="section3" class="vh-100 bg-success">section 3</section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }

  data() {
    return {
      //
    }
  },

  mounted() {
    //
  },
  methods: {
    //
  }
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

.section_container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

section {
  scroll-snap-align: start;
}

</style>
