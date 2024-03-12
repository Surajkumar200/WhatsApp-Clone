import { GoogleOAuthProvider } from '@react-oauth/google';
// import './App.css'
import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider';

function App() {
 
  const clientId = '959168974297-6dkcuevjis69oj92a2km1hgkjpsc3ouu.apps.googleusercontent.com';
  
return (
    <GoogleOAuthProvider clientId={clientId}> 
    <AccountProvider >
     <Messenger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
