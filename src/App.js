import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Header from './Header';
import AllStudents from './AllStudents';
import CreateStudent from './CreateStudent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App()
{
  return (
    <Router>
      <Switch>
      <Route path ='/createteacher'>
        <div className = 'app'>
        <Navbar />
      <div className = 'appHeader'>
        <Header />
        <h1>Create New Teacher</h1>
        </div>
        </div>  
        </Route>
        <Route path ='/teachers'>
        <div className = 'app'>
        <Navbar />
      <div className = 'appHeader'>
        <Header />
        <h1>All Teacher</h1>
        </div>
        </div>  
          </Route>
        <Route path ='/createstudent'>
        <div className = 'app'>
        <Navbar />
      <div className = 'appHeader'>
        <Header />
        <CreateStudent />
        </div>
        </div>  
          </Route>
        <Route path ='/students'>
        <div className = 'app'>
        <Navbar />
      <div lassName = 'appHeader'>
        <Header />
        <AllStudents />
        </div>
        </div>
        </Route>
        <Route path ='/'>
      <div className = 'app'>
        <Navbar />
      <div lassName = 'appHeader'>
        <Header />
        <Home />
        </div>
        </div>
        </Route>
        </Switch>
      </Router>
  );
}

export default App;
