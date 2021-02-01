import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/contactus';
import NotificationSection from './components/Notification'
import Admin from './components/Admin'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
class App extends React.Component {
 

  render() {
    return (
      <Router>
        <div style={styles}>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/notifications' component={NotificationSection}></Route>
            <Route path='/contactus' component={ContactUs}></Route>
            <Route path='/admin' component={Admin}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
} 



export default App