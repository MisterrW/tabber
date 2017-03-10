var React = require('react');
var ReactDOM = require('react-dom');
import Renderer from './renderer.jsx'

window.onload = function () {
  ReactDOM.render(
    <Renderer/>,
    document.getElementById('app')
  );
}
