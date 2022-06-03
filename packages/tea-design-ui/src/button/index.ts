import type { App } from 'vue'
import Button from './button.vue'

Button.install = function (app: App) {
  app.component(Button.name , Button)
}

export default Button
