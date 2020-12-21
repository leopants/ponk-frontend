import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './components/Signupform/SignupForm';
import LoginForm from './components/Loginform/LoginForm';
import Header from './components/Header/Header';
import Calltext from './components/CallText/Calltext'


function App() {
  return (
    <div>
      <Header />
      <Calltext />
      <LoginForm />
    </div>
  );
}

export default App;

