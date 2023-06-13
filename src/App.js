import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>

          <Route path='/profile' 
                 Component={ () => <Profile 
                    state={props.state.profilePage}
                    addPost={props.addPost} 
                    />
                 } />

          <Route path='/dialogs' Component={ () => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/news' Component={News} />
          <Route path='/music' Component={Music} />
          <Route path='/settings' Component={Settings} />
          <Route path='/friends' Component={Friends} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;