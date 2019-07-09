import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { createGlobalStyle } from 'styled-components'

createGlobalStyle`
  body {
    width: 100%;
    padding:0;
    margin: 0; 
    background: #f2f4f5 !important;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
