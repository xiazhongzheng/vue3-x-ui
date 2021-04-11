import { defineComponent, openBlock, createBlock, toDisplayString } from 'vue';

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

export default _Icon;
