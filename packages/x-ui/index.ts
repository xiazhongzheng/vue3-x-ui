import { App } from 'vue';
import Button from '@x-ui/button';
import Icon from '@x-ui/icon';
import ButtonGroup from '@x-ui/button-group';
import Row from '@x-ui/row';
import Col from '@x-ui/col';
import Checkbox from '@x-ui/checkbox';
import CheckboxGroup from '@x-ui/checkbox-group'

const components = [
    Button,
    Icon,
    ButtonGroup,
    Row,
    Col,
    Checkbox,
    CheckboxGroup
]

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

export default {
    install
}