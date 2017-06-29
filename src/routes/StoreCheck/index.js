import React from 'react'
import ViewRouter from './routes/View'


export default (store) => ({
  path: 'storeCheck',
 // component   : PageLayout,
  childRoutes : [

    ViewRouter(store)

  ]


})

