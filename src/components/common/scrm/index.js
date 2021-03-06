/**
 * Created by janeluck on 17/6/29.
 */
import _ from 'lodash'
const scrm = {
  //todo: 根据token具体用途还需要再改
  url: function (str) {

    const token = window.location.search.match(/token=([^&]*)/) && window.location.search.match(/token=([^&]*)/)[1]
    if (/localhost|10.10.3.195/.test(window.location.host)) {
      str = '/api' + str
    }


    return str + "?token=" + token
  },
  // 返回app内部
  goBack: function () {
    window.jsObj && _.isFunction(window.jsObj.goBack) && window.jsObj.goBack()
  }
}

export default scrm
