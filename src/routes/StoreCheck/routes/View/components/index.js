import React from 'react'
import PropTypes from 'prop-types'
import reqwest from 'reqwest'
import scrm from 'components/common/scrm'
import {Button} from 'antd-mobile'
reqwest({
  url: scrm.url('/scrm/storeCheck/view')
})
export const View = () => (
  <div>
    巡店详情浏览
    <Button loading>loading btn</Button>
  </div>
)

export default View
