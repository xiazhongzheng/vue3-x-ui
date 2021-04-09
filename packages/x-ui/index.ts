import { App } from 'vue';
import Button from '@x-ui/button';
import Icon from '@x-ui/icon';

const components = [
    Button,
    Icon
]

console.log('1111',Button)
const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

export default {
    install
}