import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import {Button} from 'antd-mobile'
export const HomeView = () => (
  <div>
    <h4>1111111Welcome</h4>
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
