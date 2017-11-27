import Vue from 'vue';
import pureEditor from './pureEditor'; 

const install = function( Vue, config = {}){
    if(install.installed) return;
    Vue.component(pureEditor.name, pureEditor);
}

module.exports = {
    install,
    pureEditor
}