import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Posts from './components/Profile/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';




const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/profile' Component={Posts} />
          <Route path='/dialogs' Component={Dialogs} />
          <Route path='/news' Component={News} />
          <Route path='/music' Component={Music} />
          <Route path='/settings' Component={Settings} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;