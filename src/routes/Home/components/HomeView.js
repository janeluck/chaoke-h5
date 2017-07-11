import React from 'react'
import { Link } from 'react-router'


import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import {Button} from 'antd-mobile'
window.ii = 1
export const HomeView = () => (
  <div>
    <h4>1111111Welcome</h4>
    <ul role="nav">
          <li><Link to="/scrm">/scrm</Link></li>
          <li><Link to="/scrm/storeCheck/view">/scrm/storeCheck/view</Link></li>
        </ul>
    <Button>button</Button>
      <Button className="btn" type="primary">primary button</Button>
        <Button className="btn" disabled onClick={e => console.log(e)}>
          disabled button
        </Button>
        <Button className="btn" loading>loading button</Button>
        <Button className="btn" icon="check-circle-o">with icon</Button>

    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
