
import './App.css';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux'
import store from './redux/store'
import Home from "./components/Home";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Navbar/>

     <Home/>
    </div>
    </Provider>
  );
}

export default App;
