import { App } from "vue";
import Checkbox from './src/checkbox.vue';

Checkbox.install = (app: App): void => {
    app.component(Checkbox.name, Checkbox); // 注册全局组件
}
// Checkbox作为vue组件，在vue-shim.d.ts声明文件中，类型有定义install方法
type IWithInstall<T> = T & { install(app: App): void };
// Checkbox的install赋值后，重新赋值给_Checkbox的过程中，类型上也要加上install方法
const _Checkbox: IWithInstall<typeof Checkbox> = Checkbox;

export default _Checkbox;
