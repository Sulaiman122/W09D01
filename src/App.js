import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Todo from './components/Todo'
import Admin from './components/Admin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/signup' element={<SignUp />}/>
        <Route exact path="/todo" element={<Todo/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
        <Route path='*' element={<h1>wrong path boy</h1>}/>
      </Routes>
    </div>
  );
}


export default App;
