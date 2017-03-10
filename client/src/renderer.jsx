import React from 'react'
import Tabber from './tabber'
import TabStringBuilder from './tabStringBuilder'
var fs = require('fs');

export default class Renderer extends React.Component{
  constructor(props) {
    super(props);
    this.tabStringBuilder = new TabStringBuilder()
    this.state = {
      tabString: ""
    }
  }

  formatTabString(unformattedString){
    console.log("in formatTabString")
    const formattedString = this.tabStringBuilder.buildTabString(unformattedString)
    this.setState({tabString: formattedString}, this.render)
  }

  componentDidMount(){
    // let toTabString = fs.readFileSync('output_file_js.txt').toString()
    var getTab = new XMLHttpRequest();
    getTab.open('GET', '/to_tab.txt');
    getTab.onreadystatechange = function() {
      console.log(this)
      this.formatTabString(getTab.responseText)
    }.bind(this)
    getTab.send();

  }

  render(){

    if (this.state.tabString !== "" && this.state.tabString !== "breakbreakbreakbreakbreak") {
      console.log(this.state.tabString)
      return (<div>
        <p>hello</p>
        <Tabber tabString={this.state.tabString}></Tabber>
      </div>)
    } else {
      return (<div>Tab loading. Pleaser wait...</div>)
    }
  }
}
