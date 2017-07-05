import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import reqwest from 'reqwest'
import scrm from 'components/common/scrm'
import {Button, NavBar, Icon, Carousel, Modal} from 'antd-mobile'
reqwest({
  url: scrm.url('/scrm/storeCheck/view')
})
window.ii++
export const View = () => (
  <div>
    <NavBar
      mode="light"
      onLeftClick={scrm.goBack}
    >巡店详情</NavBar>
    <div>
      <ul role="nav">
        <li><Link to="/scrm">/scrm</Link></li>
        <li><Link to="/scrm/storeCheck/view">/scrm/storeCheck/view</Link></li>
      </ul>
      <div>
        <p>黑塔利亚</p>
        <p>巡店时间</p>
        <p>姚斌</p>
      </div>
      <div>

        <p>照片说明</p>
        <div>

          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
          <img src="https://randomuser.me/api/portraits/men/6.jpg" alt=""/>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" alt=""/>
        </div>


        <Modal visible>
          <Carousel>
            <img src="https://randomuser.me/api/portraits/men/1.jpg"/>
            <img src="https://randomuser.me/api/portraits/men/2.jpg"/>
            <img src="https://randomuser.me/api/portraits/men/3.jpg"/>

          </Carousel>
        </Modal>

      </div>


    </div>


  </div>
)

export default View
