import React, { Component } from 'react'
import Link from 'next/link'

class Sell extends Component {
  render() {
    return (
      <div>
        <p>sell</p>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </div>
    )
  }
}

export default Sell
