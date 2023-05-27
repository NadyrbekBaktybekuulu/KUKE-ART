import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Profile/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/profile' Component={Posts} />
          <Route path='/dialogs' Component={Dialogs} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
