import { App } from "vue";
import Button from './src/button.vue';

Button.install = (app: App): void => {
    app.component(Button.name, Button); // 注册全局组件
}
// Button作为vue组件，在vue-shim.d.ts声明文件中，类型有定义install方法
type IWithInstall<T> = T & { install(app: App): void };
// Button的install赋值后，重新赋值给_Button的过程中，类型上也要加上install方法
const _Button: IWithInstall<typeof Button> = Button;

export default _Button;
