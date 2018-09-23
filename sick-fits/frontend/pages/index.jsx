import React from 'react'
import Link from 'next/link'

const HomePage = () => (
  <div>
    <p>hey!</p>
    <Link href={'/sell'}>
      <a>sell</a>
    </Link>
  </div>
)

export default HomePage
