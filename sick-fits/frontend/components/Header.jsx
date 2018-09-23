import React, { Component } from 'react'
import Nav from './Nav'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NPropgress.done()
}

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }

    .sub-bar {
      display: grid;
      grid-template-columns: auto;
      border-bottom: 1px solid ${props => props.theme.lightgrey};
    }
  }
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className={'bar'}>
          <Logo>
            <Link a href="/">
              <a>Sick fits</a>
            </Link>
          </Logo>
          <Nav />
        </div>
        <div className={'sub-bar'}>
          <p>search</p>
        </div>
        <div>cart</div>
      </StyledHeader>
    )
  }
}

export default Header
