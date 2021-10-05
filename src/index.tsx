import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Switch } from 'react-router-dom'
import NormalLayout from './components/layouts/NormalLayout'
import './assets/styles/common.scss'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
            <Switch>
                <NormalLayout />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
