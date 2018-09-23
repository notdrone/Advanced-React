import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'
import styled from 'styled-components'

const MyButton = styled.button`
  background-color: red;
  padding: 4px;
  font-size: 1rem;
  color: white;
  border-radius: 4px;
  span {
    font-size: 2rem;
  }
`

const BigPoop = styled.span`
  font-size: 3rem;
`

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Sick!!!! <span>💩</span>
        </MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Page
