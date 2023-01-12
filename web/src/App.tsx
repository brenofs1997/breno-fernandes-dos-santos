import { GlobalStyles } from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './components/Login'

function App() {

  return (
    <>
      <GlobalStyles />
      <ToastContainer position="bottom-center" />
      <Login />
    </>
  )
}

export default App
