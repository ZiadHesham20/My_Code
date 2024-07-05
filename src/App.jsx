
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CategoryDetails from './Pages/CategoryDetails';
import Layout from './Layout/Layout';

function App() {
  return (
    
    <>
     <Routes>
    <Route path='/' element={<Layout childern={<Home />}/>}/>
    <Route path='/categoryDetails/:type' element={<Layout childern={<CategoryDetails />}/>}/>
   </Routes>
    </>
  );
}

export default App;
