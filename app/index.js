import module1 from './js/module1.js';
import module2 from './js/module2.js';
require("exports-loader?plugin!./libs/plugin.js");       //这一句代表往非模块化的js文件最后加入一句export["plugin"]
import $ from 'jquery';
import './css/style.css';

function component() {
    var element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = 'Hello webpack';
    element.classList.add('hello');
    module1();
    module2();
    return element;
}
document.body.appendChild(component());