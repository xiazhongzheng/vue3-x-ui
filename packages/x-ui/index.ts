import { App } from 'vue';
import Button from '@x-ui/button';
import Icon from '@x-ui/icon';
import ButtonGroup from '@x-ui/button-group';
import Row from '@x-ui/row';
import Col from '@x-ui/col';

const components = [
    Button,
    Icon,
    ButtonGroup,
    Row,
    Col
]

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

export default {
    install
}