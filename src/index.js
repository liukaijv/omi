import Omi from './omi.js';
import Mustache from './mustache.js';
import Component from './component.js';

Omi.template = Mustache.render;

Omi.Component = Component;
if(window.Omi){
    module.exports = window.Omi;
}else {
    window.Omi = Omi;
    module.exports = Omi;
}
