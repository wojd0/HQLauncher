import FloatingVue from 'floating-vue'

export default defineNuxtPlugin(() => {
    FloatingVue.options.themes.tooltip.delay.show = 505
    FloatingVue.options.themes.tooltip.delay.hide = 250
    FloatingVue.options.distance = 8

    return
})
