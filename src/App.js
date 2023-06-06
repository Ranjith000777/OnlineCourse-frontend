import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './login';
import Home from './home';
import GetCourse from './getcourse';
import List from './List';
import EditCourse from './editcourse' ;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/getcourse"element={<GetCourse/>}/>
          <Route path="/show"element={<List/>}/>
          <Route exact path='/edit/:id' element={<EditCourse/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
