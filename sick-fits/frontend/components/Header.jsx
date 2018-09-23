import React, { Component } from 'react'
import Nav from './Nav'

class Header extends Component {
  render() {
    return (
      <div>
        <div className={'bar'}>
          <a href="">Sick fits</a>
          <Nav />
          <div className={'sub-bar'}>
            <p>search</p>
          </div>
          <div>cart</div>
        </div>
      </div>
    )
  }
}

export default Header
