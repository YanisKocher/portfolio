import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import { VueWindowSizePlugin } from 'vue-window-size/option-api';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faHandPeace, faCode, faBriefcase, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add( faHandPeace, faCode, faBriefcase, faProjectDiagram, faEnvelope);


const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueWindowSizePlugin);
  
app.mount("#app");
