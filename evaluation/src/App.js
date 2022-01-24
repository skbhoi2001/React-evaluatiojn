import logo from './logo.svg';
import './App.css';
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
      User Pannel
      <User/>
      <hr/>
      Admin Pannel
      <Admin/>
    </div>
  );
}

export default App;
