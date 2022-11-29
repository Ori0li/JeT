import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Home from './page/Home'
import Login from './page/login'
import Regist from './page/regist'
import Category from './page/cateDetail'
import Map from './page/mapDetail'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/regist' element={<Regist/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/map' element={<Map/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
