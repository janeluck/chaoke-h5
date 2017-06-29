import React from 'react'
import PropTypes from 'prop-types'
import reqwest from 'reqwest'
import scrm from 'components/common/scrm'

reqwest({
  url: scrm.url('/rest/scrmCheck/checkPoint')
})
export const View = () => (
  <div>
    巡店详情浏览
  </div>
)

export default View
