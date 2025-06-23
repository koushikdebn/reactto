import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { BrowserRouter } from "react-router-dom";
import Store from './app/Store';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={Store}>
    <Layout />
  </Provider>
  </BrowserRouter>,
)
