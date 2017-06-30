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
    巡店详情浏览
    <Button loading>loading btn</Button>
     <NavBar leftContent="back"
      mode="light"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>

  </div>
)

export default View
