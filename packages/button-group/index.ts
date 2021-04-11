import { App } from "vue";
import ButtonGroup from '../button/src/button-group.vue';

ButtonGroup.install = (app: App): void => {
    app.component(ButtonGroup.name, ButtonGroup); // 注册全局组件
}
// ButtonGroup作为vue组件，在vue-shim.d.ts声明文件中，类型有定义install方法
type IWithInstall<T> = T & { install(app: App): void };
// ButtonGroup的install赋值后，重新赋值给_ButtonGroup的过程中，类型上也要加上install方法
const _ButtonGroup: IWithInstall<typeof ButtonGroup> = ButtonGroup;

export default _ButtonGroup;
