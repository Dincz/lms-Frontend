
//CSS imports


import './index.css'

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

//Library imports
//Components Import
import App from './App.jsx'
import store from './redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store = { store }>
    <BrowserRouter>
             <App />
             <Toaster/>
    </BrowserRouter>
    </Provider> 
)
