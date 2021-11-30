import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends'
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Component } from 'react';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';

let DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
let ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {

  componentDidMount() { 
    this.props.initializeApp();
  }

  render() {
    
    if (!this.props.initialized) return <Preloader />

    return (
     
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />    
          <div className="app-wrapper-content">
          <React.Suspense fallback={<div> Loading</div>}>
            <Route path="/dialogs" render={()=> <DialogsContainer/> }/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/friends" render={ () => <Friends />}/>
            <Route path="/login" render={ () => <LoginPage />}/>
          </React.Suspense>
          </div>     
        </div>
   
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);



