import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
import './styles.css';
function component() {
   var element = document.createElement('pre');
  var btn = document.createElement('button');

  // Lodash, now imported by this script dddddd222
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

 
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
 
  return element;  
}   

// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);
console.log({module})
if (module.hot) {
  console.log('module hot')
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe moduless!ss ssss');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
} 