import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCalendarDays);
library.add(faWallet);
library.add(faChartColumn);



createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
