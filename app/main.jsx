'use strict'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Main from './components/Main.js'

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <Main/>
    </Router>
  </Provider>,
  document.getElementById('main')
)