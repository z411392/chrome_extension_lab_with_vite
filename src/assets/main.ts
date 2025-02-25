import { createApp } from 'vue'
import popup from '@/pages/popup.vue'

const apps = {
    popup,
}
const page = document.getElementById('app').getAttribute('data-page')
const app = apps[page]

if (app) createApp(app).mount('#app')

