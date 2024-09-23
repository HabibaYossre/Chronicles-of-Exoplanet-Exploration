import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import CardsManger from './Pages/Cards/CardsManger';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cards" element={<CardsManger />} />
      </Routes>
    </div>
  );
}

export default App;
