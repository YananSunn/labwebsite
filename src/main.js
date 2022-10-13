// import { createApp } from 'vue'
// import App from './App.vue' 
// // import router from './router'
// import Main from './Main.vue'

// import './assets/main.css'

// // const app = createApp(App)
// const app = createApp(Main)

// // app.use(router)
// app.use(ViewUIPlus);
// app.mount('#app')



import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import Main from './Main.vue'
const app = createApp(Main)

// const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
