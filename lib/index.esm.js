import { defineComponent, openBlock, createBlock, toDisplayString } from 'vue';

var script$1 = defineComponent({
    name: 'XButton'
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", null, "按钮"))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1); // 注册全局组件
};
// Button的install赋值后，重新赋值给_Button的过程中，类型上也要加上install方法
const _Button = script$1;

var script = defineComponent({
    name: 'XIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", {
    class: `x-icon-${_ctx.name}`
  }, toDisplayString(_ctx.name), 3 /* TEXT, CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Icon = script;

const components = [
    _Button,
    _Icon
];
console.log('1111', _Button);
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    install
};

export default index;
