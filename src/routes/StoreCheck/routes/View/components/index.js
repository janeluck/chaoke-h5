import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import reqwest from 'reqwest'
import scrm from 'components/common/scrm'
import {Button, NavBar, Icon, Carousel, Modal} from 'antd-mobile'
import {Table as AntdTable}   from 'antd'
import _ from 'lodash'
reqwest({
  url: scrm.url('/scrm/storeCheck/view')
})

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];


class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      selectedIndex: 0
    }
  }

  onClose = ()=> {
    this.setState({
      visible: false
    })
  }

  render() {
    const {visible, selectedIndex} = this.state
    const imgs = _.map(_.range(6), i => {
      return `https://dummyimage.com/640x640/79e3f2/757575.png&text=${i}`
    })
    return <div>
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
          <AntdTable dataSource={dataSource} columns={columns}/>
          <AntdTable />
        </div>
        <div>

          <p>照片说明</p>
          <div>

            {_.map(imgs, (url, i) => <img width='320' height='320' onClick={()=> {
              this.setState({
                selectedIndex: i,
                visible: true
              })
            }} src={url} key={`img-${i}`}/>)}
          </div>


          <Modal visible={visible} closable onClose={this.onClose}>
            <div style={{marginTop: '25%'}}>
              <Carousel selectedIndex={selectedIndex}>
                {_.map(imgs, (url, i) => <div key={`Carousel-${i}`}><img src={url}/></div>)}

              </Carousel>
            </div>

          </Modal>

        </div>


      </div>


    </div>
  }
}

export default View
