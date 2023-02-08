import logo from './logo.svg';
import './App.css';
import { Car2 } from './Car2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Car } from './Car';
import Menu from './Menu';
import { MyForm } from './MyForm';
import Life from './Lifecycle';
import { Timer } from './Timer';
import { useContext } from 'react';
import {NameContext} from './NameContext';
import UserList from './Context/UserList';
import User from './Context/User';

function App() {
  const name = 'abc'
  const obj = {
    brand: "Ford", model: "Mustang", color: "red", year: 1964
  }
  const nameContext = useContext(NameContext);
  return (
    <div className="App">
      {/* <Car2 cardetail = {obj} otherDetails = "not available"/> */}
      <NameContext.Provider value="heli1234">
        <BrowserRouter>
          <Routes>
            <Route element={<Menu />}>
              <Route path='/' element={<><Car cardetail={obj} name={name} /></>} />
              <Route path='/car2' element={<MyForm />} />
              <Route path='/Lifecycle' element={<Life />} />
              <Route path='/usereducer' element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NameContext.Provider>
    </div>
  );
}

export function App2() {
  let styles = {
    header: {
      background: 'red'
    },
    Logo: {
      Color: 'blue',
      TextAlign: 'center'
    }
  }

  return <h1 style={styles.header}>hello from app 2</h1>
}

export default App;