import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Front from './pages/front';
import Flower from './pages/flower';

const App =() => {
  return (
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Front />} />
       <Route path="/flower" element={<Flower />} />
       </Routes>
    </BrowserRouter>    
  );
}

export default App;
