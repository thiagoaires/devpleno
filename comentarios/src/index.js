import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import base, {providers, auth} from './Base'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-css-only'

ReactDOM.render(<App base={base} auth={auth} providers={providers}/>, document.getElementById('root'))
registerServiceWorker()
