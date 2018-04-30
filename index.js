import React from 'react'
import { render } from 'react-dom'
import Routes from './src/AppRoutes'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import './styles.scss'

render(
  <Router>
    <Routes />
  </Router>
, document.getElementById('root'))
