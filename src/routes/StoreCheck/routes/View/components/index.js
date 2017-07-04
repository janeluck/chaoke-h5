import React from 'react'
import PropTypes from 'prop-types'
import reqwest from 'reqwest'
import scrm from 'components/common/scrm'
import {Button, NavBar, Icon} from 'antd-mobile'
reqwest({
  url: scrm.url('/scrm/storeCheck/view')
})
export const View = () => (
  <div>
     <NavBar
      mode="light"
      onLeftClick={scrm.goBack}
    >巡店详情</NavBar>
    <div>
      <div>
        <p>黑塔利亚</p>
        <p>巡店时间</p>
        <p>姚斌</p>
      </div>
      <div>

        <p>照片说明</p>
        <div>

        </div>

      </div>



    </div>



  </div>
)

export default View
