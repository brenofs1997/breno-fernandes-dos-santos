import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { GlobalStyles } from './styles/GlobalStyles'

import { Login } from './components/Login'

function App() {

  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Login />
    </>
  )
}

export default App
