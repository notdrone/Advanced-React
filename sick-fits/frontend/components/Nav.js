import React, { Component } from 'react'
import Link from 'next/link'
class Nav extends Component {
  render() {
    return (
      <div>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/sell'}>
          <a>Sell!</a>
        </Link>
      </div>
    )
  }
}

export default Nav
