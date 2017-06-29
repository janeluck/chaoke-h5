import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>超客H5</h1>
    <IndexLink to='/scrm' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/scrm/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    <Link to='/scrm/storeCheck/view' activeClassName='page-layout__nav-item--active'>巡店详情</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
