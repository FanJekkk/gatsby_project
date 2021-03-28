import React from 'react'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
class MyComponent extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = HALO({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      Foreground content goes here
    </div>
  }
}