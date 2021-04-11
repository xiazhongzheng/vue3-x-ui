import { App } from 'vue';
import Button from '@x-ui/button';
import Icon from '@x-ui/icon';
import ButtonGroup from '@x-ui/button-group';

const components = [
    Button,
    Icon,
    ButtonGroup
]

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

export default {
    install
}