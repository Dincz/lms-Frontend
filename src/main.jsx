
//CSS imports


import './index.css'

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import BrowserRouter from 'react-router-dom'

//Library imports
//Components Import
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
             <App />
             <Toaster/>
    </BrowserRouter>
)
