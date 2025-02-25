import $ from 'jquery'
import { v1 as uuid1 } from 'uuid'
import { createApp } from 'vue'
import app from '@/components/content.vue'

const appId = uuid1()
const root = document.createElement("div")
root.id = appId

$(() => {
    $("body").append(root)
    createApp(app).mount(`[id=${appId}]`)
})