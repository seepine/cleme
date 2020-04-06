import ClForm from './form';
import ClInput from './input';
import ClRadio from './radio';
import ClButton from './button';


const components = [
    ClForm, ClInput, ClButton, ClRadio
];

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    //挂载
    // Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ClForm, ClInput, ClButton, ClRadio
};