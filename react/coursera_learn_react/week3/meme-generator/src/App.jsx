import Header from './components/HeaderComponent';
//import Meme from './components/MemeComponent';
// import Form from './components/FormComponent';
// import Login from './components/LoginComponent';
// import StarWars from './components/StarWarsComponent';
import MemeApi from './components/MemeApiComponent';
// import WindowWidth from './components/WindowWidth';
import './styles/App.css'
//import './styles/form.css'
//import './styles/login.css';
//import './styles/starWars.css';

export default function App(){
  return (
    <div>
      <Header />
      {/*
      <Login />
      <br/>
      <div className="form-container">
        <Form />
      </div>
      
      <Meme />
      <StarWars />
      
      <WindowWidth />
      */}


      <MemeApi />
    </div>
  )
}
