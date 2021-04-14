import { App } from "vue";
import CheckboxGroup from '../checkbox/src/checkbox-group.vue';

CheckboxGroup.install = (app: App): void => {
    app.component(CheckboxGroup.name, CheckboxGroup); // 注册全局组件
}
// CheckboxGroup作为vue组件，在vue-shim.d.ts声明文件中，类型有定义install方法
type IWithInstall<T> = T & { install(app: App): void };
// CheckboxGroup的install赋值后，重新赋值给_CheckboxGroup的过程中，类型上也要加上install方法
const _CheckboxGroup: IWithInstall<typeof CheckboxGroup> = CheckboxGroup;

export default _CheckboxGroup;
